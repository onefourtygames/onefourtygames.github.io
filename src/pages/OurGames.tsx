import React from 'react';
import { useTranslation } from 'react-i18next';
import { GAMES } from '../data/games';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

const OurGames: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in space-y-12">
            <SeoHead
                titleKey="games_page.title"
                descriptionKey="games_page.subtitle"
                keywords={['mobile games', 'puzzle games', 'ios games', 'android games']}
            />
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
                                        <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover/btn:text-white transition-colors">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                        </svg>
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
                                        <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover/btn:text-white transition-colors">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                        </svg>
                                        <div className="text-left">
                                            <div className="text-[8px] text-gray-500 uppercase font-semibold">Get it on</div>
                                            <div className="text-lg font-bold text-white leading-none">Google Play</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 w-full opacity-50 cursor-not-allowed">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
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
