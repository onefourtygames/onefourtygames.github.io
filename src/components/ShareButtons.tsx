import React, { useState } from 'react';
import { Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ShareButtonsProps {
    title: string;
    url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareOnX = () => {
        const text = encodeURIComponent(title);
        const shareUrl = encodeURIComponent(url);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, '_blank');
    };

    const shareOnFacebook = () => {
        const shareUrl = encodeURIComponent(url);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {t('blog.share_post')}
            </span>
            <div className="flex gap-4">
                <button
                    onClick={shareOnX}
                    className="p-3 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
                    aria-label="Share on X"
                >
                    <Twitter size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </button>

                <button
                    onClick={shareOnFacebook}
                    className="p-3 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                    aria-label="Share on Facebook"
                >
                    <Facebook size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </button>

                <button
                    onClick={handleCopy}
                    className="relative p-3 rounded-full bg-black/40 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all group"
                    aria-label="Copy Link"
                >
                    {copied ? (
                        <Check size={20} className="text-green-500" />
                    ) : (
                        <LinkIcon size={20} className="text-gray-400 group-hover:text-green-400 transition-colors" />
                    )}

                    {copied && (
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-green-500 font-bold whitespace-nowrap animate-fade-in-up">
                            {t('blog.link_copied')}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
