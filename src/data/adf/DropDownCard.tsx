import React from 'react';
import { TimerConfig } from './types'; // Ensure correct path

interface DropdownCardProps {
    timer: TimerConfig;
    timeLeft?: string;
    nextEventDay?: string;
    isOpen: boolean; // Receive the isOpen prop to control visibility
    toggleDropdown: () => void; // Function to toggle the dropdown visibility
}

const DropdownCard: React.FC<DropdownCardProps> = ({ timer, timeLeft, nextEventDay, isOpen, toggleDropdown }) => {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {timer.name}
                </h3>
                <button
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    onClick={toggleDropdown}
                >
                    {isOpen ? "Hide Details" : "Show Details"}
                </button>
            </div>
            {isOpen && (
                <div className="mt-4 bg-gray-300 dark:bg-gray-600 rounded-lg p-3">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                        Event Details:
                    </h4>
                    <p>
                        <strong>Next occurrence:</strong> {nextEventDay || "Calculating..."}
                    </p>
                    <p>
                        <strong>Time Left:</strong> {timeLeft || "Loading..."}
                    </p>
                </div>
            )}
        </div>
    );
};

export default DropdownCard;
