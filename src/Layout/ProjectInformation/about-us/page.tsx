
export const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800">
            {/* Header Section */}
            <section className="relative text-center py-20 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-neutral-900 dark:text-white">
                    About Us
                </h1>
                <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                    Discover our story, mission, and the values that drive us forward.
                </p>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl absolute -top-12 -left-24"></div>
                    <div className="w-96 h-96 bg-secondary/10 rounded-full blur-3xl absolute -bottom-12 -right-24"></div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 grid gap-16 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-bold text-primary dark:text-primary-400 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        We are dedicated to delivering impactful solutions that empower businesses and individuals.
                        By blending innovation with a customer-centric approach, we strive to create experiences that
                        matter and foster growth for all our stakeholders.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-primary dark:text-primary-400 mb-4">
                        Our Vision
                    </h2>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        We envision a world where technology simplifies lives, connects communities, and drives
                        sustainable progress. Our relentless pursuit of excellence ensures that we remain ahead,
                        inspiring change and making a difference globally.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-100 dark:bg-neutral-800 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">
                        Core Values
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {coreValues.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 bg-white dark:bg-neutral-700 rounded-lg shadow-lg"
                            >
                                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary/10 text-primary dark:bg-primary/20 rounded-full mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-8">
                        Meet Our Team
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="p-6 bg-white dark:bg-neutral-700 rounded-lg shadow-lg"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-primary dark:text-primary-400">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Core Values Data
const coreValues = [
    {
        title: "Innovation",
        description: "Constantly pushing boundaries to create forward-thinking solutions.",
        icon: <i className="fas fa-lightbulb text-2xl"></i>,
    },
    {
        title: "Integrity",
        description: "We operate with transparency, trust, and respect.",
        icon: <i className="fas fa-handshake text-2xl"></i>,
    },
    {
        title: "Excellence",
        description: "Committed to delivering outstanding results in every endeavor.",
        icon: <i className="fas fa-star text-2xl"></i>,
    },
];

// Team Members Data
const teamMembers = [
    {
        name: "Alice Johnson",
        role: "CEO & Founder",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Bob Smith",
        role: "CTO",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Charlie Brown",
        role: "Marketing Lead",
        image: "https://i.pravatar.cc/150?img=3",
    },
];
