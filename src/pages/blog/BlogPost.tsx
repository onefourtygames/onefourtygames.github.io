import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../../data/blog-posts';
import SeoHead from '../../components/SeoHead';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (post) {
            fetch(post.contentPath)
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
    }, [post]);

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
                titleKey={post.title}
                useRawTitle={true}
                descriptionKey={post.summary}
                useRawDescription={true}
                type="article"
                keywords={post.tags}
            />

            <Link to="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            <article className="prose prose-invert prose-lg max-w-none">
                {/* Header */}
                <header className="mb-12 border-b border-white/10 pb-8">
                    <div className="flex gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="mb-4 text-4xl md:text-5xl font-extrabold">{post.title}</h1>
                    <div className="text-gray-400">
                        By <span className="text-white font-medium">{post.author}</span> • {post.date}
                    </div>
                </header>

                {/* Markdown Content */}
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                        <div className="h-4 bg-white/10 rounded w-1/2"></div>
                        <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    </div>
                ) : (
                    <ReactMarkdown
                        components={{
                            // Override default element styles for better tailwind typography integration if needed
                            // prose-invert class on parent handles most of this automatically
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                )}
            </article>
        </div>
    );
};

export default BlogPost;
