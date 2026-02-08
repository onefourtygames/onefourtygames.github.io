import blockCrashImg from '../assets/block-crash.png';

export interface Game {
    id: string;
    title: string;
    description: string;
    genre: string;
    platform: string[];
    images: string[];
    links: {
        appStore?: string;
        googlePlay?: string;
        web?: string;
    };
    tags: string[];
    releaseDate?: string;
}

export const GAMES: Game[] = [
    {
        id: 'block-crash',
        title: 'Block Crash!',
        genre: 'Puzzle',
        description: 'Block Crash! is an addictive puzzle game that challenges your spatial reasoning. Fit blocks together, clear lines, and beat your high score in this vibrant and engaging experience. Designed for puzzle lovers of all ages.',
        platform: ['iOS', 'Android'],
        images: [
            blockCrashImg
        ],
        links: {
            appStore: 'https://apps.apple.com/us/app/block-crash/id6758680528',
            googlePlay: '', // Coming soon / Beta
        },
        tags: ['Puzzle', 'Casual', 'Strategy', 'Brain Teaser'],
        releaseDate: '2024'
    }
];
