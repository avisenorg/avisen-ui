# Avisen UI

A modern React application built with cutting-edge tools and technologies.

## Tech Stack

- **React 19** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code and better developer experience
- **Vite** - Next generation frontend tooling for faster development and building
- **pnpm** - Fast, disk space efficient package manager

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v18 or higher recommended)
- pnpm (v10 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd avisen-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `pnpm run dev` - Starts the development server
- `pnpm run build` - Creates a production build
- `pnpm run lint` - Runs ESLint to check code quality
- `pnpm run preview` - Preview the production build locally

## Project Structure

```
avisen-ui/
├── src/              # Source files
│   ├── assets/       # Static assets
│   ├── components/   # React components
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
├── public/          # Public static files
└── index.html       # HTML entry point
```

## Development Tools

- **ESLint** - For code linting and maintaining code quality
- **TypeScript ESLint** - TypeScript support for ESLint
- **React Refresh** - Fast refresh for React components during development
