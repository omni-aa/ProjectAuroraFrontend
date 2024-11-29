import { NavLink, Outlet } from "react-router-dom";
import { Menu, X, Home, Clock, BookOpen, Database, ChevronDown} from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close the menu when a link is clicked in mobile view
    const closeMenu = () => setIsMenuOpen(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium ${
            isActive
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-800 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
        }`;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <NavLink to="/" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            AuroraProject
                        </NavLink>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden absolute top-4 right-4">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-6">
                            <NavLink to="/" className={navLinkClass}>
                                <Home size={20} />
                                Home
                            </NavLink>
                            <NavLink to="/event-timers" className={navLinkClass}>
                                <Clock size={20} />
                                Event Timers
                            </NavLink>
                            <NavLink to="/class-guides" className={navLinkClass}>
                                <BookOpen size={20} />
                                Class Guides
                            </NavLink>
                            <NavLink to="/archerage-database" className={navLinkClass}>
                                <Database size={20} />
                                ArcheRage Database
                            </NavLink>
                            {/* Dropdown Menu */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                                    <BookOpen size={20} />
                                    Guides
                                    <ChevronDown size={18} />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                            New Player Guides
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                                            <DropdownMenuItem asChild>
                                                <NavLink
                                                    to="/guides/new-player-guides/basic-player-knowledge"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    onClick={closeMenu} // Close menu on link click
                                                >
                                                    New Player Introduction
                                                </NavLink>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <NavLink
                                                    to="/guides/new-player-guides/quests-events"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    onClick={closeMenu} // Close menu on link click
                                                >
                                                    Quests / Events

                                                </NavLink>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                            Custom Quests
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                                            <DropdownMenuItem asChild>
                                                <NavLink
                                                    to="/guides/new-player-guides/leveling"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    onClick={closeMenu} // Close menu on link click
                                                >
                                                    Custom Racial Quests
                                                </NavLink>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <NavLink
                                                    to="/guides/new-player-guides/leveling/intermediate"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    onClick={closeMenu} // Close menu on link click
                                                >
                                                    Dream Ring / Hiram Ring

                                                </NavLink>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <NavLink
                                                    to="/guides/new-player-guides/leveling/advanced"
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                    onClick={closeMenu} // Close menu on link click
                                                >
                                                    Misc
                                                </NavLink>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/hiram-gear-guide"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Hiram Gear Guide
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/erenor-crafting-guide"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Erenor Gear Guide
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/costume-undergarments"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Costume & Undergarments Guide
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/new-player-guides/world-events"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Achievement Collections
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/client-error-faq"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            <span className="text-red-300 dark:border-gray-800">ArcheRage Client Error FAQ
                                            </span>
                                        </NavLink>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-0 right-0 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 mt-16">
                    <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                        <Home size={20} />
                        Home
                    </NavLink>
                    <NavLink to="/event-timers" className={navLinkClass} onClick={closeMenu}>
                        <Clock size={20} />
                        Event Timers
                    </NavLink>
                    <NavLink to="/class-guides" className={navLinkClass} onClick={closeMenu}>
                        <BookOpen size={20} />
                        Class Guides
                    </NavLink>
                    <NavLink to="/archerage-database" className={navLinkClass} onClick={closeMenu}>
                        <Database size={20} />
                        ArcheRage Database
                    </NavLink>
                    {/* Mobile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-full flex items-center px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2 w-full">
                                <BookOpen size={20} />
                                <span className="flex-1 text-left">Guides</span> {/* Ensures Guides is aligned to the left */}
                            </div>
                            <ChevronDown size={18} />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                    Leveling Guide
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2">
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/new-player-guides/leveling"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Basic Leveling
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/new-player-guides/leveling/intermediate"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Intermediate Leveling
                                        </NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <NavLink
                                            to="/guides/new-player-guides/leveling/advanced"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                            onClick={closeMenu} // Close menu on link click
                                        >
                                            Advanced Leveling
                                        </NavLink>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuItem asChild>
                                <NavLink
                                    to="/guides/new-player-guides/gearing/basic"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                    onClick={closeMenu} // Close menu on link click
                                >
                                    Hiram Basics
                                </NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <NavLink
                                    to="/guides/new-player-guides/world-events"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                    onClick={closeMenu} // Close menu on link click
                                >
                                    World Events
                                </NavLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            )}

            {/* Mode Toggle */}
            <div className="fixed bottom-4 right-4">
                <ModeToggle />
            </div>
        </div>
    );
};

export default RootLayout;
