import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
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
        }
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Engineering', href: '#engineering' },
        { name: 'Photography', href: '/photography' },
        { name: 'Certifications', href: '#certificates' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={cn(
                    'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out',
                    scrolled
                        ? 'top-6 w-[95%] max-w-5xl rounded-full bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-black/10 py-3 px-6 border border-slate-800'
                        : 'top-0 w-full max-w-7xl rounded-none bg-transparent py-6 px-6'
                )}
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-1 text-slate-100">
                        Gimhan<span className="text-brand"></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-brand hover:bg-slate-800/50 rounded-full transition-all cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full text-slate-400 hover:text-brand hover:bg-slate-800/50 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="px-6 py-2.5 text-sm font-bold bg-brand text-white rounded-full hover:bg-brand/90 transition-colors shadow-[0_4px_14px_0_rgba(13,17,100,0.39)]"
                        >
                            Let's Talk
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="text-slate-100 p-1"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button
                            className="text-slate-100 p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="w-full text-left px-4 py-3 text-lg font-medium text-slate-400 hover:text-brand hover:bg-slate-800/50 rounded-xl transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="mt-4 w-full py-3 text-center text-white font-bold bg-brand rounded-xl hover:bg-brand/90 transition-colors"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
