import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Rocket, Code2 } from 'lucide-react';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
            {/* Hero Section */}
            <div className="space-y-6 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="block text-white mb-2 drop-shadow-lg">{t('welcome')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-md">
                        ONE FOURTY GAMES
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-gray-300 font-light">
                    We craft digital experiences where logic meets creativity.
                </p>

                <div className="pt-8 flex justify-center gap-6">
                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                        <Gamepad2 /> Our Games
                    </button>
                    <button className="px-8 py-3 rounded-full border border-gray-500 bg-transparent text-white font-bold text-lg hover:border-white hover:bg-white/10 transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
                <FeatureCard
                    icon={<Rocket className="w-8 h-8 text-cyan-400" />}
                    title="Innovation"
                    desc="Pushing boundaries with unique mechanics."
                />
                <FeatureCard
                    icon={<Code2 className="w-8 h-8 text-purple-400" />}
                    title="Technology"
                    desc="Built with the latest tech for smooth performance."
                />
                <FeatureCard
                    icon={<Gamepad2 className="w-8 h-8 text-pink-400" />}
                    title="Passion"
                    desc="Games made by gamers, for gamers."
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
