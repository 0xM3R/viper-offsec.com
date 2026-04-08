# Viper Offensive Security — Website

Modern, dark-themed website for Viper Offensive Security Ltd built with Next.js 14, Tailwind CSS, Framer Motion, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Fonts**: Inter + JetBrains Mono
- **Icons**: Lucide React

## Getting Started

```bash
npm install
cp .env.example .env.local   # Add your Resend API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route              | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `/`                | Home — hero, services snapshot, stats, why Viper, featured research, CTA |
| `/services`        | Detailed service descriptions with sticky sidebar navigation             |
| `/about`           | Bio, career timeline, philosophy                                         |
| `/research`        | Research posts with category filtering + talks & presentations           |
| `/research/[slug]` | Individual research post pages                                           |
| `/contact`         | Contact form with validation + Resend email integration                  |

## Environment Variables

| Variable         | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for contact form emails |

## Deployment

Vercel-ready. Push to a connected GitHub repo or run:

```bash
npx vercel
```

## Adding Research Posts

Add entries to `src/data/research.ts` and create corresponding content. The dynamic route at `/research/[slug]` handles rendering.
