import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../../data/blog-posts';
import SeoHead from '../../components/SeoHead';
import LikeButton from '../../components/LikeButton';
import ShareButtons from '../../components/ShareButtons';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { i18n } = useTranslation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    // Find post
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (post) {
            setLoading(true);
            const path = post.contentPath[currentLang];
            fetch(path)
                .then((res) => {
                    if (!res.ok) throw new Error('Failed to load post');
                    return res.text();
                })
                .then((text) => setContent(text))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [post, currentLang]);

    if (!post) {
        return (
            <div className="pt-32 text-center container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link to="/blog" className="text-cyan-400 hover:underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-20 max-w-4xl">
            <SeoHead
                titleKey={post.title[currentLang]}
                useRawTitle={true}
                descriptionKey={post.summary[currentLang]}
                useRawDescription={true}
                type="article"
                keywords={post.tags}
                image={post.image}
            />

            <Link to="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <article className="prose prose-invert prose-lg max-w-none">
                {/* Header Feature Image */}
                {post.image && (
                    <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex justify-center bg-black/50">
                        <img
                            src={post.image}
                            alt={post.title[currentLang]}
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                )}

                {/* Header Text */}
                <header className="mb-12 border-b border-white/10 pb-8 text-center">
                    <div className="flex justify-center gap-2 mb-6">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-cyan-900/30 text-cyan-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-cyan-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="mb-6 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 leading-tight">
                        {post.title[currentLang]}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm font-medium">
                        <span className="text-white bg-white/10 px-3 py-1 rounded-full">{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </header>

                {/* Markdown Content */}
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
                        <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
                        <div className="h-4 bg-white/10 rounded w-5/6 mx-auto"></div>
                    </div>
                ) : (
                    <div className="blog-content">
                        <ReactMarkdown
                            components={{
                                // Custom renderer for images to ensure they are centered and styled
                                img: ({ node: _node, ...props }) => (
                                    <figure className="my-12 flex flex-col items-center">
                                        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/30">
                                            <img
                                                {...props}
                                                className="max-h-[500px] w-auto object-contain mx-auto"
                                                loading="lazy"
                                            />
                                        </div>
                                        {props.alt && (
                                            <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                                                {props.alt}
                                            </figcaption>
                                        )}
                                    </figure>
                                ),
                                // Center paragraphs if they contain a single image (handled by img tag mostly, but good for safety)
                                p: ({ node: _node, children }) => {
                                    // Logic to check if paragraph contains only an image could go here, 
                                    // but CSS usually handles the 'figure' centering better.
                                    return <p className="mb-6 text-gray-300 leading-relaxed">{children}</p>;
                                }
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}

                {/* Interaction Section */}
                <div className="border-t border-white/10 pt-12 mt-16 flex flex-col items-center gap-8">
                    <LikeButton slug={post.slug} />
                    <ShareButtons title={post.title[currentLang]} url={window.location.href} />
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
