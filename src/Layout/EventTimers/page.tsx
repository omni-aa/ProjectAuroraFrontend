import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface Event {
    title: string;
    nextTime: string;
    status: string;
}

const EventCard: React.FC<Event> = ({ title, nextTime, status }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-md mb-3">
            <div className="flex justify-between items-center p-4">
                <div className="flex-grow mr-4">
                    <h3 className="text-sm font-bold truncate">{title}</h3>
                    <p className="text-xs text-gray-300">{nextTime}</p>
                </div>
                <button
                    className="text-white hover:bg-gray-700 p-2 rounded-full"
                    onClick={toggleOpen}
                    aria-label={isOpen ? 'Close event details' : 'Open event details'}
                >
                    {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
            </div>

            <div
                className={`${
                    status === 'In Prog.' ? 'bg-yellow-500 text-gray-800' : 'bg-green-500 text-white'
                } inline-block px-2 py-1 rounded-full text-xs ml-4 mb-2`}
            >
                {status}
            </div>

            {isOpen && (
                <div className="p-4 bg-gray-700 rounded-b-lg">
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">Event Details:</p>
                        <div className="flex justify-between text-xs">
                            <span className="opacity-80">Time:</span>
                            <span className="text-right">{nextTime}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="opacity-80">Current Status:</span>
                            <span className="text-right">{status}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const EventTimers: React.FC = () => {
    const events: Event[] = [
        { title: 'Lusca Awakening', nextTime: 'Dec 7, Sat, 9:00 PM', status: 'In Prog.' },
        { title: 'Oblivion Rift', nextTime: 'Dec 7, Sat, 6:40 PM', status: 'In Prog.' },
        { title: 'Clockwork Rebellion', nextTime: 'Dec 7, Sat, 6:40 PM', status: 'In Prog.' },
        { title: 'Hasia Zombie Apocalypse', nextTime: 'Dec 8, Sun, 8:00 PM', status: 'In Prog.' },
        { title: 'Hasia Zombie Apocalypse (Novice)', nextTime: 'Dec 8, Sun, 7:00 PM', status: 'In Prog.' },
        { title: 'Crimson Rift (Auroria)', nextTime: 'Dec 7, Sat, 9:20 PM', status: 'In Prog.' },
        { title: 'Crimson Rift (Nystere / Cinderstone Moor)', nextTime: 'Dec 7, Sat, 8:20 PM', status: 'In Prog.' },
        { title: 'Grimghast Rift (Nystere / Cinderstone Moor)', nextTime: 'Dec 7, Sat, 6:11 PM', status: 'In Prog.' },
        { title: 'Jola, Meine & Glenn', nextTime: 'Dec 7, Sat, 7:20 PM', status: 'In Prog.' },
        { title: 'Kraken', nextTime: 'Dec 7, Sat, 6:30 PM', status: 'In Prog.' },
        { title: 'Black Dragon', nextTime: 'Dec 8, Sun, 9:00 AM', status: 'In Prog.' },
        { title: 'Leviathan', nextTime: 'Dec 9, Mon, 8:05 PM', status: 'In Prog.' },
        { title: 'Charydbis', nextTime: 'Dec 8, Sun, 9:30 PM', status: 'In Prog.' },
        { title: 'Anthalon (Garden)', nextTime: 'Dec 7, Sat, 9:00 PM', status: 'In Prog.' },
        { title: 'Sea Spirit General', nextTime: 'Dec 11, Wed, 12:00 AM', status: 'In Prog.' },
        { title: 'Aragog', nextTime: 'Dec 9, Sat, 11:00 AM', status: 'In Prog.' },
        { title: 'The Fishers Day!', nextTime: 'Dec 10, Tue, 12:00 AM', status: 'In Prog.' },
        { title: 'Treasures Hunter Day!', nextTime: 'Dec 11, Wed, 12:00 AM', status: 'In Prog.' },
        { title: 'The Merchants Day!', nextTime: 'Dec 9, Mon, 12:00 AM', status: 'In Prog.' },
        { title: 'Relentless Dragons Hunt', nextTime: 'Dec 14, Sat, 2:00 PM', status: 'In Prog.' },
        { title: 'Gladiators Tournament', nextTime: 'Dec 3, Sun, 4:00 PM', status: 'In Prog.' },
        { title: 'Wonderland Races', nextTime: 'Dec 9, Mon, 7:00 PM', status: 'In Prog.' },
        { title: 'Miraculous Races', nextTime: 'Dec 7, Sat, 9:00 PM', status: 'In Prog.' },
        { title: 'Boss Waking Nightmare', nextTime: 'Dec 8, Sun, 4:00 AM', status: 'In Prog.' },
    ];

    // Robust date parsing function
    const parseDate = (dateString: string): Date => {
        const monthMap: {[key: string]: number} = {
            'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };

        // Split the date string
        const parts = dateString.split(/,\s*/);

        // Extract month, day, and time
        const [month, day] = parts[0].split(' ');
        const timeParts = parts[2].match(/(\d+):(\d+)\s*(AM|PM)?/);

        if (!timeParts) {
            // Fallback to current date if parsing fails
            return new Date();
        }

        let hour = parseInt(timeParts[1]);
        const minute = parseInt(timeParts[2]);
        const period = timeParts[3];

        // Adjust hour for AM/PM
        if (period === 'PM' && hour !== 12) hour += 12;
        if (period === 'AM' && hour === 12) hour = 0;

        // Create date object
        const date = new Date(2024, monthMap[month], parseInt(day));
        date.setHours(hour, minute);

        return date;
    };

    // Sort events by date
    const sortedEvents = [...events].sort((a, b) =>
        parseDate(a.nextTime).getTime() - parseDate(b.nextTime).getTime()
    );

    return (
        <div className="bg-gray-900 min-h-screen p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
                    Upcoming Events
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sortedEvents.map((event, index) => (
                        <div key={index} className="w-full">
                            <EventCard
                                title={event.title}
                                nextTime={event.nextTime}
                                status={event.status}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventTimers;