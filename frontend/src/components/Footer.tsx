import React from 'react';
import { Mail, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import MediumIcon from './Icons/MediumIcon'; // Make sure the path is correct

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                        <div className="space-y-2">
                            <a href="mailto:ahammednibras737@gmail.com" className="flex items-center gap-2 hover:text-gray-400">
                                <Mail className="text-lg" />
                                ahammednibras737@gmail.com
                            </a>
                            <p className="text-gray-300">Location: Calicut, Kerala, India</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="https://ahammednibras8-github-io.vercel.app/" target='_blank' className="block hover:text-gray-400">About</a>
                            <a href="https://ahammednibras8-github-io.vercel.app/" target='_blank' className="block hover:text-gray-400">Projects</a>
                            <a href="https://ahammednibras8-github-io.vercel.app/" target='_blank' className="block hover:text-gray-400">Contact</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ahammednibras8" target='_blank' className="hover:text-gray-400">
                                <GitHub className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com/in/ahammednibras8" target='_blank' className="hover:text-gray-400">
                                <LinkedIn className="text-2xl" />
                            </a>
                            <a href="https://twitter.com/Ahammed__Nibras" target='_blank' className="hover:text-gray-400">
                                <Twitter className="text-2xl" />
                            </a>
                            <a href="https://medium.com/@ahammednibras" target='_blank' className="hover:text-gray-400">
                                <MediumIcon className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Ahammed Nibras. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
