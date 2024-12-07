import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam.tsx";
import {ArrowRight, BookOpen, Circle} from "lucide-react";
import { NavLink } from "react-router-dom";

export function MainGuidesPage() {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-700 dark:via-neutral-800 dark:to-neutral-900 min-h-screen py-16">
            <TracingBeam className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {dummyContent.map((item, index) => (
                        <div
                            key={`content-${index}`}
                            className="group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                        >
                            <div className="grid md:grid-cols-2 gap-0 items-stretch">
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt="guide thumbnail"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-between">
                                    <div>
                                        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider text-white bg-black dark:bg-neutral-700 rounded-full">
                                            {item.badge}
                                        </span>

                                        <h2 className="text-3xl xl:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
                                            <BookOpen className="text-primary dark:text-primary-400" size={36} />
                                            {item.title}
                                        </h2>

                                        <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-base">
                                            {item.description}
                                        </p>
                                    </div>

                                    <NavLink
                                        to={item.Link}
                                        className="inline-flex items-center group/link text-primary dark:text-primary-400 font-semibold hover:text-primary-600 transition-colors"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight
                                            className="ml-2 group-hover/link:translate-x-1 transition-transform"
                                            size={20}
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}
const dummyContent = [
    {
        title: "New Player Guides",
        description: (
            <>
                <p className={twMerge("text-lg mb-4")}>
                    Are you new to ArcheRage? Maybe returning? Check out our guides for new players.
                    My team and I have put together a list of subjects and topics new players should cover
                    and learn, both custom for the server and patch-related knowledge.
                </p>
            </>
        ),
        badge: "New Players",
        image: "https://i.ibb.co/cJPRqRD/wp2481575.jpg",
        Link: '/guides/new-player-guide',
    },
    {
        Link: '/',
        badge: 'Quest & Event Guides',
        title: "Quest & Event Guides",
        image: "https://i.ibb.co/LJ0SxZw/wp2481540.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Quest & Event Guides</h1>
                    <p className="text-lg">
                        New Player Guide consists of guides to help players learn the fundamentals of ArcheRage
                    </p>
                </div>
            </>
        )
    },
    {
        Link: '/',
        badge: "Hiram Gear Guide",
        title: "Hiram Gear Guide",
        image: "https://i.ibb.co/V2rcB1Y/wp2481539.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Hiram Gear Guide</h1>
                    <p className="text-xl">
                        This guide is designed to help you efficiently progress through obtaining and enhancing your Hiram Gear.
                        You'll learn best practices for:
                        <br/>
                        <ul className="py-3 font-bold text-sm">
                            <li><Circle className="inline-block" size={12} style={{ fill: "currentColor" }}/> Acquiring a full set of Hiram gear with the optimal synthesis effects tailored to your class.</li>
                            <li><Circle className="inline-block" size={12} style={{ fill: "currentColor" }}/> Gathering infusions and scrolls quickly to ensure a steady progression.</li>
                            <li><Circle className="inline-block" size={12} style={{ fill: "currentColor" }}/> Properly gemming and applying Lunafrosts to maximize your gear's potential.</li>
                        </ul>
                    </p>
                </div>
            </>
        )
    },
    {
        Link: '/',
        badge: 'Erenor Crafting Guide',
        title: "Erenor Crafting Guide",
        image: "https://i.ibb.co/N135DmR/wp2481570.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Erenor Crafting Guide</h1>
                    <p className="text-lg">
                        Crafting guide for Erenor. Time & cost-effective guide to properly make a full Erenor set.
                        This is meant to be a more advanced topic for endgame players.<br/>
                        Please read <a href='/guides/hiram-gear-guide' className="text-primary">Hiram Armor Guide</a> and understand the system before getting into Erenor.
                    </p>
                </div>
            </>
        )
    },
    {
        Link: '/',
        badge: 'Costume & Undergarments Guide',
        title: "Costume & Undergarments Guide",
        image: "https://i.ibb.co/wBFSwsH/wp2481538.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Costume & Undergarments Guide</h1>
                    <p className="text-lg">
                        ArcheRage has a few ways of making an eternal costume and undergarments.
                        This guide will take you through them all and give you the best advice for each route.
                    </p>
                </div>
            </>
        )
    },
    {
        Link: '/',
        badge: 'Advanced Guides',
        title: "Advanced Guides",
        image: "https://i.ibb.co/p01Fk6Q/wp2481589.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Achievement Collection Guides</h1>
                    <p className="text-lg">
                        This guide consists of a list of advanced ArcheRage topics, various systems and features for endgame.
                    </p>
                </div>
            </>
        )
    },
    {
        Link: '/',
        badge: 'Achievement Collection Guides',
        title: "Achievement Collection Guides",
        image: "https://i.ibb.co/3ybcwgz/wp2481581.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">Achievement Collection Guides</h1>
                    <p className="text-lg">
                        Guides for collecting the various Mounts, Gliders, Vehicles, Pets, Misc items
                        to complete the custom and Original Achievements.
                    </p>
                </div>
            </>
        )
    },
];

export default MainGuidesPage;