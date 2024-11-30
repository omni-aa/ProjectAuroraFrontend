import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import * as RadixMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle'; // Dark Mode toggle component

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

    // Function to close the mobile menu when a NavLink is clicked
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between py-4">
                    {/* Brand/Logo */}
                    <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-primary no-underline text-primary">
                        AuroraProject
                    </Link>

                    {/* Desktop Navigation (hidden on mobile) */}
                    <nav className="hidden md:flex items-center space-x-6 ml-auto">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                cn(
                                    'text-foreground dark:text-foreground-dark hover:bg-primary dark:hover:bg-primary-dark px-6 py-3 rounded-lg transition-all',
                                    isActive ? 'font-medium  dark:text-primary-dark' : 'font-normal'
                                )
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/event-timers"
                            className={({ isActive }) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                        >
                            Event Timers
                        </NavLink>
                        <NavLink
                            to="/class-guides"
                            className={({ isActive }) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                        >
                            Class Guides
                        </NavLink>
                        <NavLink
                            to="/archerage-database"
                            className={({ isActive }) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                        >
                            ArcheRage Database
                        </NavLink>

                        {/* Guides Dropdown */}
                        <RadixMenu.Root>
                            <RadixMenu.Trigger className="text-gray-800 dark:text-gray-300 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all">
                                Guides
                            </RadixMenu.Trigger>
                            <RadixMenu.Portal>
                                <RadixMenu.Content className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-56 z-50 transition-transform max-h-96 overflow-y-auto" sideOffset={8}>
                                    <RadixMenu.Item asChild>
                                        <Link to="/guides/new-player-guides" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            New Player Guides
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/guides/advanced-player-guides" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Advanced Player Guides
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/guides/gear-guides" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Gear Guides
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/guides/quest-guides" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Quest Guides
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/guides/skill-guides" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Skill Guides
                                        </Link>
                                    </RadixMenu.Item>
                                </RadixMenu.Content>
                            </RadixMenu.Portal>
                        </RadixMenu.Root>

                        {/* More Info Dropdown */}
                        <RadixMenu.Root>
                            <RadixMenu.Trigger className="text-gray-800 dark:text-gray-300 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all">
                                More Info
                            </RadixMenu.Trigger>
                            <RadixMenu.Portal>
                                <RadixMenu.Content className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-56 z-50 transition-transform max-h-96 overflow-y-auto" side="bottom" sideOffset={8}>
                                    <RadixMenu.Item asChild>
                                        <Link to="/info/about" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            About Us
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/info/contact" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Contact Us
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/info/faq" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            FAQ
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/info/terms" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Terms of Service
                                        </Link>
                                    </RadixMenu.Item>
                                    <RadixMenu.Item asChild>
                                        <Link to="/info/privacy" className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </RadixMenu.Item>
                                </RadixMenu.Content>
                            </RadixMenu.Portal>
                        </RadixMenu.Root>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button className="block md:hidden p-2 rounded-md text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        <svg className={cn('h-6 w-6 transition-transform', isOpen ? 'rotate-90' : '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dark Mode Toggle */}
                    <ModeToggle />
                </div>
            </header>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-6">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/home"
                                onClick={closeMenu} // Close the menu on click
                                className="text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/event-timers"
                                onClick={closeMenu} // Close the menu on click
                                className="text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                Event Timers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/class-guides"
                                onClick={closeMenu} // Close the menu on click
                                className="text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                Class Guides
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/archerage-database"
                                onClick={closeMenu} // Close the menu on click
                                className="text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                ArcheRage Database
                            </NavLink>
                        </li>

                        {/* Guides Dropdown for Mobile */}
                        <li>
                            <button
                                onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                                className="w-full text-left text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                Guides
                            </button>
                            {isGuidesOpen && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <NavLink
                                        to="/guides/new-player-guides"
                                        onClick={closeMenu} // Close the menu on click
                                        className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                    >
                                        New Player Guides
                                    </NavLink>
                                    <NavLink
                                        to="/guides/advanced-player-guides"
                                        onClick={closeMenu} // Close the menu on click
                                        className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                    >
                                        Advanced Player Guides
                                    </NavLink>
                                </div>
                            )}
                        </li>

                        {/* More Info Dropdown for Mobile */}
                        <li>
                            <button
                                onClick={() => setIsMoreInfoOpen(!isMoreInfoOpen)}
                                className="w-full text-left text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-6 py-3 rounded-lg transition-all"
                            >
                                More Info
                            </button>
                            {isMoreInfoOpen && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <NavLink
                                        to="/info/about"
                                        onClick={closeMenu} // Close the menu on click
                                        className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                    >
                                        About Us
                                    </NavLink>
                                    <NavLink
                                        to="/info/contact"
                                        onClick={closeMenu} // Close the menu on click
                                        className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                    >
                                        Contact Us
                                    </NavLink>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-4">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
