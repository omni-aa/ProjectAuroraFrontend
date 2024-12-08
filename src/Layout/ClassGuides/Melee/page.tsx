import { twMerge } from "tailwind-merge";
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { urlFor } from "@/lib/sanity.ts";
import { PortableText } from '@portabletext/react';
import ClassGuidesData from "@/Layout/ClassGuides/DataQuery.tsx";
import {MeleeClassGuideInterface} from "@/Layout/ClassGuides/Melee/Interface.ts";

export default function MeleeClassGuides() {
    const [guides, setGuides] = useState<MeleeClassGuideInterface[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const newData = await ClassGuidesData();
                setGuides(newData);
            } catch (error) {
                console.error("Error loading guides:", error);
            }
        };

        loadData();
    }, []);

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            {/* Use a larger container width for the guides */}
            <div className="max-w-screen-xl mx-auto">
                <div className="antialiased">
                    {guides.map((guide) => (
                        <div key={guide.id || guide.guideTitle} className="mb-12">
                            {/* Title styling */}
                            <p className={twMerge("text-4xl sm:text-5xl lg:text-6xl mb-4 text-primary font-semibold")}>
                                <BookOpen className="inline-block mr-2" size={50}/>
                                {guide.guideTitle}
                            </p>

                            <div className="text-sm sm:text-base px-0 max-w-full">
                                {/* Image styling */}
                                {guide?.guideImage && (
                                    <img
                                        src={urlFor(guide.guideImage).url()}
                                        alt={guide.guideTitle}
                                        className="rounded-lg mb-10 w-full object-cover sm:h-[500px] lg:h-[600px] max-h-[80vh]"
                                    />
                                )}

                                {/* Increase the width of the Guide Data (PortableText) */}
                                <div className="mt-12 prose prose-blue prose-lg dark:prose-invert prose-a:text-primary max-w-none">
                                    <PortableText value={guide.guideData}/>
                                </div>

                                {/* Learn More Button */}
                                <div className="mt-6 flex justify-start">
                                    <NavLink
                                        to={guide.Link}
                                        className="px-6 py-3 bg-black text-white rounded-lg font-bold text-lg transform hover:-translate-y-1 transition duration-300 hover:bg-gray-800"
                                    >
                                        Learn More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
