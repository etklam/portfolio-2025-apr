# Portfolio Website (2025 April)

A modern personal portfolio website built with Next.js framework.

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Actions CI/CD
- **Hosting**: GitHub Pages

## Key Features

- Responsive Design
- Portfolio Showcase
- Skills Display
- Career Timeline
- About Me Page
- Contact Information

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project uses GitHub Webhook for automated deployment:

1. Deployment is automatically triggered when code is pushed to the `main` branch
2. GitHub Actions will execute the following steps:
   - Install dependencies
   - Run tests (if any)
   - Build the project
   - Deploy to GitHub Pages

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/etklam/portfolio-2025-apr.git
cd portfolio-2025-apr
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file and set required environment variables:
```
NEXT_PUBLIC_API_URL=your_api_url_here
```

4. Start development server:
```bash
npm run dev
```

## Contact

- Email: mail@kwunlam.com
- GitHub: [etklam](https://github.com/etklam/portfolio-2025-apr)

## License

MIT License
