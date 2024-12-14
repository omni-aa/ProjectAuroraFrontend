import { Button } from "@/components/ui/button.tsx";

export const ContactUs = () => {
    return (
        <div className=" bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-16 px-6">
            <section className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Reach out to us through your preferred platform. We're here to help!
                </p>
            </section>
            <section className="max-w-4xl mx-auto">
                <div className="flex justify-center gap-x-6">
                    {contactMedia.map((item, index) => (
                        <Button
                            key={index}
                            className="text-lg font-semibold px-6 py-3"
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.description}
                            >
                                {item.source}
                            </a>
                        </Button>
                    ))}
                </div>
            </section>
        </div>
    );
};

const contactMedia = [
    {
        media: "GitHub Link",
        source: "GitHub",
        link: "https://github.com",
        description: "Visit our GitHub repository",
    },
    {
        media: "YouTube Link",
        source: "YouTube",
        link: "https://youtube.com",
        description: "Watch our YouTube channel",
    },
    {
        media: "Discord",
        source: "Discord",
        link: "https://discord.com",
        description: "Join our Discord community",
    },
];
