export type LocalizedContent = {
    en: string;
    es: string;
};

export interface BlogPost {
    slug: string;
    title: LocalizedContent;
    date: string; // ISO format: YYYY-MM-DD
    summary: LocalizedContent;
    author: string;
    image?: string; // Feature image URL
    tags: string[];
    contentPath: LocalizedContent; // Path to markdown file (relative to public/ or src literal)
}
