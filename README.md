# Portfolio Website (2025 April)

A replacement of the original over engineering personal page, built with Next.js framework.

## Tech Stack

- **Frontend Framework**: Next.js 15
- **React**: 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Actions CI/CD with Docker
- **Hosting**: On-premises Server
- **Container**: Docker
## Code Guidelines

- All code comments must be written in English
- Avoid using non-English characters in source code comments
- Use clear and concise English to describe functionality

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

This project uses GitHub Webhook for automated deployment to an on-premises server:

1. Deployment is automatically triggered when code is pushed to the `main` branch
2. GitHub Actions will execute the following steps:
   - Install dependencies
   - Run tests (no test, yolo :D) 
   - Build Docker image
   - Push Docker image to registry
   - Deploy to on-premises server using Docker

### GitHub Webhook Setup

The project uses GitHub Webhooks to trigger automatic deployments

Webhook configuration:
- **Events**: Push events to trigger deployment

## Docker

```bash
# Build Docker image
docker build -t portfolio:latest .

# Run Docker container
docker run -p 3000:3000 portfolio:latest
```

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
