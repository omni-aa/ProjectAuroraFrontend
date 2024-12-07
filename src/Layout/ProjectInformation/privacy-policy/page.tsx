
export const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-16 px-6">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white mb-8">
                    Privacy Policy
                </h1>
                {privacySections.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-3xl font-bold text-primary dark:text-primary-400 mb-4">
                            {section.title}
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {section.content}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
};

const privacySections = [
    {
        title: "Information We Collect",
        content:
            "Null",
    },
    {
        title: "How We Use Your Information",
        content:
            "Null",
    },
    {
        title: "Data Protection",
        content:
            "We take appropriate measures to safeguard your personal data from unauthorized access, disclosure, or alteration.",
    },
];
