# 🌐 NextGen Academy — Frontend

Next.js web application for the NextGen Academy learning platform.

## Tech Stack

- **Next.js** 16.2.9 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **Axios** (HTTP client)

## Prerequisites

- Node.js 18+
- npm 9+

## How to Run

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

The frontend starts on **http://localhost:3000**.

## Backend Connection

The frontend connects to the Spring Boot backend via Axios. The base URL is configured in `lib/api.ts`:

```typescript
baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"
```

To override, create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:8080
```

> ⚠️ Make sure the backend is running on port 8080 before using features that call the API.

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles (Tailwind CSS 4)
│   ├── layout.tsx        # Root layout with Inter font
│   └── page.tsx          # Home page & Login page
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/
│   ├── api.ts            # Axios instance (backend connection)
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS config (Tailwind v4)
└── package.json          # Dependencies & scripts
```

## Available Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start development server  |
| `npm run build` | Build for production      |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |
