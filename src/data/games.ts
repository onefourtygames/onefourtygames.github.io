import blockCrashImg from '../assets/block-crash.png';

export interface Game {
    id: string;
    title: string;
    descriptionKey: string; // Changed from description to descriptionKey
    genreKey: string; // Changed from genre to genreKey because genre was also English text
    platform: string[];
    images: string[];
    links: {
        appStore?: string;
        googlePlay?: string;
        web?: string;
    };
    tags: string[]; // These might need translation too, but for now let's keep them or Key them. Let's Key them.
    releaseDate?: string;
}

export const GAMES: Game[] = [
    {
        id: 'block-crash',
        title: 'Block Crash!',
        genreKey: 'puzzle',
        descriptionKey: 'games_page.block_crash.desc',
        platform: ['iOS', 'Android'],
        images: [
            blockCrashImg
        ],
        links: {
            appStore: 'https://apps.apple.com/us/app/block-crash/id6758680528',
            googlePlay: '', // Coming soon / Beta
        },
        tags: ['Puzzle', 'Casual', 'Strategy', 'Brain Teaser'], // Tags are tricky, let's leave them for now or remove if unused in i18n context
        releaseDate: '2024'
    }
];
