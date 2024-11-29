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

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${
            isActive
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
        } text-lg`;  // Make the text slightly bigger

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header with Responsive Navbar */}
            <header className="bg-white dark:bg-gray-900 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo or Brand */}
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
                            <nav className="flex space-x-6 mr-4">
                                <NavLink to="/" className={navLinkClass}>
                                    <Home size={20} /> {/* Adjust icon size as well */}
                                    Home
                                </NavLink>
                                <NavLink to="/event-timers" className={navLinkClass}>
                                    <Clock size={20} /> {/* Adjust icon size as well */}
                                    Event Timers
                                </NavLink>
                                <NavLink to="/class-guides" className={navLinkClass}>
                                    <BookOpen size={20} /> {/* Adjust icon size as well */}
                                    Class Guides
                                </NavLink>
                                <NavLink to="/archerage-database" className={navLinkClass}>
                                    <Database size={20} /> {/* Adjust icon size as well */}
                                    ArcheRage Database
                                </NavLink>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xl">
                                            <BookOpen size={20} />
                                            Guides
                                            <ChevronDown size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg font-bold">
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>New Player Guides</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/leveling'>
                                                            Leveling
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            <span>Gearing</span>
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/basic'>
                                                                       Hiram Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/intermediate'>
                                                                        Gem Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/endgame'>
                                                                        Tempering Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/newplayer-guides/quest'>
                                                            Quests
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/newplayer-guides/world-events'>
                                                            World Events
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Hiram Gear Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Erenor Gear Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Costume & Undergarments Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>Profieiency Guides</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/basic'>
                                                            Commerce
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/intermediate'>
                                                            Exploration
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/endgame'>
                                                            Fishing
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>Quest Guides</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/basic'>
                                                            Dream Ring / Hiram Ring
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/intermediate'>
                                                            Custom Race Quest
                                                        </NavLink>
                                                    </DropdownMenuItem>

                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>Achievement Collection Guide</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/basic'>
                                                            Sky Warden
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/intermediate'>
                                                            Sky Emperor
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/gearing/endgame'>
                                                            Ellam
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                            <DropdownMenuItem className="text-red-400 hover:text-red-600">
                                                <NavLink to="/guides/archerage-client-errors " className=" " >
                                                    ⚠️ ArcheRage Client Errors
                                                </NavLink>
                                            </DropdownMenuItem>
                                        </DropdownMenuSub>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </nav>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink to="/" className={navLinkClass}>
                                    <Home size={20} /> {/* Adjust icon size as well */}
                                    Home
                                </NavLink>
                                <NavLink to="/event-timers" className={navLinkClass}>
                                    <Clock size={20} /> {/* Adjust icon size as well */}
                                    Event Timers
                                </NavLink>
                                <NavLink to="/class-guides" className={navLinkClass}>
                                    <BookOpen size={20} /> {/* Adjust icon size as well */}
                                    Class Guides
                                </NavLink>
                                <NavLink to="/archerage-database" className={navLinkClass}>
                                    <Database size={20} /> {/* Adjust icon size as well */}
                                    ArcheRage Database
                                </NavLink>
                                {/* Updates Dropdown */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xl">
                                            <BookOpen size={20} />
                                            Guides
                                            <ChevronDown size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg font-bold">
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <span>New Player Guides</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/new-player-guides/leveling'>
                                                            Leveling
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger>
                                                            <span>Gearing</span>
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/basic'>
                                                                        Hiram Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/intermediate'>
                                                                        Gem Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem>
                                                                    <NavLink to='/guides/new-player-guides/gearing/endgame'>
                                                                        Tempering Basics
                                                                    </NavLink>
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/newplayer-guides/quest'>
                                                            Quests
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <NavLink to='/guides/newplayer-guides/world-events'>
                                                            World Events
                                                        </NavLink>
                                                    </DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Hiram Gear Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Erenor Gear Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <NavLink
                                                to="/updates/news"
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 text-lg"
                                            >
                                                Costume & Undergarments Guide
                                            </NavLink>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            {/* Sticky Mode Toggle on Mobile and Desktop */}
            <div className="fixed bottom-4 right-4">
                <ModeToggle />
            </div>
        </div>
    );
};

export default RootLayout;
