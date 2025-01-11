import React, { useState } from 'react';
import { Close, GitHub, Menu } from "@mui/icons-material";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-black font-mono">PayFlow</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="https://github.com/ahammednibras8/scalable-payment-platform"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                            <GitHub className="text-xl" />
                            View on GitHub
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-gray-700 focus:outline-none"
                        >
                            {isMenuOpen ? <Close className="text-2xl" /> : <Menu className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* GitHub Button for Mobile */}
                        <a
                            href="https://github.com/ahammednibras8/scalable-payment-platform"
                            className="flex items-center gap-2 mx-3 mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                            <GitHub className="text-lg" />
                            View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
