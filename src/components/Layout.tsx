import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import BinaryBackground from './BinaryBackground';
import logo from '../assets/logo.png';

const Layout: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="min-h-screen text-white relative overflow-hidden font-sans">
            <BinaryBackground />

            <nav className="fixed w-full z-50 glass-panel border-b-0 rounded-none top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={logo} alt="One Fourty Games" className="h-12 w-auto object-contain hover:brightness-110 transition-all" />
                                <span className="font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hidden sm:block">
                                    ONE FOURTY GAMES
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className="nav-link px-3 py-2 rounded-md font-medium">{t('home')}</Link>
                                <Link to="/about" className="nav-link px-3 py-2 rounded-md font-medium">{t('about')}</Link>
                                <Link to="/contact" className="nav-link px-3 py-2 rounded-md font-medium">{t('contact')}</Link>
                                <button onClick={toggleLanguage} className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    <Globe size={18} />
                                    <span>{i18n.language.toUpperCase()}</span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden glass-panel mt-2 mx-2 rounded-lg absolute w-[calc(100%-1rem)]">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
                            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
                            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
                            <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
                                <Globe size={18} /> {i18n.language.toUpperCase()}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col relative z-10">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-800 bg-black/40 backdrop-blur-sm mt-auto">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} One Fourty Games. {t('rights')}
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">{t('privacy')}</Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">{t('terms')}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
