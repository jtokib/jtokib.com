# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Start production server (after build)
npm start

# Run linting
npm run lint
```

## Project Architecture

This is a **personal portfolio website** for Toki Burke, built as a **Next.js 14** application configured for **static site generation**. The site is deployed on Vercel with static export capabilities.

### Key Architecture Decisions

- **Static Export**: Configured with `output: 'export'` in `next.config.js` for static site generation
- **Single Page Application**: All content lives in one page (`app/page.tsx`) with smooth scrolling navigation
- **Client-Side Components**: Navigation and AI Demo use `'use client'` directive for interactivity
- **CSS Modules Approach**: Global CSS in `app/globals.css` with CSS custom properties for theming
- **SEO Optimized**: Comprehensive metadata configuration in `app/layout.tsx`

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

- **Vercel Analytics**: Integrated via `@vercel/analytics/react`
- **Google Tag Manager**: Embedded script in layout with GTM-TM7DV4L ID
- **Inter Font**: Google Fonts integration via Next.js font optimization
- **Supabase**: Database integration for guestbook functionality via `@supabase/supabase-js`
- **Static Assets**: Comprehensive favicon set and PWA manifest in `/public`

### Deployment Configuration

- **Next.js Config**: Static export with unoptimized images and trailing slashes
- **Vercel Config**: Security headers, redirects, and build configuration
- **Domain**: Uses CNAME file for custom domain (jtokib.com)

## Content Focus

The site showcases Toki Burke's expertise in:
- Marketing Technology (Tealium, Sitecore, Google Analytics)
- AI and Cloud Platforms (Firebase, Google Cloud, ChatGPT, Claude)
- Web Development (JavaScript, React, Next.js)
- Featured project: obsf.surf (surf forecast dashboard)