# Demo Project

A simple full‑stack application built with Next.js (frontend) and Express (backend) using TypeScript.

## Features

- Next.js 13 for server‑side rendering and routing.
- Express API with TypeScript.
- Environment variable management via dotenv.
- Linting with ESLint and formatting with Prettier.
- Concurrent development server.

## Getting Started

### Prerequisites

- Node.js 20.x
- npm

### Installation

```
git clone https://github.com/your-org/demo.git
cd demo
npm install
```

### Running the Application

```
npm run dev
```

This will start both the frontend on `http://localhost:3000` and the backend on `http://localhost:3001`.

### Building for Production

```
npm run build
```

### Testing

```
npm run test
```

## Environment Variables

Create a `.env` file based on `.env.example` and set the required values.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code passes linting and tests before submitting.

## License

MIT
