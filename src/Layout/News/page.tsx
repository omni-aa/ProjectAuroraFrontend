import { useState, useEffect } from 'react';
import { NewsCard } from "@/components/Interface/interface.ts";
import NewsDataCard from "@/components/newList.tsx";
import { WobbleCard } from '@/components/ui/wobble-card';

export default function WebsiteNews() {
    const [news, setNews] = useState<NewsCard[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const loadNewsData = async () => {
            const newsData = await NewsDataCard();
            setNews(newsData);
        };

        loadNewsData();
    }, []);

    const filteredNewsData = news.filter(NEWS =>
        NEWS.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="text-primary py-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Search Bar */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search News..."
                        className="w-full md:w-64 px-4 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* News Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredNewsData.slice(0, 3).map((NEWS) => (
                        <div
                            key={NEWS.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                                    {NEWS.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                                    {NEWS.smallDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* WobbleCards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
                    {/* First WobbleCard */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] p-6"
                        className="rounded-lg"
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Gippity AI powers the entire universe
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-neutral-200">
                                With over 100,000 monthly active bot users, Gippity AI is the most
                                popular AI platform for developers.
                            </p>
                        </div>
                        <img
                            src="/linear.webp"
                            width={500}
                            height={500}
                            alt="linear demo image"
                            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>

                    {/* Second WobbleCard */}
                    <WobbleCard containerClassName="col-span-1 min-h-[300px] p-6 bg-gray-800 rounded-lg">
                        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            No shirt, no shoes, no weapons.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                            If someone yells “stop!”, goes limp, or taps out, the fight is over.
                        </p>
                    </WobbleCard>

                    {/* Third WobbleCard */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] p-6 rounded-lg"
                    >
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                Signup for blazing-fast cutting-edge state-of-the-art Gippity AI
                                wrapper today!
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                With over 100,000 monthly active bot users, Gippity AI is the most
                                popular AI platform for developers.
                            </p>
                        </div>
                        <img
                            src="/linear.webp"
                            width={500}
                            height={500}
                            alt="linear demo image"
                            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                </div>

                {/* No Results Message */}
                {filteredNewsData.length === 0 && (
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
                        No News Found!
                    </p>
                )}
            </div>
        </div>
    );

}
