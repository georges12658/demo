# Demo Project

A full‑stack application built with Next.js (frontend) and Express + Prisma (backend). It demonstrates a simple user CRUD API, JWT authentication, Docker deployment, and CI/CD pipeline.

## Project Structure

```
demo/
├─ frontend/          # Next.js frontend
├─ backend/           # Express API
├─ prisma/            # Prisma schema
├─ docker-compose.yml
├─ .env               # Runtime environment variables
├─ .env.example       # Example env file
├─ README.md
├─ package.json
└─ ...
```

## Prerequisites

- Node.js 20+
- Docker & Docker Compose
- PostgreSQL (or use the Docker service)

## Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-org/demo.git
   cd demo
   ```

2. **Install dependencies**

   ```bash
   npm ci
   ```

3. **Configure environment**

   Copy `.env.example` to `.env` and adjust values.

   ```bash
   cp .env.example .env
   ```

4. **Generate Prisma client**

   ```bash
   npx prisma generate
   ```

5. **Run locally**

   ```bash
   npm run dev
   ```

   - Frontend: <http://localhost:3000>
   - Backend: <http://localhost:3001> (default port 3001 in `backend/index.ts`)

## Docker

Build and run all services:

```bash
docker compose up --build
```

The stack will expose:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- PostgreSQL: `localhost:5432`

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Starts both frontend and backend concurrently |
| `dev:frontend` | Runs Next.js dev server |
| `dev:backend` | Runs Express dev server with ts-node |
| `build` | Builds Next.js and compiles backend |
| `start` | Starts both services in production mode |
| `lint` | Runs ESLint on all files |
| `test` | Placeholder for tests (currently no tests) |

## Architecture

- **Frontend**: Next.js with TypeScript, global styles, and a simple layout component.
- **Backend**: Express API with TypeScript, Prisma ORM, JWT authentication, and structured middleware.
- **Database**: PostgreSQL managed by Prisma.
- **CI/CD**: GitHub Actions workflow that lints, tests, builds, and deploys the application.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss.

## License

MIT
