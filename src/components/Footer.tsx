
import { Link } from 'react-router-dom';
import { Mail, Github, Twitch, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-200 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mb-4">AuroraProject</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Empowering adventurers with cutting-edge tools and knowledge.
                            Your journey of exploration starts here.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="mailto:contact@auroraproject.com" className="text-gray-300 hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                            <a href="https://github.com/auroraproject" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://twitch.tv/auroraproject" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Twitch size={24} />
                            </a>
                            <a href="https://twitter.com/auroraproject" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            <Link to="/event-timers" className="text-gray-300 hover:text-white transition-colors">Event Timers</Link>
                            <Link to="/class-guides" className="text-gray-300 hover:text-white transition-colors">Class Guides</Link>
                            <Link to="/info/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                            <Link to="/contribute" className="text-gray-300 hover:text-white transition-colors">Contribute</Link>
                            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-2">
                            Subscribe for the latest updates and exclusive content.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} AuroraProject. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;