import fs from 'fs/promises';
import path from 'path';
import pdf from 'pdf-parse/lib/pdf-parse.js';

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
        const data = await pdf(dataBuffer);
        content[file] = data.text;
        console.log(`Extracted: ${file}`);
      } catch (e) {
        console.error(`Failed to parse ${file}:`, e);
      }
    }

    await fs.writeFile(outputFile, JSON.stringify(content, null, 2));
    console.log(`Saved content to ${outputFile}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

extractContent();
