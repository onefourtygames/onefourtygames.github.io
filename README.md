# One Fourty Games Website

A premium, interactive website for One Fourty Games, built with React, Vite, and TypeScript.

## Features

- **Premium UI**: Dark mode, glassmorphism, and neon gradients matching the brand identity.
- **Interactive Background**: A custom "Binary Rain" effect that reacts to mouse movement, using the "1" and "0" from the logo.
- **Internationalization**: Full English and Spanish support (`src/i18n.ts`).
- **Responsive Design**: Mobile-first approach with a custom navigation menu.
- **Content System**: Legal documents are loaded from `src/data/legal_content.json`.

## Getting Started

1.   **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components`: Reusable UI components (Layout, BinaryBackground).
-   `src/pages`: Page components (Home, About, Privacy, Terms).
-   `src/data`: JSON data for legal content.
-   `src/assets`: Images and global styles.

## PDF Content Extraction

The project includes a script to extract text from PDFs in the `docs` folder:

```bash
node scripts/extract_content.cjs
```

*Note: If automatic extraction fails due to PDF encoding/compression, please manually update `src/data/legal_content.json`.*
