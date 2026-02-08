import React from 'react';
import { useTranslation } from 'react-i18next';
import { GAMES } from '../data/games';
import { Download, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurGames: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        Our Games
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Explore our collection of immersive and challenging experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GAMES.map((game) => (
                    <div key={game.id} className="glass-panel overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full">
                        <Link to="/games/block-crash" className="block relative h-48 overflow-hidden cursor-pointer">
                            <img
                                src={game.images[0]}
                                alt={game.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <div>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                        {game.genreKey}
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                            <Link to="/games/block-crash" className="block">
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {game.title}
                                </h3>
                            </Link>
                            <p className="text-gray-400 text-sm line-clamp-3 flex-1">
                                {t(game.descriptionKey)}
                            </p>

                            <div className="pt-4 space-y-3">
                                {game.links.appStore && (
                                    <a
                                        href={game.links.appStore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-black border border-gray-700 hover:border-white transition-all group/btn w-full"
                                    >
                                        <Download size={20} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                                        <div className="text-left">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold leading-none">Download on the</div>
                                            <div className="text-sm font-bold text-gray-200 group-hover/btn:text-white leading-none mt-0.5">App Store</div>
                                        </div>
                                    </a>
                                )}
                                {game.links.googlePlay ? (
                                    <a
                                        href={game.links.googlePlay}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-black border border-gray-700 hover:border-white transition-all group/btn w-full"
                                    >
                                        <Smartphone size={20} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                                        <div className="text-left">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold leading-none">Get it on</div>
                                            <div className="text-sm font-bold text-gray-200 group-hover/btn:text-white leading-none mt-0.5">Google Play</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 w-full opacity-50 cursor-not-allowed">
                                        <Smartphone size={20} className="text-gray-500" />
                                        <span className="text-sm font-medium text-gray-500">Android (Beta)</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurGames;
