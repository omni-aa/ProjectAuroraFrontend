import React from 'react';

interface EventCardProps {
    title: string;
    nextTime: string;
    status: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, nextTime, status }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm mb-2">Next time: {nextTime}</p>
            <div
                className={`inline-block px-2 py-1 rounded-full text-xs ${
                    status === 'In Prog.' ? 'bg-yellow-500 text-gray-800' : 'bg-green-500 text-white'
                }`}
            >
                {status}
            </div>
        </div>
    );
};

const EventTimers: React.FC = () => {
    const events = [
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

    return (
        <div className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Event Schedules</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        title={event.title}
                        nextTime={event.nextTime}
                        status={event.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventTimers;