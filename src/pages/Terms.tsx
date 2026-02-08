import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import termsEn from '../content/terms_en.md?raw';
import termsEs from '../content/terms_es.md?raw';

const Terms: React.FC = () => {
    const { i18n } = useTranslation();
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(i18n.language.startsWith('es') ? termsEs : termsEn);
    }, [i18n.language]);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
                <article className="prose prose-invert prose-lg max-w-none prose-headings:text-gradient prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </div>
        </div>
    );
};

export default Terms;
