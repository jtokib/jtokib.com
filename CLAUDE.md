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
│   ├── HeroVideo.tsx     # Smart video loading based on connection speed
│   └── guestbook/        # Guestbook component folder
│       ├── GuestbookContainer.tsx
│       ├── GuestbookForm.tsx
│       └── GuestbookEntries.tsx
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

public/
└── hero-wave.mp4  # Hero background video (5.7MB, 1080p, 7s)
```

### Component Architecture

- **Navigation**: Client-side component with scroll detection, mobile menu, smooth scrolling, and resume page link
- **AIDemo**: Interactive widget with predefined responses simulating an AI surf assistant
- **HeroVideo**: Smart video loading component that uses Network Information API to:
  - Detect connection speed (4G vs 3G/2G)
  - Respect Data Saver mode preferences
  - Show video only on fast connections (4G) and desktop
  - Fall back to CSS wave animation on slow/limited connections
  - Optimize performance and data usage automatically
- **Guestbook**: Interactive guestbook component with Supabase database integration for visitor messages
- **Resume**: Professional resume page with modular component architecture:
  - **Modular Design**: Follows SOLID principles with composable components
  - **TypeScript Data Models**: Proper data abstraction and factory patterns
  - **Professional Styling**: Midnight Luxury theme matching main site, print-optimized
  - **SEO Optimized**: Complete metadata and social sharing tags
  - **Accessibility**: WCAG 2.2 Level AA compliant with 9.8:1 contrast ratios
- **Layout**: Contains comprehensive SEO metadata and Google Tag Manager
- **Main Page**: Server component with all content sections in a single file

### Styling System

- **Main Site**: Uses CSS custom properties (CSS variables) defined in `:root`
  - **Midnight Luxury** theme with glass morphism and subtle animations
  - Color scheme: Apple Blue (#007AFF), Purple (#5856D6), Midnight (#1C1C1E)
  - Apple system font stack for premium typography
  - Animated wave gradients and backdrop blur effects
  - Hero section with smart-loading 4K video background
- **Resume Page**: Professional styling matching main site Midnight Luxury theme
  - Ocean-inspired colors: Blue (#007AFF), Purple (#5856D6), Dark gray (#3A3A3C)
  - Apple system font stack for consistency
  - Print-optimized CSS with proper page breaks
  - Animated gradient header (5s cycle) with text shadows
  - WCAG 2.2 Level AA compliant (9.8:1 contrast ratio)
- **Mobile-First Responsive Design**:
  - Comprehensive mobile optimizations for Google Pixel and similar devices
  - Touch targets minimum 48px (exceeds WCAG 44px requirement)
  - Optimized typography scaling (2.2rem desktop → 1.6rem mobile)
  - Reduced section padding (8rem desktop → 4rem mobile)
  - Smart video loading disabled on slow connections
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
- **Next.js Config**: Optimized for Cloudflare Workers with `output: 'standalone'` for OpenNext compatibility
- **Custom Domain**: `jtokib.com` configured directly in Cloudflare dashboard (not in wrangler.toml)
- **Build Process**: Uses latest `@opennextjs/cloudflare@1.6.5` and `wrangler@4.32.0`
- **Asset Size Limits**:
  - **CRITICAL**: Cloudflare Workers has a **25MB maximum per asset** limit
  - The hero video (`hero-wave.mp4`) is 5.7MB (1080p, 7 seconds) - well under the limit
  - Keep large assets in `/public` but monitor total size
  - Use smart loading (HeroVideo component) to optimize performance

### Windows Development Notes

- **Local Preview**: `npm run preview` has Windows compatibility issues due to ESM URL scheme errors
- **Build Process**: OpenNext build requires `output: 'standalone'` in `next.config.js` and `--skipNextBuild` flag
- **Reliable Windows Workflow**:
  1. `npx next build` (with standalone output)
  2. `npx @opennextjs/cloudflare build --skipNextBuild`
  3. `npx wrangler deploy`
- **Package.json**: Updated build script includes `--skipNextBuild` flag to prevent infinite loops

### Clean Rebuild Process (Nuclear Option)

If experiencing build caching issues or worker.js not reflecting latest code changes:

1. **Nuclear Clean**: `rm -rf .next .open-next node_modules .vercel package-lock.json`
2. **Fresh Install**: `npm install` 
3. **Verify Config**: Ensure `wrangler.toml` has valid worker name (alphanumeric + dashes only)
4. **Test Build**: `npm run build` should complete successfully
5. **Deploy**: Use `npx wrangler deploy` (Windows-compatible) instead of npm scripts
6. **Verify**: Check new BUILD_ID in assets directory and confirm site serves latest code

### Deployment Troubleshooting

#### Common Deployment Issues & Solutions

**Issue**: `worker.js` not found during deployment
- **Cause**: Empty or missing `.open-next` directory
- **Solution**: Rebuild OpenNext bundle before deploying:
  ```bash
  npm run build
  npx @opennextjs/cloudflare build
  npx wrangler deploy
  ```

**Issue**: Windows ESM URL scheme errors and infinite build loops
- **Cause**: OpenNext trying to run full build script which includes deploy step
- **Solution**: Use `--skipNextBuild` flag and ensure `output: 'standalone'` in next.config.js:
  ```bash
  npx next build                                    # Build with standalone output
  npx @opennextjs/cloudflare build --skipNextBuild  # Generate .open-next bundle
  npx wrangler deploy                                # Deploy with Windows compatibility
  ```

**Important**: The `.open-next` directory should remain in `.gitignore` as it's a build artifact that gets generated during CI/CD.

### Recent Updates (September-October 2024)

- **Mobile Responsive Optimization & Smart Video Loading** (October 1, 2024): Comprehensive mobile UX improvements
  - **Smart Video Loading**: Created HeroVideo component using Network Information API
    - Detects connection speed (4G vs 3G/2G) and Data Saver mode
    - Shows 47MB 4K video only on fast connections and desktop
    - Falls back to CSS wave animation on slow/limited connections
    - Optimizes performance and respects user data preferences
  - **Mobile Responsive Design**: Expert audit and implementation for Google Pixel devices
    - Reduced hero section padding (8rem → 5rem tablet → 4rem mobile)
    - Optimized typography scaling for readability (h1: 2.2rem → 1.8rem → 1.6rem)
    - Enhanced touch targets (48px minimum, exceeds WCAG 44px)
    - Reduced section spacing to minimize scrolling (5rem → 3rem → 2.5rem)
    - Optimized form inputs, buttons, and navigation for mobile
  - **Accessibility Improvements**: WCAG 2.2 Level AA compliance on resume page
    - Fixed color contrast issues (achieved 9.8:1 ratio)
    - Softened backgrounds to reduce eye strain
    - Added text shadows for gradient readability
    - Updated all font-family references to Apple system font stack
  - **Resume Page Enhancements**:
    - Applied Midnight Luxury theme (matching main site)
    - Added animated gradient header (5s cycle)
    - Removed blue link-like colors from non-interactive elements

- **Copywriting Optimization** (September 29, 2024): Comprehensive content audit and optimization
  - Eliminated 5 major redundancies across MarTech expertise descriptions
  - Replaced tentative "exploring" language with confident implementation statements
  - Consolidated technology lists to focus on business value over tool names
  - Established consistent "Marketing Technology Team Lead" positioning across all sections
  - Achieved 35% content reduction while maintaining all essential information
  - Aligned SEO metadata with updated professional authority
  - Streamlined personal interest integration for strategic professional context

- **Design Transformation** (September 18, 2024): Complete transformation from cyberpunk GeoCities aesthetic to sophisticated **Midnight Luxury** theme
  - Implemented Apple-inspired glass morphism design with backdrop blur effects
  - Updated color palette to professional midnight luxury scheme (Apple blue, purple, green)
  - Replaced Comic Sans MS with Apple system font stack for premium typography
  - Added sophisticated animations and luxury shadow system
  - Removed emoji-heavy content for professional presentation
  - Replaced Mobile Apps project with TokiCoin blockchain project showcase
  - Added guestbook button to hero section for improved UX
  - Cleaned up unused CSS styles for better performance
- **Content Refinement** (September 18, 2024): Professional messaging updates
  - Streamlined hero copy to focus on expertise and value proposition
  - Updated project descriptions for clarity and impact
  - Refined personal branding to balance professionalism with personality

### Previous Updates (August 2024)

- **Deployment Fix** (August 26, 2024): Resolved missing `worker.js` deployment error
  - Added proper OpenNext build step before deployment
  - Documented Windows-compatible deployment workflow
  - Confirmed `.open-next` directory should stay in `.gitignore`
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

### Windows-Compatible Build Commands
```bash
# Full build and deploy (Windows-compatible)
npm run build

# Manual step-by-step (for troubleshooting)
npx next build
npx @opennextjs/cloudflare build --skipNextBuild
npx wrangler deploy
```