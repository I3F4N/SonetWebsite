import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-brand-dark pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
                            SONET<span className="text-brand-cyan">.</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Empowering the connected enterprise with future-ready infrastructure. From data centers to AI-driven security, we engineer the digital nervous system for modern business.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-brand-cyan/20 hover:text-brand-cyan transition-colors text-white">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['IT Infrastructure', 'Data Center', 'Security & Surveillance', 'Wireless Mobility', 'Cloud & Web'].map(item => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>No.41, 4th Floor, VJ Infinity</li>
                            <li>Kasturi Nagar, Bangalore - 560043</li>
                            <li className="pt-2">info@sonetsolutions.in</li>
                            <li>+91 80 4163 6612</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 Sonet Integrated Solutions. Built for the Future.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
