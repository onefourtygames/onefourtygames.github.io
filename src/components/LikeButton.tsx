import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LikeButtonProps {
    slug: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ slug }) => {
    const { t } = useTranslation();
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        // Localized simulated "backend" logic
        // We use a deterministic random number based on the slug to simulate a consistent base count
        // For 'why-mobile-puzzle-games...', sum is ~4500. % 200 + 100 gives range 100-300.
        const charCodeSum = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const baseCount = (charCodeSum % 200) + 100;

        const storedLike = localStorage.getItem(`blog_like_${slug}`);
        if (storedLike) {
            setHasLiked(true);
            setLikes(baseCount + 1);
        } else {
            setLikes(baseCount);
        }
    }, [slug]);

    const handleLike = () => {
        if (hasLiked) return;

        setLikes(prev => prev + 1);
        setHasLiked(true);
        setAnimating(true);
        localStorage.setItem(`blog_like_${slug}`, 'true');

        setTimeout(() => setAnimating(false), 1000);
    };

    return (
        <div className="flex flex-col items-center mt-12 mb-8">
            <button
                onClick={handleLike}
                disabled={hasLiked}
                className={`
                    group relative flex items-center gap-3 px-8 py-4 rounded-full 
                    transition-all duration-300 transform
                    ${hasLiked
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500/50 cursor-default'
                        : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-pink-500/50 hover:scale-105 active:scale-95 cursor-pointer'
                    }
                    border backdrop-blur-sm
                `}
            >
                <div className="relative">
                    <Heart
                        size={32}
                        className={`
                            transition-all duration-300
                            ${hasLiked ? 'fill-pink-500 text-pink-500' : 'text-gray-400 group-hover:text-pink-400'}
                            ${animating ? 'animate-bounce' : ''}
                        `}
                    />
                    {animating && (
                        <span className="absolute -top-8 left-0 text-pink-400 font-bold animate-ping">
                            +1
                        </span>
                    )}
                </div>

                <div className="flex flex-col items-start">
                    <span className={`text-2xl font-bold ${hasLiked ? 'text-pink-400' : 'text-gray-200'}`}>
                        {likes}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        {hasLiked ? t('blog.thanks') : t('blog.like_post')}
                    </span>
                </div>

                {/* Particle effects for click */}
                {animating && (
                    <>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-75"></div>
                        <div className="absolute bottom-0 left-10 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-150"></div>
                    </>
                )}
            </button>
        </div>
    );
};

export default LikeButton;
