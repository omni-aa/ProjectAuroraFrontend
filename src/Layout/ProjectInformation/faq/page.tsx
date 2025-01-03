
export const FAQ = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-16 px-6">
            <section className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Find answers to the most common questions about our services and platform.
                </p>
            </section>
            <section className="max-w-4xl mx-auto space-y-8">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-primary dark:text-primary-400 mb-2">
                            {item.question}
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
};

const faqItems = [
    {
        question: "What is this website?",
        answer: "Unofficial ArcheRage Website that provides Accurate an informative data for all players.",
    },
    {
        question: "What we provide",
        answer: "Custom Guides, Event Timers, KR Patch Note Translations",
    },
    {
        question: "Request a Guide",
        answer: "to request a guide join our discord server",
    },
];
