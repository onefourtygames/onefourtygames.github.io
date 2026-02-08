import React from 'react';
import { GAMES } from '../data/games';
import { Download, Smartphone } from 'lucide-react';

const OurGames: React.FC = () => {

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
                    <div key={game.id} className="glass-panel overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={game.images[0]}
                                alt={game.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <div>
                                    <span className="text-xs font-bold px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                        {game.genre}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {game.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3">
                                {game.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {game.links.appStore && (
                                    <a
                                        href={game.links.appStore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-medium border border-white/5 hover:border-white/20"
                                    >
                                        <Download size={16} /> App Store
                                    </a>
                                )}
                                {game.links.googlePlay ? (
                                    <a
                                        href={game.links.googlePlay}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-medium border border-white/5 hover:border-white/20"
                                    >
                                        <Smartphone size={16} /> Google Play
                                    </a>
                                ) : (
                                    <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-500 text-sm font-medium border border-white/5 cursor-not-allowed">
                                        <Smartphone size={16} /> Android (Beta)
                                    </span>
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
