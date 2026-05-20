# Astro Wiki - Semantic Knowledge Architecture

A beautifully crafted wiki built with Astro, GSAP, and Three.js that explores the intersection of knowledge management, creative systems, and semantic understanding.

## Features

- **GSAP-Powered Animations**: Smooth scroll-triggered typography animations
- **Three.js Visual Effects**: Dynamic particle background on the landing page
- **Semantic Tagging System**: Nine Muses / Endocrine schema for energetic classification
- **PARA Method Integration**: Content organized by Projects, Areas, Resources, and Archives
- **Markdown Content Collections**: Easy content management with Astro's built-in system
- **Responsive Design**: Works beautifully on all devices
- **Consistent Voice & Tone**: Editorial guidelines ensure cohesive reading experience

## Tech Stack

- **Astro 6.x** - Static site generator
- **Tailwind CSS 4.x** - Utility-first styling
- **GSAP 3.x** - Advanced animations
- **Three.js** - WebGL effects
- **React** - Interactive components (when needed)
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js >= 22.12.0
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server will start at `http://localhost:4321`.

## Project Structure

```
astro-wiki/
├── src/
│   ├── components/
│   │   ├── Landing/
│   │   │   └── Gallery.astro          # Landing page gallery with GSAP + particles
│   │   ├── Blog/
│   │   │   └── TypographyScroll.astro # Blog detail page with scroll animations
│   │   └── Semantic/
│   │       └── CategoryGraph.astro    # Semantic knowledge graph visualization
│   ├── content/
│   │   ├── blog/
│   │   │   └── 001-para-method-semantic-architecture.md  # Template blog post
│   │   └── config.ts                  # Content collections schema
│   ├── layouts/
│   │   └── BaseLayout.astro           # Base HTML layout
│   └── pages/
│       ├── index.astro                # Landing page
│       └── blog/
│           ├── index.astro            # Blog listing
│           └── [slug].astro           # Blog detail page
├── public/
│   └── assets/
│       └── gallery/                   # Gallery images
├── astro.config.mjs
├── package.json
└── VOICE_TONE_GUIDE.md                # Editorial voice guidelines
```

## Content Management

### Creating New Posts

1. Create a new markdown file in `src/content/blog/`
2. Use the frontmatter schema:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of the post'
pubDate: 2026-05-20
categories: ['Category 1', 'Category 2']
tags: ['tag1', 'tag2', 'tag3']
muse: 'urania'  # One of the Nine Muses
paraType: 'resource'  # project, area, or resource
voiceTone: 'analytical-yet-accessible'
readingTime: 8
---

Your markdown content here...
```

### Nine Muses Tagging

| Muse | Hormone | Domain |
|------|---------|--------|
| `euterpe` | Endorphins | Lyrical poetry, music, resolution |
| `thalia` | Dopamine | Comedy, pleasure, reward |
| `erato` | Estrogen | Love poetry, receptivity, creation |
| `polymnia` | Melatonin | Sacred hymns, circadian rhythm |
| `melpomene` | Cortisol | Tragedy, stress, awareness |
| `urania` | Serotonin | Astronomy, balance, order |
| `clio` | Oxytocin | History, memory, bonding |
| `calliope` | Testosterone | Epic poetry, sustained momentum |
| `terpsichore` | Adrenaline | Dance, total engagement |
| `void` | Baseline | Rest, waiting for activation |

## Voice & Tone

This wiki maintains a consistent voice that is:
- **Analytical yet accessible**
- **Practical over theoretical**
- **Holistic in perspective**
- **Respectful of complexity**

See [VOICE_TONE_GUIDE.md](./VOICE_TONE_GUIDE.md) for complete editorial guidelines.

## Deployment

### GitHub Pages

```bash
# Update astro.config.mjs with your repo name
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/astro-wiki',
});

# Build and deploy
npm run build
npx gh-pages -d dist
```

### Vercel

```bash
npx vercel
```

### Netlify

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## License

MIT

## Acknowledgments

- Inspired by [J0SUKE/gsap-threejs-codrops](https://github.com/J0SUKE/gsap-threejs-codrops) for the landing page effects
- Typography animations inspired by [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations)
- PARA method by [Tiago Forte](https://fortelabs.com/)
- Nine Muses schema from the PARA Vault knowledge system
