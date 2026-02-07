const fs = require('fs/promises');
const path = require('path');

let pdf;
try {
    pdf = require('pdf-parse/dist/pdf-parse/cjs/index.js');
} catch (e) {
    try {
        pdf = require('pdf-parse');
    } catch (e2) {
        console.error('Could not load pdf-parse');
        process.exit(1);
    }
}

// Helper to handle the library weirdness
async function parsePDF(buffer) {
    // If it's a function, try calling it
    try {
        return await pdf(buffer);
    } catch (e) {
        if (e.message && e.message.includes("Class constructor")) {
            // It's a class, try new
            const instance = new pdf(buffer);
            // If instance is a promise (it shouldn't be, but who knows)
            if (instance instanceof Promise) return await instance;
            // If instance has text, return it
            if (instance.text) return instance;
            // If instance has a parse method?
            if (typeof instance.parse === 'function') return await instance.parse();
            // Maybe the class IS the promise when awaited?
            return instance;
        }
        throw e;
    }
}

const docsDir = 'docs';
const outputDir = 'src/data';
const outputFile = path.join(outputDir, 'legal_content.json');

async function extractContent() {
    try {
        const files = await fs.readdir(docsDir);
        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        const content = {};

        for (const file of pdfFiles) {
            const filePath = path.join(docsDir, file);
            const dataBuffer = await fs.readFile(filePath);
            try {
                console.log(`Parsing ${file}...`);
                const data = await parsePDF(dataBuffer);
                content[file] = data.text || "No text found";
                console.log(`Extracted: ${file} (${content[file].length} chars)`);
            } catch (e) {
                console.error(`Failed to parse ${file}:`, e.message);
                // Fallback
                content[file] = "Content could not be extracted automatically. Please refer to the original PDF.";
            }
        }

        await fs.writeFile(outputFile, JSON.stringify(content, null, 2));
        console.log(`Saved content to ${outputFile}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

extractContent();
