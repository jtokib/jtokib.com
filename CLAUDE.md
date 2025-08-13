# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (Cloudflare Workers)
npm run build

# Preview with Cloudflare Workers runtime (Windows compatibility issues)
npm run preview

# Build and deploy to Cloudflare Workers
npm run deploy

# Deploy directly with wrangler (Windows-compatible)
npx wrangler deploy

# Generate Cloudflare Worker types
npm run cf-typegen

# Run linting
npm run lint
```

## Project Architecture

This is a **personal portfolio website** for Toki Burke, built as a **Next.js 14** application deployed on **Cloudflare Workers** using the OpenNext adapter for edge computing performance.

## Migration History

1. **GitHub Pages** → Initial static deployment with Jekyll
2. **Vercel** → Migration to Next.js with static site generation
3. **Cloudflare Workers** → Latest migration for edge computing and improved global performance

### Key Architecture Decisions

- **Cloudflare Workers**: Deployed using `@opennextjs/cloudflare` adapter for edge computing
- **Custom Domain**: Configured for `jtokib.com` with zone-level routing in `wrangler.toml`
- **Single Page Application**: All content lives in one page (`app/page.tsx`) with smooth scrolling navigation
- **Client-Side Components**: Navigation and AI Demo use `'use client'` directive for interactivity
- **CSS Modules Approach**: Global CSS in `app/globals.css` with CSS custom properties for theming
- **SEO Optimized**: Comprehensive metadata configuration in `app/layout.tsx`
- **Edge Performance**: Global edge network for optimal loading speeds worldwide

### File Structure Overview

```
app/
├── components/
│   ├── Navigation.tsx    # Smooth scrolling nav with mobile menu
│   ├── AIDemo.tsx        # Interactive demo with simulated responses
│   └── Guestbook.tsx     # Interactive guestbook with Supabase integration
├── globals.css           # All styles (uses CSS custom properties)
├── layout.tsx            # SEO metadata, fonts, analytics setup
└── page.tsx              # Main page content (hero, about, projects, contact, guestbook)
```

### Component Architecture

- **Navigation**: Client-side component with scroll detection, mobile menu, and smooth scrolling
- **AIDemo**: Interactive widget with predefined responses simulating an AI surf assistant
- **Guestbook**: Interactive guestbook component with Supabase database integration for visitor messages
- **Layout**: Contains comprehensive SEO metadata, Google Tag Manager, and Vercel Analytics
- **Main Page**: Server component with all content sections in a single file

### Styling System

- Uses CSS custom properties (CSS variables) defined in `:root`
- Mobile-first responsive design
- Color scheme: Primary (#6366f1), Secondary (#06b6d4), Accent (#f59e0b)
- Consistent spacing and typography scale
- Box shadows and border radius defined as variables

### External Integrations

- **Google Tag Manager**: Embedded script in layout with GTM-TM7DV4L ID for analytics
- **Inter Font**: Google Fonts integration via Next.js font optimization
- **Supabase**: Database integration for guestbook functionality via `@supabase/supabase-js`
- **Static Assets**: Comprehensive favicon set and PWA manifest in `/public`
- **Cloudflare Workers**: Edge computing platform for optimal global performance

### Deployment Configuration

- **Wrangler Config**: `wrangler.toml` with custom domain routing and security headers
- **OpenNext Config**: `open-next.config.ts` for Cloudflare Workers adapter
- **Next.js Config**: Optimized for Cloudflare Workers with external packages configuration
- **Custom Domain**: `jtokib.com` configured with zone-level routing in Cloudflare
- **Security Headers**: Migrated from Vercel to Wrangler environment variables

### Windows Development Notes

- **Local Preview**: `npm run preview` has Windows compatibility issues
- **Deployment**: Use `npx wrangler deploy` directly for Windows compatibility
- **Build Process**: OpenNext build works correctly, deployment tool has path issues

## Content Focus

The site showcases Toki Burke's expertise in:
- Marketing Technology (Tealium, Sitecore, Google Analytics)
- AI and Cloud Platforms (Firebase, Google Cloud, ChatGPT, Claude)
- Web Development (JavaScript, React, Next.js)
- Featured project: obsf.surf (surf forecast dashboard)