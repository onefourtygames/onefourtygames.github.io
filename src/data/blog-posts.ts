import type { BlogPost } from '../pages/BlogTypes';

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'why-mobile-puzzle-games-are-good-for-your-brain',
        title: {
            en: 'Why Mobile Puzzle Games Are Actually Good for Your Brain',
            es: 'Por qué los Juegos de Puzzles Móviles son Buenos para tu Cerebro'
        },
        date: '2026-01-09',
        summary: {
            en: 'Did you know that playing Block Crash can improve your cognitive functions? Discover the science behind puzzle games and brain health.',
            es: '¿Sabías que jugar a Block Crash puede mejorar tus funciones cognitivas? Descubre la ciencia detrás de los juegos de puzzles y la salud cerebral.'
        },
        author: 'One Fourty Games Team',
        image: '/assets/blog/brain-benefits.png',
        tags: ['Brain Training', 'Science', 'Block Crash', 'Mobile Games'],
        contentPath: {
            en: '/content/blog/brain-benefits.md',
            es: '/content/blog/brain-benefits.es.md'
        }
    }
];
