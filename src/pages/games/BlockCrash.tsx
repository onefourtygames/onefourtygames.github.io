import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, Smartphone, X } from 'lucide-react';
import logo from '../../assets/block-crash/logo.png';
// Import screenshots
import screen1 from '../../assets/block-crash/1.png';
import screen2 from '../../assets/block-crash/2.png';
import screen3 from '../../assets/block-crash/3.png';
import screen4 from '../../assets/block-crash/4.png';

const BlockCrash: React.FC = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const screenshots = [screen1, screen2, screen3, screen4];
    const features = t('block_crash_page.features.items', { returnObjects: true }) as string[];

    // Links (same as in games.ts, could be centralized or passed as prop if dynamic)
    const storeLinks = {
        appStore: "https://apps.apple.com/us/app/block-crash-puzzle-game/id6740766029",
        googlePlay: "https://play.google.com/store/apps/details?id=com.onefourtygames.blockcrash"
    };

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero / Header Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                    <img
                        src={logo}
                        alt="Block Crash Logo"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] mb-8 animate-fade-in-up"
                    />
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up delay-100">
                        {t('block_crash_page.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
                        {t('block_crash_page.hero.subtitle')}
                    </p>

                    {/* Store Badges */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                        <a
                            href={storeLinks.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black border border-gray-700 hover:border-white transition-all rounded-xl px-6 py-2 flex items-center gap-3 w-48"
                        >
                            <Download className="text-white" size={28} />
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 uppercase font-semibold">Download on the</div>
                                <div className="text-lg font-bold text-white leading-none">App Store</div>
                            </div>
                        </a>
                        <a
                            href={storeLinks.googlePlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black border border-gray-700 hover:border-white transition-all rounded-xl px-6 py-2 flex items-center gap-3 w-48"
                        >
                            <Smartphone className="text-white" size={28} />
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 uppercase font-semibold">Get it on</div>
                                <div className="text-lg font-bold text-white leading-none">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* About & Features Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                            {t('block_crash_page.about.title')}
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                            <p>{t('block_crash_page.about.desc_1')}</p>
                            <p>{t('block_crash_page.about.desc_2')}</p>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold mb-4 text-white">{t('block_crash_page.features.title')}</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 mr-4 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Featured Screenshot (or Video placeholder in future) */}
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl transform rotate-3 scale-95 rounded-3xl"></div>
                        <img
                            src={screen1}
                            alt="Block Crash Gameplay"
                            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('block_crash_page.gallery.title')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                        {screenshots.map((img, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 aspect-[9/19] hover:border-cyan-500/50 transition-all duration-300"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Screenshot ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold tracking-widest text-sm">VIEW</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors bg-white/10 rounded-full p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default BlockCrash;
