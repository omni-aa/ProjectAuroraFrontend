import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simplified and more robust type definitions
interface TimerConfig {
    src?: string;
    name: string;
    schedule: Record<string, string[]>;
    description: string;
    content: string;
}

interface NextEvent {
    formattedDate: string;
    countdownParts: string[];
}

export function TestComponent() {
    const [active, setActive] = useState<TimerConfig | null>(null);
    const [timers, setTimers] = useState<TimerConfig[]>([]);
    const [nextEvents, setNextEvents] = useState<Record<string, NextEvent>>({});

    useEffect(() => {
        const loadTimers = async () => {
            try {
                const response = await fetch("/timers.json");
                const data = (await response.json()) as TimerConfig[];
                setTimers(data);
            } catch (error) {
                console.error("Error loading timers:", error);
                setTimers([]);
            }
        };
        loadTimers();
    }, []);

    useEffect(() => {
        const calculateNextEvent = () => {
            const newNextEvents: Record<string, NextEvent> = {};
            const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            timers.forEach((timer) => {
                const now = new Date();
                let nextEventTimestamp: number | null = null;
                let closestEventFormatted = "";

                Object.entries(timer.schedule).forEach(([day, times]) => {
                    const dayIndex = daysOrder.indexOf(day);

                    times.forEach((eventTime) => {
                        const [hours, minutes, seconds = 0] = eventTime.split(":").map(Number);
                        const eventDate = new Date(now);

                        while (eventDate.getDay() !== dayIndex) {
                            eventDate.setDate(eventDate.getDate() + 1);
                        }
                        eventDate.setHours(hours, minutes, seconds, 0);

                        if (eventDate <= now) {
                            eventDate.setDate(eventDate.getDate() + 7);
                        }

                        const eventTimestamp = eventDate.getTime();

                        if (nextEventTimestamp === null || eventTimestamp < nextEventTimestamp) {
                            nextEventTimestamp = eventTimestamp;
                            closestEventFormatted = eventDate.toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                weekday: "short",
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                            });
                        }
                    });
                });

                if (nextEventTimestamp !== null) {
                    const timeDiff = nextEventTimestamp - now.getTime();
                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                    newNextEvents[timer.name] = {
                        formattedDate: closestEventFormatted,
                        countdownParts: [
                            days.toString().padStart(2, "0"),
                            hours.toString().padStart(2, "0"),
                            minutes.toString().padStart(2, "0"),
                            seconds.toString().padStart(2, "0"),
                        ],
                    };
                }
            });

            setNextEvents((prevEvents) => ({
                ...prevEvents,
                ...newNextEvents,
            }));
        };

        if (timers.length > 0) {
            calculateNextEvent();

            const interval = setInterval(() => {
                calculateNextEvent();
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timers]);

    return (
        <>
            <section className="py-8 bg-gray-800 text-white">
                <h2 className="text-3xl font-bold text-center mb-6">
                    {timers.length === 0 ? "No Upcoming Rifts" : "Upcoming Rifts"}
                </h2>
                {timers.length === 0 ? (
                    <p className="text-center text-gray-400">No events are currently scheduled.</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {timers.map((timer) => {
                            const nextEvent = nextEvents[timer.name];

                            return (
                                <motion.div
                                    key={timer.name}
                                    onClick={() => setActive(timer)}
                                    className="p-4 bg-gray-700 rounded-xl shadow-lg cursor-pointer hover:bg-gray-600 transition duration-300 relative"
                                >
                                    {timer.src && (
                                        <img
                                            src={timer.src}
                                            alt={timer.name}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    )}
                                    <h3 className="mt-4 font-bold text-xl">{timer.name}</h3>
                                    <p className="text-sm text-gray-300">{timer.description}</p>
                                    <div className="mt-2 text-sm text-gray-400">
                                        <strong className="text-primary">Next Time:</strong>
                                        <div className="text-gray-50">
                                            {nextEvent ? nextEvent.formattedDate : "No upcoming events"}
                                        </div>
                                        {nextEvent && (
                                            <div className="flex gap-1 mt-1">
                                                {nextEvent.countdownParts.map((part, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold"
                                                    >
                                                        {part}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </ul>
                )}
            </section>

            {active && (
                <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/50">
                    <div className="bg-gray-800 text-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative max-h-[80%] overflow-y-auto">
                        <button
                            className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-gray-400"
                            onClick={() => setActive(null)}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold">{active.name}</h3>
                        <p className="mt-2 text-sm">{active.description}</p>
                        <div className="mt-4 space-y-4">
                            {active.schedule &&
                                Object.entries(active.schedule).map(([day, times]) => (
                                    <div key={day} className="text-sm">
                                        <strong>{day}</strong>:
                                        {times.map((eventTime) => (
                                            <div key={eventTime} className="p-2 mt-2">
                                                <p className="text-sm">
                                                    <strong>Time:</strong> {eventTime}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
