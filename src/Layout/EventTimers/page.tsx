// src/pages/TimerPage.tsx
import React, { useEffect, useState } from 'react';

// Define the type for the timer configuration
interface TimerConfig {
    name: string;
    time: string;
}

const TimerPage: React.FC = () => {
    const [timers, setTimers] = useState<TimerConfig[]>([]);
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

    // Load timer data
    useEffect(() => {
        const loadTimers = async () => {
            try {
                const response = await fetch('/timers.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: TimerConfig[] = await response.json();
                console.log('Fetched timers:', data); // Debugging line
                setTimers(data);
            } catch (error) {
                console.error('Failed to fetch timers:', error);
            }
        };

        loadTimers();
    }, []);

    // Countdown logic
    useEffect(() => {
        if (timers.length === 0) return;

        const interval = setInterval(() => {
            const newTimeLeft: { [key: string]: string } = {};

            timers.forEach((timer) => {
                const timeDifference = new Date(timer.time).getTime() - new Date().getTime();

                console.log(`${timer.name}: Time left = ${timeDifference}`); // Debugging line

                if (timeDifference <= 0) {
                    newTimeLeft[timer.name] = 'Event has occurred!';
                    return;
                }

                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                newTimeLeft[timer.name] = `${hours}h ${minutes}m ${seconds}s`;
            });

            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(interval);
    }, [timers]);

    return (
        <div>
            <h2>Available Timers</h2>
            <div className="timers-container">
                {timers.map((timer) => (
                    <div key={timer.name} className="timer">
                        <h3>{timer.name}</h3>
                        <p>{timeLeft[timer.name] || 'Loading...'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimerPage;
