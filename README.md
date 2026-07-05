# PodiaXpert - Advanced Foot Clinic & Mobility Solutions

PodiaXpert is Kolkata's leading advanced foot clinic offering custom insoles, custom footwear, diabetic foot care, gait analysis, foot assessment, and complete mobility solutions. 

This project is built using [Next.js](https://nextjs.org/) App Router, styled with [Tailwind CSS](https://tailwindcss.com/), and fully optimized for Search Engines (SEO).

## Features

- **Next.js App Router**: Fast, server-side rendered pages and dynamic routing.
- **Fully Responsive**: Beautiful UI that works perfectly on desktop, tablet, and mobile.
- **Comprehensive SEO**: 
  - Dynamic `sitemap.xml` and `robots.txt`
  - Per-page specific metadata titles, descriptions, and keywords.
  - Open Graph and Twitter card integrations.
  - JSON-LD Structured Data for Local Medical Business.
- **Dynamic Content**: Services, foot problems, and blogs are dynamically generated from data structures.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app`: Contains all Next.js App Router routes (`page.tsx`, `layout.tsx`, `sitemap.ts`, `robots.ts`).
- `src/components`: Reusable UI components grouped by sections (home, about, book, contact, global).
- `src/data` & `src/lib`: Data files feeding the dynamic routes for services, problems, and blogs.
- `public`: Static assets including images and logos.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
