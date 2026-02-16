import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import BinaryBackground from './BinaryBackground';
import SeoHead from './SeoHead';
import logo from '../assets/logo.png';
import { normalizeLang, syncLangInCurrentUrl } from '../utils/lang';

const Layout: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentLang = normalizeLang(i18n.language);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        syncLangInCurrentUrl(newLang);
        void i18n.changeLanguage(newLang);
    };

    return (
        <div className="min-h-screen text-white relative overflow-hidden font-sans">
            <SeoHead />
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
                                <Link to="/" className="nav-link px-3 py-2 rounded-md font-medium">{t('nav.home')}</Link>
                                <Link to="/games" className="nav-link px-3 py-2 rounded-md font-medium">{t('nav.games')}</Link>
                                <Link to="/services" className="nav-link px-3 py-2 rounded-md font-medium">{t('nav.services')}</Link>
                                <Link to="/about" className="nav-link px-3 py-2 rounded-md font-medium">{t('nav.about')}</Link>
                                <Link to="/blog" className="nav-link px-3 py-2 rounded-md font-medium">Blog</Link>
                                <Link to="/contact" className="nav-link px-3 py-2 rounded-md font-medium">{t('nav.contact')}</Link>
                                <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5">
                                    <Globe size={16} />
                                    <span>{currentLang.toUpperCase()}</span>
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
                    <div className="md:hidden bg-[#0f0c29] border border-gray-800 mt-2 mx-2 rounded-lg absolute w-[calc(100%-1rem)] shadow-2xl z-50 overflow-hidden">
                        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
                            <Link
                                to="/"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.home')}
                            </Link>
                            <Link
                                to="/games"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.games')}
                            </Link>
                            <Link
                                to="/services"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.services')}
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.about')}
                            </Link>
                            <Link
                                to="/blog"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-100 hover:text-cyan-400 hover:bg-white/5 block px-4 py-3 rounded-lg text-lg font-bold transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('nav.contact')}
                            </Link>

                            <div className="h-px bg-gray-800 my-2"></div>

                            <button
                                onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                            >
                                <Globe size={20} />
                                {currentLang.toUpperCase()}
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
                            &copy; {new Date().getFullYear()} One Fourty Games. {t('footer.rights')}
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
