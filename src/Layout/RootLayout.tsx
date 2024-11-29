import { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import {Menu, X, Home, ChevronDown,Clock,BookOpen,Database} from 'lucide-react';
import { ModeToggle } from "@/components/ui/mode-toggle.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // New function to close menu when a link is clicked
    const closeMenu = () => setIsMenuOpen(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${
            isActive
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
        } text-lg`;

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white dark:bg-gray-900 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                AuroraProject
                            </span>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        <div className="hidden md:flex ml-auto items-center space-x-6">
                            {/* Desktop Navigation - Same as before */}
                            {/* ... existing desktop navigation code ... */}
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {/* Modify each NavLink to include onClick={closeMenu} */}
                                <NavLink 
                                    to="/" 
                                    className={navLinkClass} 
                                    onClick={closeMenu}
                                >
                                    <Home size={20} /> Home
                                </NavLink>
                                <NavLink 
                                    to="/event-timers" 
                                    className={navLinkClass} 
                                    onClick={closeMenu}
                                >
                                    <Clock size={20} /> Event Timers
                                </NavLink>
                                <NavLink 
                                    to="/class-guides" 
                                    className={navLinkClass} 
                                    onClick={closeMenu}
                                >
                                    <BookOpen size={20} /> Class Guides
                                </NavLink>
                                <NavLink 
                                    to="/archerage-database" 
                                    className={navLinkClass} 
                                    onClick={closeMenu}
                                >
                                    <Database size={20} /> ArcheRage Database
                                </NavLink>
                                
                                {/* Modify nested navigation items similarly */}
                                <DropdownMenu>
                                    {/* Existing DropdownMenu code */}
                                    <DropdownMenuContent className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg font-bold">
                                        {/* For each nested NavLink, add onClick={closeMenu} */}
                                        <DropdownMenuItem>
                                            <NavLink 
                                                to='/guides/new-player-guides/leveling'
                                                onClick={closeMenu}
                                            >
                                                Leveling
                                            </NavLink>
                                        </DropdownMenuItem>
                                        
                                        {/* Repeat for all other NavLink components in the mobile menu */}
                                        {/* Example for nested links: */}
                                        <DropdownMenuItem>
                                            <NavLink 
                                                to='/guides/new-player-guides/gearing/basic'
                                                onClick={closeMenu}
                                            >
                                                Hiram Basics
                                            </NavLink>
                                        </DropdownMenuItem>

                                        {/* Continue adding onClick={closeMenu} to all navigation links */}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Rest of the component remains the same */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            <div className="fixed bottom-4 right-4">
                <ModeToggle />
            </div>
        </div>
    );
};

export default RootLayout;