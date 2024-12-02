import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid.tsx";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision.tsx";
import WebsiteNews from "@/Layout/News/page.tsx";
import {SparklesCore} from "@/components/ui/sparkles.tsx";

export function HomePage() {
    return (
        <>
            <div
                className="h-[30rem] sm:h-[25rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pb-8">
                <h1 className="md:text-6xl text-2xl lg:text-8xl font-bold text-center text-white relative z-20">
                    Project Aurora
                </h1>
                <div className="w-full max-w-2xl h-32 sm:h-24 relative">
                    {/* Gradients */}
                    <div
                        className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                    <div
                        className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div
                        className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>


            <WebsiteNews/>
            <BentoGrid className="">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
            <BackgroundBeamsWithCollision className="py-3 px-5 my-4">
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    AuroraProject&apos;s Guides{" "}
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Official ArcheRage Wiki</span>
                        </div>
                    </div>
                </h2>
            </BackgroundBeamsWithCollision>
        </>

    )
        ;
}

const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "New Player Guides",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
