import assert from 'node:assert/strict';
import test from 'node:test';

import { normalizeLang, resolveLangFromUrl, setLangInHash } from '../src/utils/lang.ts';

test('normalizeLang only returns Spanish for "es"', () => {
    assert.equal(normalizeLang('es'), 'es');
    assert.equal(normalizeLang('ES'), 'es');
    assert.equal(normalizeLang('en'), 'en');
    assert.equal(normalizeLang('fr'), 'en');
    assert.equal(normalizeLang(undefined), 'en');
});

test('resolveLangFromUrl supports hash-query and standard search', () => {
    assert.equal(resolveLangFromUrl('', '#/privacy?lang=es'), 'es');
    assert.equal(resolveLangFromUrl('', '#/privacy?lang=en'), 'en');
    assert.equal(resolveLangFromUrl('', '#/privacy?lang=fr'), 'en');
    assert.equal(resolveLangFromUrl('', '#/terms?lang=es'), 'es');
    assert.equal(resolveLangFromUrl('?lang=es', '#/about'), 'es');
    assert.equal(resolveLangFromUrl('?lang=fr', '#/terms'), 'en');
    assert.equal(resolveLangFromUrl('', '#/about'), 'en');
});

test('setLangInHash keeps route and updates query params', () => {
    assert.equal(setLangInHash('#/privacy', 'es'), '#/privacy?lang=es');
    assert.equal(setLangInHash('#/privacy?lang=fr&foo=1', 'en'), '#/privacy?lang=en&foo=1');
    assert.equal(setLangInHash('', 'en'), '#/?lang=en');
});
