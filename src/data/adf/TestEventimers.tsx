import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface TimerConfig {
    name: string;
    days: string[];  // Array of days when the event occurs
    schedule: string[]; // Array of times when the event occurs
}

const TimerPage: React.FC = () => {
    const [timers, setTimers] = useState<TimerConfig[]>([]);
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: string[] }>({});
    const [nextEventDay, setNextEventDay] = useState<{ [key: string]: string[] }>({});
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Only one dropdown at a time

    // Load timer data
    useEffect(() => {
        const loadTimers = async () => {
            const response = await fetch('/timers.json');
            const data: TimerConfig[] = await response.json();
            setTimers(data);
        };

        loadTimers();
    }, []);

    // Countdown logic
    useEffect(() => {
        if (timers.length === 0) return;

        const interval = setInterval(() => {
            const newTimeLeft: { [key: string]: string[] } = {};
            const newNextEventDay: { [key: string]: string[] } = {};

            timers.forEach((timer) => {
                const now = new Date();
                const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday, etc.

                const eventDays = timer.days;
                const eventTimes = timer.schedule;
                const timerTimeLeft: string[] = [];
                const timerNextEventDays: string[] = [];

                eventDays.forEach((eventDay) => {
                    const eventDayIndex = getDayIndex(eventDay);

                    eventTimes.forEach((eventTime) => {
                        const eventTimeParts = eventTime.split(":");
                        const eventHour = parseInt(eventTimeParts[0], 10);
                        const eventMinute = parseInt(eventTimeParts[1], 10);

                        let daysUntilNextEvent = eventDayIndex - currentDay;
                        if (daysUntilNextEvent < 0) {
                            daysUntilNextEvent += 7;
                        }

                        const nextEventDate = new Date(now);
                        nextEventDate.setDate(now.getDate() + daysUntilNextEvent);
                        nextEventDate.setHours(eventHour, eventMinute, 0, 0);

                        const timeDifference = nextEventDate.getTime() - now.getTime();
                        const eventStartTime = nextEventDate.getTime();

                        const eventInProgress = now.getTime() >= eventStartTime && now.getTime() <= (eventStartTime + 3600000); // Assuming 1-hour event duration

                        timerNextEventDays.push(`${getDayName(nextEventDate.getDay())} at ${eventTime}`);

                        if (timeDifference <= 0) {
                            timerTimeLeft.push('Event has occurred!');
                        } else if (eventInProgress) {
                            timerTimeLeft.push('Event in progress');
                        } else {
                            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                            timerTimeLeft.push(`${hours}h ${minutes}m ${seconds}s`);
                        }
                    });
                });

                newTimeLeft[timer.name] = timerTimeLeft;
                newNextEventDay[timer.name] = timerNextEventDays;
            });

            setTimeLeft(newTimeLeft);
            setNextEventDay(newNextEventDay);
        }, 1000);

        return () => clearInterval(interval);
    }, [timers]);

    const getDayIndex = (day: string) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days.indexOf(day);
    };

    const getDayName = (dayIndex: number) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[dayIndex];
    };

    // Handle dropdown toggle
    const toggleDropdown = (name: string) => {
        setOpenDropdown(prev => prev === name ? null : name); // Toggle current timer's dropdown
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gray-900 text-white space-y-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {timers.map((timer) => (
                    <div key={timer.name} className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl md:text-2xl font-bold">{timer.name}</h3>
                            <button
                                className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
                                onClick={() => toggleDropdown(timer.name)}
                            >
                                {openDropdown === timer.name ? (
                                    <>
                                        Hide Details <ChevronUpIcon className="ml-2" />
                                    </>
                                ) : (
                                    <>
                                        Show Details <ChevronDownIcon className="ml-2" />
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="text-right text-2xl md:text-4xl font-bold">
                            {timeLeft[timer.name]?.[0] || 'Loading...'}
                        </div>
                        {openDropdown === timer.name && (
                            <div className="mt-4 space-y-4">
                                {timer.days.map((eventDay, dayIndex) => (
                                    <div key={eventDay}>
                                        {timer.schedule.map((eventTime, timeIndex) => {
                                            const eventKey = `${timer.name}-${eventDay}-${eventTime}`;
                                            const countdown =
                                                timeLeft[timer.name]?.[dayIndex * timer.schedule.length + timeIndex] || 'Loading...';
                                            const nextDay =
                                                nextEventDay[timer.name]?.[dayIndex * timer.schedule.length + timeIndex] || 'Calculating...';

                                            return (
                                                <div
                                                    key={eventKey}
                                                    className="bg-gray-700 p-4 rounded-md shadow-md space-y-2"
                                                >
                                                    <p className="font-medium text-lg">
                                                        <strong>Next Event:</strong> {nextDay} {countdown}
                                                    </p>
                                                    <p className="text-sm">
                                                        <strong>Time:</strong> {eventTime}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimerPage;
