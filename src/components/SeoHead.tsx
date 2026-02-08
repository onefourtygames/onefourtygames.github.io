import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SeoHeadProps {
    titleKey?: string;
    descriptionKey?: string;
    image?: string; // URL to the image
    type?: 'website' | 'article' | 'product' | 'game';
    keywords?: string[];
    useRawTitle?: boolean; // If true, titleKey is used as the raw title string, not a translation key
    useRawDescription?: boolean; // If true, descriptionKey is used as the raw description string
}

const SeoHead: React.FC<SeoHeadProps> = ({
    titleKey = 'seo.default.title',
    descriptionKey = 'seo.default.description',
    image = '/og-image.jpg', // You need to ensure this file exists in public/
    type = 'website',
    keywords = [],
    useRawTitle = false,
    useRawDescription = false
}) => {
    const { t } = useTranslation();

    const siteName = 'One Fourty Games';
    // Use the translation hook or raw string based on props
    const title = useRawTitle ? titleKey : t(titleKey);
    const description = useRawDescription ? descriptionKey : t(descriptionKey);
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
    const url = window.location.href;

    // Default Keywords for Mobile Puzzle Games
    const defaultKeywords = [
        'mobile puzzle games',
        'block puzzle',
        'brain training',
        'casual games',
        'ios games',
        'android games',
        'One Fourty Games'
    ];

    const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Smart App Banner (iOS) */}
            <meta name="apple-itunes-app" content="app-id=6758680528" />
            {/* Android App Link (Optional but good practice) */}
            <meta name="google-play-app" content="app-id=com.onefourtygames.blockcrash" />

        </Helmet>
    );
};

export default SeoHead;
