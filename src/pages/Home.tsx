import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Rocket, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
            {/* Hero Section */}
            <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="block text-white mb-2 drop-shadow-lg">{t('home.welcome')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-md">
                        ONE FOURTY GAMES
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-gray-300 font-light">
                    {t('home.hero_subtitle')}
                </p>

                <div className="pt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full px-4 md:px-0">
                    <Link to="/games" className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        <Gamepad2 /> {t('home.cta_games')}
                    </Link>
                    <Link to="/services" className="w-full md:w-auto px-8 py-3 rounded-full border border-purple-500 bg-transparent text-white font-bold text-lg hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        <Rocket /> {t('home.cta_build')}
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
                <FeatureCard
                    icon={<Rocket className="w-8 h-8 text-cyan-400" />}
                    title={t('home.features.innovation.title')}
                    desc={t('home.features.innovation.desc')}
                />
                <FeatureCard
                    icon={<Code2 className="w-8 h-8 text-purple-400" />}
                    title={t('home.features.technology.title')}
                    desc={t('home.features.technology.desc')}
                />
                <FeatureCard
                    icon={<Gamepad2 className="w-8 h-8 text-pink-400" />}
                    title={t('home.features.passion.title')}
                    desc={t('home.features.passion.desc')}
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="glass-panel p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
        <div className="mb-4 p-3 bg-white/5 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
);

export default Home;
