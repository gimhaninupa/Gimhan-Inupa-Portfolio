import { Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { contactData } from '../../data/contact';

export function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.querySelector(href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
            window.scrollTo(0, 0);
        }
    };

    return (
        <footer className="bg-slate-950 py-20 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {/* Column 1: Brand & Description */}
                    <div className="space-y-6">
                        <div className="text-2xl font-bold tracking-tighter text-slate-100">
                            Gimhan<span className="text-brand"></span>
                        </div>
                        <p className="text-slate-600 max-w-xs leading-relaxed">
                            Empowering innovation through code and creativity. Building the next generation of digital experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-slate-100 font-bold mb-6 text-lg">Quick Links</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Me', href: '#about' },
                                { name: 'Engineering', href: '#engineering' },
                                { name: 'Photography', href: '/photography' },
                                { name: 'Contact', href: '#contact' }
                            ].map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-slate-600 hover:text-brand transition-colors w-fit text-left"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Connect With Us */}
                    <div>
                        <h3 className="text-slate-100 font-bold mb-6 text-lg">Connect With Us</h3>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                {contactData.socials.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-200 text-slate-600 hover:bg-brand hover:text-white transition-all shadow-sm hover:shadow-md"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    );
                                })}
                            </div>

                            <a href={`mailto:${contactData.email}`} className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors group">
                                <Mail size={20} className="group-hover:text-brand" />
                                <span>{contactData.email}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 text-center md:text-left text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Gimhan. All rights reserved.</p>
                    <div className="flex gap-6">
                    </div>
                </div>
            </div>
        </footer>
    );
}
