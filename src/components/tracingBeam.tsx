import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam.tsx";
import {BookOpen, Circle} from "lucide-react";
import {NavLink} from "react-router-dom";

export function Guidess() {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <TracingBeam className="max-w-4xl mx-auto">
                <div className="antialiased relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-5xl mb-4 text-primary")}>
                                <BookOpen className="inline-block" size={45}/> {item.title}
                            </p>

                            <div className="text-sm prose prose-sm dark:prose-invert px-5">
                                {item?.image && (
                                    <img
                                        src={item.image}
                                        alt="blog thumbnail"
                                        className="rounded-lg mb-10 w-full h-auto object-cover"
                                    />
                                )}
                                {item.description}
                                <button
                                    className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                    <NavLink to={item.Link}>
                                        Learn More
                                    </NavLink>
                                </button>
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
                   Are you new to ArcheRage? maybe returning? check out our guides for new players
                    my team and i have put together a list of subject an topics new players should cover
                    and learn both custom for the server and patch related knowledge.
                </p>

            </>

        ),
        badge: "New Players",
        image: "https://i.ibb.co/cJPRqRD/wp2481575.jpg",
        Link:'/guides/new-player-guide',
    },
    {
        Link:'/',
        badge: 'Quest & Event Guides',
        title: "Quest & Event Guides",
        image: "https://i.ibb.co/LJ0SxZw/wp2481540.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl"> Quest & Event Guides</h1>
                    <p className="text-lg ">
                        New Player Guide consists of guides to help players learn the fundamentals of ArcheRage
                    </p>
                </div>
            </>
        )
    },
    {
        Link:'/',
        badge: "Hiram Gear Guide",
        title: "Hiram Gear Guide",
        image: "https://i.ibb.co/V2rcB1Y/wp2481539.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">
                        Hiram Gear Guide</h1>
                    <p className="text-xl ">
                        This guide is designed to help you efficiently progress through obtaining and enhancing your Hiram Gear.
                        You'll learn best practices for:
                        <br/>
                        <ul className="py-3 font-bold text-sm ">

                            <li><Circle className="inline-block" size={12} style={{ fill: "currentColor" }}/> Acquiring a full set of Hiram gear with the optimal synthesis effects tailored to your class..</li>
                            <li><Circle className="inline-block" size={12}style={{ fill: "currentColor" }}/> Gathering infusions and scrolls quickly to ensure a steady progression.</li>
                            <li><Circle className="inline-block"size={12}style={{ fill: "currentColor" }} /> Properly gemming and applying Lunafrosts to maximize your gear's potential.</li>
                        </ul>

                    </p>
                </div>
            </>
        )
    },
    {
        Link:'/',
        badge:'Erenor Crafting Guide',
        title: "Erenor Crafting Guide",
        image: "https://i.ibb.co/N135DmR/wp2481570.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">
                        Erenor Crafting Guide</h1>
                    <p className="text-lg ">
                        Crafting guide for Erenor. time & cost efffective guide to properly make a full Erenor set
                        this is ment to be a more advanced topic for endgame players.<br/>
                        please read<a href='/guides/hiram-gear-guide' className="text-primary"> Hiram Armor Guide</a> and understand the system before getting into Erenor
                    </p>
                </div>
            </>
        )
    },
    {
        Link:'/',
        badge:'Costume & Undergarments Guide',
        title: "Costume & Undergarments Guide",
        image: "https://i.ibb.co/wBFSwsH/wp2481538.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">
                         Costume & Undergarments Guide</h1>
                    <p className="text-lg ">
                        ArcheRage has a few ways of making an eternal costume an undergarments
                        this guide will take you through them all and give u the best advice for each route
                    </p>
                </div>
            </>
        )
    },
    {
        Link:'/',
        badge:'Advanced Guides',
        title: "Advanced Guides",
        image: "https://i.ibb.co/p01Fk6Q/wp2481589.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">
                        Achievement Collection Guides</h1>
                    <p className="text-lg ">
                        This Guide consists of a list of advanced ArcheRage Topics Various systems and features
                        for endgame
                    </p>
                </div>
            </>
        )
    },
    {
        Link:'/',
        badge:'Achievement Collection Guides',
        title: "Achievement Collection Guides",
        image: "https://i.ibb.co/3ybcwgz/wp2481581.jpg",
        description: (
            <>
                <div>
                    <h1 className="font-bold text-3xl">
                        Achievement Collection Guides</h1>
                    <p className="text-lg ">
                        Guides for collecting the various Mounts, Gliders, Vehicles, Pets, Misc items
                        to complete the custom and Original Achievements
                    </p>
                </div>
            </>
        )
    },
];

export default Guidess;