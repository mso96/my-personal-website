# sefaoruc.com

Personal website for **Sefa Oruc**, a London-based Marketing Engineer and founder of [Wubbie Studio](https://wubbiestudio.com/).

The site includes an about page, digital garden, gallery, tech gear page, and a curated list of favorite websites and resources.

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: MDX with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Icons**: [Lucide React](https://lucide.dev/icons/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: Cloudflare static deployment with Wrangler

## Pages

- `/` - About Sefa, Wubbie Studio, Londonmaxxing, socials, and contact
- `/blog` - Digital garden / thoughts
- `/gallery` - Personal photo gallery
- `/tech-gear` - Tech gear list with hover previews
- `/thoughts` - Favorite websites and resources

## Running Locally

This project uses pnpm.

```bash
pnpm install
pnpm dev
```

Open:

```bash
http://localhost:3000
```

If port `3000` is busy, Next.js may choose another local port.

## Build

```bash
pnpm build
```

The app is configured as a static export in `next.config.mjs`, so the production build outputs static files to:

```bash
out/
```

## Cloudflare Deploy

The Cloudflare deploy command is:

```bash
npx wrangler deploy
```

`wrangler.jsonc` runs the build first and then deploys the generated `out/` directory.

## Repository

```bash
https://github.com/mso96/my-personal-website
```

