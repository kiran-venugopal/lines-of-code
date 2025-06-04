# File Line Counter

A simple web application to count the number of lines in selected file. Built with React, Vite, and Tailwind CSS.
https://lines-of-code-eight.vercel.app

## Features

Completed Features ✅

- Support multiple programming language syntax (JavaScript and Python).
- Support reading one source file and printing results
- Types of lines supported: Blank, Comments, Code.
- Supports single-line and multi-line comments.
- A line counts as a comment only if it has no other code.
- Designed for extensibility: you should be able to support new language syntaxes by
  extending this solution.
- UTs using vites

Pending Features ⏳

- Supporting multiple files and giving totals for an entire source tree.
- Ability to add more granular breakup (eg: classify lines as imports, variable
  declarations, etc)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/file-line-counter.git
   cd file-line-counter
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```sh
pnpm build
# or
npm run build
# or
yarn build
```

### Running Tests

```sh
pnpm test
# or
npm test
# or
yarn test
```

## Project Structure

- `src/` - Main source code
  - `features/` - Feature modules (file selection, stats view)
  - `utils/` - Utility functions
  - `context/` - React context for global state
- `public/` - Static assets
- `index.html` - Main HTML file

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT

For supporting different languages:

- regex syntax mapping object
- we should follow a builder/currying approach
  - language specific checks, like indentation
  - common checks, regex for each syntax
