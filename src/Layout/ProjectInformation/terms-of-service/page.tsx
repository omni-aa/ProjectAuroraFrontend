
export const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-16 px-6">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white mb-8">
                    Terms of Service
                </h1>
                {termsSections.map((section, index) => (
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

const termsSections = [
    {
        title: "Introduction",
        content:
            "Welcome to our platform! By accessing or using our services, you agree to comply with our terms. Please read them carefully before proceeding.",
    },
    {
        title: "User Obligations",
        content:
            "Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their accounts.",
    },
    {
        title: "Limitations of Liability",
        content:
            "Our company is not liable for any damages resulting from the use of our services beyond the extent permitted by applicable law.",
    },
];
