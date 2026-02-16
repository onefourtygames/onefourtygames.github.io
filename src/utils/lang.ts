export type AppLang = 'es' | 'en';

type LocationLangSource = {
    search: string;
    hash: string;
};

export function normalizeLang(input?: string | null): AppLang {
    return input?.trim().toLowerCase() === 'es' ? 'es' : 'en';
}

function getLangFromHashQuery(hash: string): string | null {
    const rawHash = hash.startsWith('#') ? hash.slice(1) : hash;
    const queryStart = rawHash.indexOf('?');

    if (queryStart === -1) {
        return null;
    }

    return new URLSearchParams(rawHash.slice(queryStart + 1)).get('lang');
}

export function resolveLangFromUrl(search: string, hash: string): AppLang {
    const hashLang = getLangFromHashQuery(hash);
    if (hashLang !== null) {
        return normalizeLang(hashLang);
    }

    return normalizeLang(new URLSearchParams(search).get('lang'));
}

export function resolveLangFromLocation(source: LocationLangSource): AppLang {
    return resolveLangFromUrl(source.search, source.hash);
}

export function getInitialAppLang(): AppLang {
    if (typeof window === 'undefined') {
        return 'en';
    }

    return resolveLangFromLocation(window.location);
}

export function setLangInHash(hash: string, lang: AppLang): string {
    const rawHash = hash.startsWith('#') ? hash.slice(1) : hash;
    const queryStart = rawHash.indexOf('?');
    const routePath = (queryStart === -1 ? rawHash : rawHash.slice(0, queryStart)) || '/';
    const queryString = queryStart === -1 ? '' : rawHash.slice(queryStart + 1);
    const params = new URLSearchParams(queryString);

    params.set('lang', lang);

    const nextQuery = params.toString();
    return `#${routePath}${nextQuery ? `?${nextQuery}` : ''}`;
}

export function syncLangInCurrentUrl(lang: AppLang): void {
    if (typeof window === 'undefined') {
        return;
    }

    const nextHash = setLangInHash(window.location.hash, lang);
    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;

    window.history.replaceState(window.history.state, '', nextUrl);
}
