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
│   ├── Navigation.tsx    # Smooth scrolling nav with mobile menu + resume link
│   ├── AIDemo.tsx        # Interactive demo with simulated responses
│   └── Guestbook.tsx     # Interactive guestbook with Supabase integration
├── resume/               # Professional resume page with modular architecture
│   ├── components/       # Reusable resume components
│   │   ├── types.ts      # TypeScript data models for resume
│   │   ├── ResumeView.tsx        # Main resume display component
│   │   ├── ResumeHeader.tsx      # Header with contact info
│   │   ├── ExperienceSection.tsx # Work experience component
│   │   ├── ProjectsSection.tsx   # Technical projects component
│   │   └── SidebarSection.tsx    # Skills/education sidebar
│   ├── lib/
│   │   └── resume-factory.ts     # Resume data factory/service
│   └── page.tsx          # Resume page with SEO metadata
├── api/
│   └── guestbook/
│       └── route.ts      # Supabase API integration for guestbook
├── globals.css           # All styles + professional resume CSS
├── layout.tsx            # SEO metadata, fonts, analytics setup
└── page.tsx              # Main page content (hero, about, projects, contact, guestbook)
```

### Component Architecture

- **Navigation**: Client-side component with scroll detection, mobile menu, smooth scrolling, and resume page link
- **AIDemo**: Interactive widget with predefined responses simulating an AI surf assistant
- **Guestbook**: Interactive guestbook component with Supabase database integration for visitor messages
- **Resume**: Professional resume page with modular component architecture:
  - **Modular Design**: Follows SOLID principles with composable components
  - **TypeScript Data Models**: Proper data abstraction and factory patterns
  - **Professional Styling**: Anthropic brand colors, print-optimized, separate from main site theme
  - **SEO Optimized**: Complete metadata and social sharing tags
- **Layout**: Contains comprehensive SEO metadata and Google Tag Manager
- **Main Page**: Server component with all content sections in a single file

### Styling System

- **Main Site**: Uses CSS custom properties (CSS variables) defined in `:root`
  - 90s GeoCities retro theme with animations and rainbow effects
  - Color scheme: Hot Pink (#FF1493), Lime Green (#00DD00), Gold (#FFD700)
  - Comic Sans MS font for playful aesthetic
- **Resume Page**: Professional styling completely separate from main site
  - Anthropic brand colors: Orange (#D97706), Brown (#B45309), Cream (#FFF7ED)
  - Segoe UI font for professional appearance
  - Print-optimized CSS with proper page breaks
  - No animations or effects for professional presentation
- Mobile-first responsive design across both themes
- Consistent spacing and typography scale
- Box shadows and border radius defined as variables

### External Integrations

- **Google Tag Manager**: Embedded script in layout with GTM-TM7DV4L ID for analytics
- **Inter Font**: Google Fonts integration via Next.js font optimization
- **Supabase**: Database integration for guestbook functionality via `@supabase/supabase-js`
- **Static Assets**: Comprehensive favicon set and PWA manifest in `/public`
- **Cloudflare Workers**: Edge computing platform for optimal global performance

### Deployment Configuration

- **Wrangler Config**: `wrangler.toml` with simplified configuration for reliable deployment
- **OpenNext Config**: `open-next.config.ts` for Cloudflare Workers adapter configuration
- **Next.js Config**: Optimized for Cloudflare Workers with external packages configuration
- **Custom Domain**: `jtokib.com` configured directly in Cloudflare dashboard (not in wrangler.toml)
- **Build Process**: Uses latest `@opennextjs/cloudflare@1.6.5` and `wrangler@4.32.0`

### Windows Development Notes

- **Local Preview**: `npm run preview` has Windows compatibility issues due to ESM URL scheme errors
- **Deployment**: Use `npx wrangler deploy` directly for Windows compatibility - the npm script approach fails
- **Build Process**: OpenNext build works correctly, but preview/deploy scripts have Windows path issues

### Clean Rebuild Process (Nuclear Option)

If experiencing build caching issues or worker.js not reflecting latest code changes:

1. **Nuclear Clean**: `rm -rf .next .open-next node_modules .vercel package-lock.json`
2. **Fresh Install**: `npm install` 
3. **Verify Config**: Ensure `wrangler.toml` has valid worker name (alphanumeric + dashes only)
4. **Test Build**: `npm run build` should complete successfully
5. **Deploy**: Use `npx wrangler deploy` (Windows-compatible) instead of npm scripts
6. **Verify**: Check new BUILD_ID in assets directory and confirm site serves latest code

### Recent Updates (August 2024)

- **Complete Cloudflare Workers Rebuild** (August 25, 2024): Nuclear clean and rebuild of entire deployment pipeline
  - Removed all Vercel configuration remnants and build artifacts
  - Fresh installation of `@opennextjs/cloudflare@1.6.5` and `wrangler@4.32.0`
  - Simplified `wrangler.toml` configuration without custom routes (configured in Cloudflare dashboard)
  - Clean `package.json` scripts optimized for Cloudflare Workers
  - Added `open-next.config.ts` for proper OpenNext configuration
  - Resolved worker.js caching issues - deployments now reflect latest code changes
- **Resume Page**: Added professional `/resume` route with modular Next.js App Router architecture
- **File Cleanup**: Moved implementation prompts to `/.claude/` directory  
- **Print Functionality**: Removed custom print component in favor of browser's native print functionality

## Content Focus

The site showcases Toki Burke's expertise in:
- Marketing Technology (Tealium, Sitecore, Google Analytics)
- AI and Cloud Platforms (Firebase, Google Cloud, ChatGPT, Claude)
- Web Development (JavaScript, React, Next.js)
- Featured project: obsf.surf (surf forecast dashboard)

## Important Development Guidelines - CRITICAL

### File Creation Rules
- **NEVER create files unless absolutely necessary for the current task**
- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER refactor working code without explicit user request**
- **NEVER create "improved" versions of existing working files**

### Architecture Guidelines  
- **AVOID enterprise patterns (factories, services, repositories) for simple use cases**
- **Prefer simple direct implementations over complex architectures**
- **Don't add abstraction layers unless managing 5+ related files**
- **One feature should = minimal files needed**

### Quality Control
- **ALWAYS test builds immediately after creating/modifying files**  
- **Remove unused files immediately rather than trying to fix them**
- **If you create utilities/helpers, ensure they are actually imported and used**
- **Flag and remove dead code rather than improving it**

### Development Principle
**"Working > Perfect"** - Simple solutions that work are preferred over complex solutions that might be more "correct" architecturally.