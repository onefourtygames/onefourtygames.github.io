export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO format: YYYY-MM-DD
    summary: string;
    author: string;
    image?: string; // Feature image URL
    tags: string[];
    contentPath: string; // Path to markdown file (relative to public/ or src literal)
}
