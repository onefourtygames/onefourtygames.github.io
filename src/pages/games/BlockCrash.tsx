import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import SeoHead from '../../components/SeoHead';
import logo from '../../assets/block-crash/logo.png';
// Import screenshots
import screen1 from '../../assets/block-crash/1.png';
import screen2 from '../../assets/block-crash/2.png';
import screen3 from '../../assets/block-crash/3.png';
import screen4 from '../../assets/block-crash/4.png';

const BlockCrash: React.FC = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const screenshots = [screen1, screen2, screen3, screen4];
    const features = t('block_crash_page.features.items', { returnObjects: true }) as string[];

    // Keyboard Navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'ArrowRight') {
                setSelectedImage((prev) => (prev !== null ? (prev + 1) % screenshots.length : null));
            } else if (e.key === 'ArrowLeft') {
                setSelectedImage((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null));
            } else if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, screenshots.length]);

    // Links (same as in games.ts, could be centralized or passed as prop if dynamic)
    const storeLinks = {
        appStore: "https://apps.apple.com/us/app/block-crash/id6758680528",
        googlePlay: "https://play.google.com/store/apps/details?id=com.onefourtygames.blockcrash"
    };

    return (
        <div className="pt-24 min-h-screen">
            <SeoHead
                titleKey="block_crash_page.hero.title"
                descriptionKey="block_crash_page.about.desc_1"
                type="game"
                keywords={['block puzzle', 'cube puzzle', 'tetris style', 'brain training']}
                image="/assets/block-crash/feature.png"
            />
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
                            className="bg-black border border-gray-700 hover:border-white transition-all rounded-xl px-4 py-2 flex items-center gap-3 w-48"
                        >
                            <svg viewBox="0 0 384 512" width="24" height="24" fill="white">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-[10px] text-gray-400 uppercase font-semibold">Download on the</div>
                                <div className="text-lg font-bold text-white leading-none">App Store</div>
                            </div>
                        </a>
                        <a
                            href={storeLinks.googlePlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black border border-gray-700 hover:border-white transition-all rounded-xl px-4 py-2 flex items-center gap-3 w-48"
                        >
                            <svg viewBox="0 0 512 512" width="24" height="24" fill="white">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                            </svg>
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
                    <div className="space-y-6 order-2 md:order-1">
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
                    <div className="relative group perspective-1000 order-1 md:order-2 flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl transform rotate-3 scale-95 rounded-3xl max-w-sm mx-auto"></div>
                        <img
                            src={screen1}
                            alt="Block Crash Gameplay"
                            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02] max-w-xs md:max-w-sm w-full"
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
                                onClick={() => setSelectedImage(index)}
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
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 touch-none"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>



                    <div
                        className="relative max-w-full max-h-[90vh] w-auto h-auto flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={screenshots[selectedImage]}
                            alt={`Screenshot ${selectedImage + 1}`}
                            className="max-h-[80vh] md:max-h-[85vh] max-w-full rounded-lg shadow-2xl border border-white/10 select-none"
                            onTouchStart={(e) => {
                                const touch = e.touches[0];
                                const currentX = touch.clientX;
                                e.currentTarget.setAttribute('data-start-x', currentX.toString());
                            }}
                            onTouchEnd={(e) => {
                                const startX = parseFloat(e.currentTarget.getAttribute('data-start-x') || '0');
                                const endX = e.changedTouches[0].clientX;
                                const diff = startX - endX;

                                if (Math.abs(diff) > 50) { // Threshold for swipe
                                    if (diff > 0) {
                                        // Swipe Left -> Next
                                        setSelectedImage((prev) => (prev !== null ? (prev + 1) % screenshots.length : null));
                                    } else {
                                        // Swipe Right -> Prev
                                        setSelectedImage((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null));
                                    }
                                }
                            }}
                        />
                        <div className="mt-4 text-white/50 text-sm font-medium">
                            {selectedImage + 1} / {screenshots.length}
                        </div>

                        {/* Navigation Buttons (Overlaid on image or to sides) */}
                        <button
                            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors z-[60] bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null));
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>

                        <button
                            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors z-[60] bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage((prev) => (prev !== null ? (prev + 1) % screenshots.length : null));
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlockCrash;
