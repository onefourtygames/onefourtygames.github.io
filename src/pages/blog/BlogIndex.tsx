import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SeoHead from '../../components/SeoHead';
import { BLOG_POSTS } from '../../data/blog-posts';

const BlogIndex: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-20">
            <SeoHead
                titleKey="Mobile Game Blog"
                useRawTitle={true}
                descriptionKey="Insights, tips, and news about mobile puzzle games and game development."
                useRawDescription={true}
            />

            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                    Blog & Insights
                </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                        <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-gray-900 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title[currentLang]}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl bg-gradient-to-br from-purple-900 to-cyan-900">
                                        BLOG
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-sm text-cyan-400 mb-2 font-medium">
                                    {post.tags.join(' • ')}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                                    {post.title[currentLang]}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.summary[currentLang]}
                                </p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                                    <span>{post.date}</span>
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogIndex;
