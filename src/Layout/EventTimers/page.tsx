import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react"; // Removed the 'X' import since it's not used
import { client, urlFor } from "@/lib/sanity.ts";


// Type definitions
interface TimerConfig {
    src?: never;
    name: string;
    schedule: { day: string; times: string[] }[];
    description: string;
    content: string;
    type: "rift" | "custom"; // Added type field for event categorization

}

// Define NextEvent type for the countdown
interface NextEvent {
    formattedDate: string;
    countdownParts: string[]; // You might want to adjust the type for the countdown if needed
}

// ModalProps to handle both event and nextEvent types
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    event: TimerConfig | null;  // Event is of type TimerConfig or null
    nextEvent?: NextEvent | null;  // Make nextEvent optional
}

const Modal = ({ isOpen, onClose, event, nextEvent }: ModalProps) => {
    const [countdown, setCountdown] = useState<string[]>(["00", "00", "00", "00"]); // Default countdown

    // Function to get the schedule for a given day
    const getScheduleForDay = (currentDay: string) => {
        if (!event || !event.schedule) return []; // Return an empty array if event or schedule is null
        const todaySchedule = event.schedule.find(({ day }) => day === currentDay);
        return todaySchedule ? todaySchedule.times : [];
    };

    const currentDay = new Date().toLocaleString("en-US", { weekday: "long" }); // Get the current day (e.g., "Monday")
    let currentDaySchedule = getScheduleForDay(currentDay);

    // Function to check if all events for today have passed
    const areAllEventsFinished = (schedule: string[]) => {
        return schedule.every((time) => {
            const [hours, minutes] = time.split(":");
            const eventTime = new Date();
            eventTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
            return eventTime.getTime() < Date.now(); // Check if the event time is in the past
        });
    };

    // If today's events are over, get the next day's schedule
    if (areAllEventsFinished(currentDaySchedule)) {
        const nextDay = new Date();
        nextDay.setDate(new Date().getDate() + 1); // Move to the next day
        const nextDayName = nextDay.toLocaleString("en-US", { weekday: "long" });
        currentDaySchedule = getScheduleForDay(nextDayName);
    }

    // Countdown logic
    useEffect(() => {
        if (nextEvent && nextEvent.formattedDate) {
            const targetTime = new Date(nextEvent.formattedDate).getTime();
            const interval = setInterval(() => {
                const now = Date.now();
                const remainingTime = targetTime - now;

                if (remainingTime <= 0) {
                    clearInterval(interval); // Stop the interval when the countdown reaches 0
                    setCountdown(["00", "00", "00", "00"]);
                } else {
                    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                    setCountdown([
                        String(days).padStart(2, "0"),
                        String(hours).padStart(2, "0"),
                        String(minutes).padStart(2, "0"),
                        String(seconds).padStart(2, "00"),
                    ]);
                }
            }, 1000);

            return () => clearInterval(interval); // Clean up the interval on component unmount
        }
    }, [nextEvent]);

    // If the modal is not open or event is null, return null (don't render the modal)
    if (!isOpen || !event) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg sm:max-w-md lg:max-w-lg shadow-2xl">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{event.name}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">{event.description}</p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Schedule ({new Date().toLocaleString("en-US", { weekday: "long" })}):
                </h3>
                <ul className="space-y-2">
                    {currentDaySchedule.length > 0 ? (
                        currentDaySchedule.map((time, idx) => {
                            const [hours, minutes] = time.split(":");
                            const date = new Date();
                            date.setHours(parseInt(hours), parseInt(minutes), 0, 0);

                            return (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-300">
                                    {date.toLocaleString("en-US", {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "2-digit",
                                        hour12: true,
                                    })}
                                </li>
                            );
                        })
                    ) : (
                        <p className="text-sm text-gray-500">No schedule for today. Showing next day's schedule:</p>
                    )}
                </ul>

                {/* Formatted Date Section */}
                {nextEvent && nextEvent.formattedDate && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Next Event:</h3>
                        <div className="text-yellow-300 text-xl">{nextEvent.formattedDate}</div>
                    </div>
                )}

                {/* Countdown Section */}
                {nextEvent && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Countdown:</h3>
                        <div className="flex gap-2">
                            {countdown.map((part, index) => {
                                const labels = ["D", "H", "M", "S"];
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-700 rounded-lg p-2 text-center min-w-[50px]"
                                    >
                                        <div className="text-xl font-bold text-yellow-400">
                                            {part}
                                        </div>
                                        <div className="text-xs text-gray-500">{labels[index]}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};




export function TestComponentScheme() {
    const [timers, setTimers] = useState<TimerConfig[]>([]);
    const [nextEvents, setNextEvents] = useState<Record<string, NextEvent>>({});
    const [upcoming30MinEvents, setUpcoming30MinEvents] = useState<TimerConfig[]>([]);
    const [theme, setTheme] = useState("dark"); // Default theme is dark
    const [modalOpen, setModalOpen] = useState(false); // Modal open state
    const [selectedEvent, setSelectedEvent] = useState<TimerConfig | null>(null); // Selected event for the modal

    // Theme toggle handler
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        const loadTimers = async () => {
            try {
                const data = await client.fetch(`
                    *[_type == "EventTimers"]{
                        name,
                        "src": src,
                        description,
                        content,
                        type,
                        "schedule": schedule[] { day, times }
                    }
                `);
                setTimers(data);
            } catch (error) {
                console.error("Error loading timers from Sanity:", error);
                setTimers([]);
            }
        };

        loadTimers();
    }, []);

    useEffect(() => {
        const calculateNextEvent = () => {
            const newNextEvents: Record<string, NextEvent> = {};
            const newUpcoming30MinEvents: TimerConfig[] = [];
            const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            timers.forEach((timer) => {
                const now = new Date();
                let nextEventTimestamp: number | null = null;
                let closestEventFormatted = "";
                let closestEventWithin30Min = false;

                timer.schedule.forEach(({ day, times }) => {
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

                        const timeDiff = eventTimestamp - now.getTime();
                        if (timeDiff >= 0 && timeDiff <= 30 * 60 * 1000) {
                            closestEventWithin30Min = true;
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

                    if (closestEventWithin30Min) {
                        newUpcoming30MinEvents.push(timer);
                    }
                }
            });

            setNextEvents((prevEvents) => ({ ...prevEvents, ...newNextEvents }));
            setUpcoming30MinEvents(newUpcoming30MinEvents);
        };

        if (timers.length > 0) {
            calculateNextEvent();
            const interval = setInterval(() => {
                calculateNextEvent();
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timers]);

    const riftEvents = timers.filter((timer) => timer.type === "rift");
    const customEvents = timers.filter((timer) => timer.type === "custom");

    const handleEventClick = (event: TimerConfig) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    return (
        <div
            className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black" : "bg-gradient-to-br from-gray-200 via-gray-100 to-white"}`}
        >
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={toggleTheme}
                    className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    Toggle {theme === "dark" ? "Light" : "Dark"} Mode
                </button>

                <h2 className={`text-4xl font-extrabold text-center mb-10 ${theme === "dark" ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" : "text-gray-800"}`}>
                    {timers.length === 0 ? "No Upcoming Events" : "Upcoming Events"}
                </h2>

                {/* Upcoming Events in Next 30 Minutes */}
                <h3 className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-6 text-center p-4 rounded-xl shadow-xl ${theme === "dark" ? "bg-yellow-700/80" : "bg-yellow-500/90"}`}>
                    Events in the Next 30 Minutes
                </h3>
                {upcoming30MinEvents.length === 0 ? (
                    <div className={`text-center text-gray-400 p-8 rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
                        <Clock className={`mx-auto mb-4 w-16 h-16 ${theme === "dark" ? "text-yellow-500 opacity-70" : "text-yellow-500"}`} />
                        <p className="text-xl">No events are coming up within the next 30 minutes.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {upcoming30MinEvents.map((timer) => {
                            const nextEvent = nextEvents[timer.name];

                            return (
                                <motion.div
                                    key={timer.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`bg-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl ${theme === "light" ? "bg-gray-100 border-gray-300" : ""}`}
                                    onClick={() => handleEventClick(timer)} // Open modal on click
                                >
                                    {timer.src && (
                                        <div className="relative">
                                            <img
                                                src={urlFor(timer.src).url()}
                                                alt={timer.name}
                                                className="w-full h-56 object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                                            />
                                            <div className="absolute inset-0 " />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-yellow-300 mb-2">{timer.name}</h3>
                                        <p className="text-sm text-gray-400 mb-4">{timer.description}</p>
                                        <div className="flex items-center text-sm text-gray-300 mb-2">
                                            <Calendar className="mr-2 w-4 h-4 text-yellow-500" />
                                            <strong className="mr-2">Next Time:</strong>
                                            {nextEvent ? nextEvent.formattedDate : "No upcoming events"}
                                        </div>
                                        {nextEvent && (
                                            <div className="flex gap-2 mt-3">
                                                {nextEvent.countdownParts.map((part, index) => {
                                                    const labels = ["D", "H", "M", "S"];
                                                    return (
                                                        <div key={index} className="bg-gray-700 rounded-lg p-2 text-center min-w-[50px]">
                                                            <div className="text-xl font-bold text-yellow-400">{part}</div>
                                                            <div className="text-xs text-gray-500">{labels[index]}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {customEvents.length > 0 && (
                    <section className="mt-12">
                        <h3 className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                            Custom Events
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {customEvents.map((timer) => {
                                const nextEvent = nextEvents[timer.name];
                                return (
                                    <motion.div
                                        key={timer.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`bg-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl ${theme === "light" ? "bg-gray-100 border-gray-300" : ""}`}
                                        onClick={() => handleEventClick(timer)} // Open modal on click
                                    >
                                        {timer.src && (
                                            <div className="relative">
                                                <img
                                                    src={urlFor(timer.src).url()}
                                                    alt={timer.name}
                                                    className="w-full h-56 object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                                                />
                                                <div className="absolute inset-0 " />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">{timer.name}</h3>
                                            <p className="text-sm text-gray-400 mb-4">{timer.description}</p>
                                            <div className="flex items-center text-sm text-gray-300 mb-2">
                                                <Calendar className="mr-2 w-4 h-4 text-yellow-500" />
                                                <strong className="mr-2">Next Time:</strong>
                                                {nextEvent ? nextEvent.formattedDate : "No upcoming events"}
                                            </div>
                                            {nextEvent && (
                                                <div className="flex gap-2 mt-3">
                                                    {nextEvent.countdownParts.map((part, index) => {
                                                        const labels = ["D", "H", "M", "S"];
                                                        return (
                                                            <div key={index} className="bg-gray-700 rounded-lg p-2 text-center min-w-[50px]">
                                                                <div className="text-xl font-bold text-yellow-400">{part}</div>
                                                                <div className="text-xs text-gray-500">{labels[index]}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {riftEvents.length > 0 && (
                    <section className="mt-12">
                        <h3 className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                            Custom Events
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {riftEvents.map((timer) => {
                                const nextEvent = nextEvents[timer.name];
                                return (
                                    <motion.div
                                        key={timer.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`bg-gray-800 border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl ${theme === "light" ? "bg-gray-100 border-gray-300" : ""}`}
                                        onClick={() => handleEventClick(timer)} // Open modal on click
                                    >
                                        {timer.src && (
                                            <div className="relative">
                                                <img
                                                    src={urlFor(timer.src).url()}
                                                    alt={timer.name}
                                                    className="w-full h-56 object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                                                />
                                                <div className="absolute inset-0 " />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">{timer.name}</h3>
                                            <p className="text-sm text-gray-400 mb-4">{timer.description}</p>
                                            <div className="flex items-center text-sm text-gray-300 mb-2">
                                                <Calendar className="mr-2 w-4 h-4 text-yellow-500" />
                                                <strong className="mr-2">Next Time:</strong>
                                                {nextEvent ? nextEvent.formattedDate : "No upcoming events"}
                                            </div>
                                            {nextEvent && (
                                                <div className="flex gap-2 mt-3">
                                                    {nextEvent.countdownParts.map((part, index) => {
                                                        const labels = ["D", "H", "M", "S"];
                                                        return (
                                                            <div key={index} className="bg-gray-700 rounded-lg p-2 text-center min-w-[50px]">
                                                                <div className="text-xl font-bold text-yellow-400">{part}</div>
                                                                <div className="text-xs text-gray-500">{labels[index]}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                )}

            </div>

            {/* Modal */}

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} event={selectedEvent!} />
        </div>

    );
}


