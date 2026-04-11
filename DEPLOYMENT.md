# Deployment & DevOps Guide

## Architecture Overview
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting Strategy**: Vercel Serverless

## Quickstart
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Vercel Deployment Steps
This project is pre-optimized for Vercel.

1. Create a [Vercel](https://vercel.com) account and install the Vercel CLI.
2. Run `vercel` in the project root to link the project.
3. Once linked, push code to a GitHub repository connected to your Vercel project, and Vercel will automatically trigger a production build.
4. Custom domains can be configured via the Vercel Project Dashboard under "Settings -> Domains".

## Optimizations Embedded
- **Image Optimization**: Default Next.js Image component logic handles lazy-loading & automatic WebP conversion (can be updated when images are added).
- **Code Splitting**: Native Next.js chunking strategy enables optimal Initial Load times.
- **SEO**: Dynamic `layout.tsx` metadata and semantically structured sections (`<section>`, `<h1>`, `<nav>`) provide immediate crawling value.

## Analytics Integration
To add Google Analytics or Vercel Web Analytics:
- For **Vercel Analytics**: Run `npm install @vercel/analytics` and inject `<Analytics />` in `src/app/layout.tsx`.
