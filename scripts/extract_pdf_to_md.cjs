const fs = require('fs/promises');
const path = require('path');

// --- ROBUST PDF LOADING LOGIC ---
let pdfLib;
try {
    const p = require('pdf-parse');
    if (typeof p === 'function') pdfLib = p;
    else if (p.default && typeof p.default === 'function') pdfLib = p.default;
    else if (p.PDFParse) pdfLib = p.PDFParse;
    else {
        // Fallback: try CJS direct import if available or assume it's a class
        try { pdfLib = require('pdf-parse/dist/pdf-parse/cjs/index.js'); } catch (e) { }
    }
} catch (e) {
    console.error('Failed to load pdf-parse:', e);
}

// Wrapper to handle function vs class vs promise
async function parsePDF(buffer) {
    if (!pdfLib) throw new Error('pdf-parse not loaded');

    // Try function call
    try {
        const result = await pdfLib(buffer);
        if (result && result.text) return result;
    } catch (e) {
        if (e.message && e.message.includes("Class constructor")) {
            // It's a class
            const instance = new pdfLib(buffer);
            return instance;
        }
    }
    throw new Error('Could not parse PDF');
}
// ---------------------------------

const docsDir = 'docs';
const contentDir = 'src/content';

const fileMapping = {
    'About Us (1).pdf': 'about_en.md',
    'Sobre Nosotros.pdf': 'about_es.md',
    'POLÍTICA DE PRIVACIDAD.pdf': 'privacy_es.md',
    'PRIVACY POLICY - Documentos de Google (1).pdf': 'privacy_en.md',
    'TERMS OF USE.pdf': 'terms_en.md',
    'TÉRMINOS DE USO (1).pdf': 'terms_es.md'
};

async function extractToMarkdown() {
    try {
        const files = await fs.readdir(docsDir);

        for (const file of files) {
            if (!file.endsWith('.pdf')) continue;

            let targetMd = null;
            const normalizedFile = file.normalize('NFC');
            // Try strict match and normalized match
            for (const key of Object.keys(fileMapping)) {
                if (normalizedFile === key.normalize('NFC') || file === key) {
                    targetMd = fileMapping[key];
                    break;
                }
            }

            if (!targetMd) {
                console.warn(`Skipping ${file} - Not in mapping`);
                continue;
            }

            const filePath = path.join(docsDir, file);
            const buffer = await fs.readFile(filePath);

            try {
                console.log(`Extracting ${file}...`);
                const data = await parsePDF(buffer);
                const text = data.text || '';

                // Markdown formatting
                const title = path.basename(targetMd, '.md').toUpperCase().replace('_', ' ');
                const content = `# ${title}\n\n${text.trim()}`;

                await fs.writeFile(path.join(contentDir, targetMd), content);
                console.log(`✅ Saved to ${targetMd}`);
            } catch (e) {
                console.error(`❌ Error parsing ${file}:`, e.message);
                // Fallback: Write error message in MD so we see it in UI
                await fs.writeFile(path.join(contentDir, targetMd), `# Error\n\nCould not extract content from ${file}.`);
            }
        }
    } catch (err) {
        console.error('Script failed:', err);
    }
}

extractToMarkdown();
