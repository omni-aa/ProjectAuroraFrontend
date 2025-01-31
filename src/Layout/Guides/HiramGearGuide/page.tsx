import { twMerge } from "tailwind-merge";
import { BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

import {urlFor} from "@/lib/sanity.ts";
import { GuideDataInterface } from "@/Layout/Guides/NewPlayerGuides/NewPlayerInterface/Interface.ts";
import { PortableText } from '@portabletext/react';
import HiramGuidesData from "@/Layout/Guides/HiramGearGuide/DataQuery.tsx";
import CustomImageComponent from "@/components/CustomImageComponent.tsx";

// Define a more specific type for the image


export default function HiramGearGuide() {
    const [guides, setGuides] = useState<GuideDataInterface[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const newData = await HiramGuidesData();
                setGuides(newData);
            } catch (error) {
                console.error("Error loading guides:", error);
            }
        };

        loadData();
    }, []);


    // Define custom components for PortableText with proper typing
    const components = {
        types: {
            image: CustomImageComponent
        }
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto">
                <div className="antialiased space-y-16">
                    {guides.map((guide) => (
                        <div
                            key={guide.id || guide.guideTitle}
                            className="bg-white dark:bg-gray-800
                            shadow-lg hover:shadow-xl
                            dark:shadow-md dark:hover:shadow-lg
                            rounded-2xl overflow-hidden
                            border border-gray-200 dark:border-gray-700
                            transition-all duration-300
                            group"
                        >
                            <div className="p-8 sm:p-12">
                                <h2 className={twMerge("text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900 dark:text-gray-100 font-bold flex items-center")}>
                                    <BookOpen
                                        className="inline-block mr-4
                                        text-blue-700 dark:text-blue-400
                                        group-hover:text-blue-800 dark:group-hover:text-blue-300
                                        transition-colors"
                                        size={50}
                                    />
                                    {guide.guideTitle}
                                </h2>

                                <div className="text-sm sm:text-base px-0 max-w-full">
                                    {guide?.guideImage && (
                                        <img
                                            src={urlFor(guide.guideImage).url()}
                                            alt={guide.guideTitle}
                                            className="rounded-xl mb-10 w-full object-cover
                                            sm:h-[500px] lg:h-[600px] max-h-[80vh]
                                            shadow-md hover:shadow-xl
                                            dark:shadow-sm dark:hover:shadow-md
                                            transition-shadow duration-300
                                            brightness-95 hover:brightness-100
                                            dark:brightness-90 dark:hover:brightness-100"
                                        />
                                    )}

                                    <div className="mt-12 prose
                                    prose-gray
                                    prose-lg
                                    prose-a:text-blue-700 prose-a:no-underline prose-a:font-semibold
                                    dark:prose-invert
                                    dark:prose-a:text-blue-300
                                    max-w-none
                                    text-gray-800 dark:text-gray-200">
                                        <PortableText
                                            value={guide.guideData}
                                            components={components}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}