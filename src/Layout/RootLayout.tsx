import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import * as RadixMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Footer from "@/components/Footer.tsx"; // Dark Mode toggle component

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);
    const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

    // Function to close the mobile menu when a NavLink is clicked
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md">
                    <div className="container mx-auto px-4 flex items-center justify-between py-4">
                        {/* Brand/Logo */}
                        <Link to="/"
                              className="text-2xl font-bold text-gray-800 dark:text-primary no-underline text-primary">
                            AuroraProject
                        </Link>

                        {/* Desktop Navigation (hidden on mobile) */}
                        <nav className="hidden md:flex items-center space-x-6 ml-auto">
                            <NavLink
                                to="/"
                                className={({isActive}) => cn(
                                    'text-foreground dark:text-foreground-dark hover:bg-primary dark:hover:bg-primary-dark px-6 py-3 rounded-lg transition-all',
                                    isActive ? 'font-medium  dark:text-primary-dark' : 'font-normal'
                                )}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/event-timers"
                                className={({isActive}) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                            >
                                Event Timers
                            </NavLink>
                            <NavLink
                                to="/class-guides"
                                className={({isActive}) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                            >
                                Class Guides
                            </NavLink>
                            <NavLink
                                to="/archerage-database"
                                className={({isActive}) => cn('text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all', isActive ? 'font-medium text-gray-900 dark:text-gray-100' : 'font-normal')}
                            >
                                ArcheRage Database
                            </NavLink>

                            {/* Guides Dropdown */}
                            <RadixMenu.Root>
                                <RadixMenu.Trigger
                                    className="text-gray-800 dark:text-gray-300 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all">
                                    Guides
                                </RadixMenu.Trigger>
                                <RadixMenu.Portal>
                                    <RadixMenu.Content
                                        className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-56 z-50 transition-transform max-h-96 overflow-y-auto"
                                        sideOffset={8}>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/new-player-guide"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                New Player Guide
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/quests-events"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Quest & Event Guides
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/hiram-gear-guide"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Hiram Gear Guide
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/erenor-crafting-guide"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Erenor Crafting Guide
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/costume-undergarments"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Costume & Undergarments Guide
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/guides/achievement-collection"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Achievement Collection Guides
                                            </Link>
                                        </RadixMenu.Item>
                                    </RadixMenu.Content>
                                </RadixMenu.Portal>
                            </RadixMenu.Root>

                            {/* More Info Dropdown */}
                            <RadixMenu.Root>
                                <RadixMenu.Trigger
                                    className="text-gray-800 dark:text-gray-300 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-all">
                                    Project Information
                                </RadixMenu.Trigger>
                                <RadixMenu.Portal>
                                    <RadixMenu.Content
                                        className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 w-56 z-50 transition-transform max-h-96 overflow-y-auto"
                                        side="bottom" sideOffset={8}>
                                        <RadixMenu.Item asChild>
                                            <Link to="/info/about"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                About Us
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/info/contact"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Contact Us
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/info/faq"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                FAQ
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/info/terms"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Terms of Service
                                            </Link>
                                        </RadixMenu.Item>
                                        <RadixMenu.Item asChild>
                                            <Link to="/info/privacy"
                                                  className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                Privacy Policy
                                            </Link>
                                        </RadixMenu.Item>
                                    </RadixMenu.Content>
                                </RadixMenu.Portal>
                            </RadixMenu.Root>
                        </nav>

                        {/* Mobile Navigation Toggle */}
                        <button
                            className="block md:hidden p-2 rounded-md text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}>
                            <svg className={cn('h-6 w-6 transition-transform', isOpen ? 'rotate-90' : '')}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zm0 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>


                    </div>
                </header>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div
                        className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-6">
                        <ul className="space-y-4">
                            <li>
                                <NavLink
                                    to="/"
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
                                            to="/guides/new-player-guide"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            New Player Guide
                                        </NavLink>
                                        <NavLink
                                            to="/guides/quests-events"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            Quest & Event Guides
                                        </NavLink>
                                        <NavLink
                                            to="/guides/hiram-gear-guide"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            Hiram Gear Guide
                                        </NavLink>
                                        <NavLink
                                            to="/guides/erenor-crafting-guide"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            Erenor Crafting Guide
                                        </NavLink>
                                        <NavLink
                                            to="/guides/costume-undergarments"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            Costume & Undergarments Guide
                                        </NavLink>
                                        <NavLink
                                            to="/guides/achievements-collection"
                                            onClick={closeMenu} // Close the menu on click
                                            className="block px-6 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                                        >
                                            Achievement Collection Guides
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
                                    Project Information
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
                    <Outlet/>
                </main>
                <div className="fixed bottom-4 right-4 z-50">
                    <ModeToggle/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RootLayout;