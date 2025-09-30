# Toki Burke - Personal Portfolio

A sophisticated, responsive portfolio website built with Next.js 14 and TypeScript, featuring a **Midnight Luxury** design theme with Apple-inspired glass morphism aesthetics. Showcases expertise as a **Marketing Technology Team Lead** with 5+ years implementing enterprise MarTech solutions and analytics infrastructure.

## Migration History

This portfolio has evolved through multiple deployment platforms, demonstrating platform migration expertise:

1. **GitHub Pages (2020)** → Initial static deployment with Jekyll
2. **Vercel (2025)** → Migration to Next.js with static site generation and Vercel Analytics
3. **Cloudflare Workers (2025)** → Latest migration leveraging edge computing with OpenNext adapter

Each migration improved performance, scalability, and development experience while maintaining zero downtime.

## Features

- 🚀 **Modern Stack**: Next.js 14, TypeScript, modular component architecture
- 📱 **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- 🤖 **AI Demo**: Interactive surf condition assistant showcasing AI integration
- 📝 **Interactive Guestbook**: Visitor messaging system with Supabase database integration
- 🎨 **Midnight Luxury Design**: Sophisticated glass morphism with Apple-inspired aesthetics and premium animations
- ⚡ **Performance Optimized**: Edge computing with Cloudflare Workers and security headers
- 📊 **Analytics**: Google Tag Manager integration for comprehensive tracking
- 🔍 **SEO Optimized**: Comprehensive meta tags, structured data, and Open Graph
- 🔒 **Security**: No exposed API keys, security headers, safe deployment practices

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Database**: Supabase for guestbook functionality
- **Styling**: Midnight Luxury theme with glass morphism, Apple system fonts, premium animations
- **Deployment**: Cloudflare Workers with OpenNext adapter
- **Edge Computing**: Global edge network for optimal performance
- **Analytics**: Google Tag Manager with comprehensive tracking
- **Fonts**: Inter font family optimized from Google Fonts
- **Architecture**: Modular components, reusable patterns, security-first approach

## Sections

- **Hero**: Introduction with key skills and call-to-actions
- **About**: Professional background and personal interests
- **Projects**: Featured work including obsf.surf and TokiCoin blockchain project
- **AI Demo**: Interactive demonstration of AI capabilities
- **Guestbook**: Interactive visitor messaging system
- **Contact**: Social links and contact information

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview with Cloudflare Workers runtime (Note: Windows compatibility issues)
npm run preview

# Generate Cloudflare Worker types
npm run cf-typegen
```

## Deployment

This site is deployed on Cloudflare Workers with custom domain routing:

### Cloudflare Workers Deployment
```bash
# Build and deploy to Cloudflare Workers (Windows-compatible)
npm run build

# Manual deployment steps (for troubleshooting)
npx next build
npx @opennextjs/cloudflare build --skipNextBuild
npx wrangler deploy
```

### Domain Configuration
- **Custom Domain**: jtokib.com (configured in `wrangler.toml`)
- **Edge Network**: Global Cloudflare edge locations
- **Security Headers**: Migrated from Vercel to Wrangler configuration

### Migration Notes
- **Windows Compatibility**: Requires `output: 'standalone'` in next.config.js and `--skipNextBuild` flag
- **Windows Deployment Process**:
  1. `npx next build` (with standalone output)
  2. `npx @opennextjs/cloudflare build --skipNextBuild`
  3. `npx wrangler deploy`
- **Environment Variables**: Security headers configured in `wrangler.toml`
- **Build Process**: OpenNext adapter converts Next.js to Cloudflare Workers format

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Main navigation
│   │   ├── AIDemo.tsx      # AI demonstration widget
│   │   └── Guestbook.tsx   # Interactive guestbook component
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx           # Main page content
├── public/                 # Static assets
│   ├── favicon files      # Generated favicon set
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── wrangler.toml          # Cloudflare Workers configuration
└── open-next.config.ts    # OpenNext adapter configuration
```

## Features in Detail

### AI Demo
Interactive demonstration showcasing how I combine AI with domain expertise, featuring a surf condition assistant trained on Ocean Beach data.

### Interactive Guestbook
Visitor messaging system powered by Supabase, allowing guests to leave messages and view previous entries with real-time updates.

### Responsive Design
Mobile-first design that works perfectly across all device sizes, from mobile phones to large desktop screens.

### Performance
- Edge computing with Cloudflare Workers for global performance
- Optimized images and fonts
- Minimal JavaScript bundle size
- Static assets served from edge locations worldwide

### SEO
- Comprehensive meta tags
- Structured data markup
- Optimized sitemap and robots.txt
- Open Graph and Twitter Card support

## Technical Expertise Highlighted

- **Cloud Platforms**: Google Firebase, Google Cloud, Supabase
- **Development Tools**: GitHub, Cloudflare Workers, Vercel, Lovable, Claude Code
- **AI Platforms**: ChatGPT, Meta AI, AI-driven automation
- **Marketing Technology**: Tealium, Sitecore, WordPress, Wix
- **Analytics & Tracking**: Google Analytics, Facebook CAPI, Google Tag Manager
- **Infrastructure**: Akamai, Cloudflare, Rackspace
- **Languages**: HTML, CSS, JavaScript, TypeScript, Java (Android development)
- **Database**: Supabase, real-time data integration

## Personal Interests Featured

- 🏄‍♂️ **Pacific Ocean Surfing**: WA, OR, CA, HI, Okinawa, Peru, New Zealand
- 🔧 **Surfboard Repair**: Meditative hobby between coding sessions
- 🌿 **California Native Plants**: Ceanothus varieties and Ray Hartman cultivation
- 🏠 **Precision Craftsmanship**: Custom bathroom tiling with handmade templates

## Contact

- **LinkedIn**: [toki-burke](https://www.linkedin.com/in/toki-burke)
- **GitHub**: [jtokib](https://github.com/jtokib)
- **Website**: [obsf.surf](https://obsf.surf)
- **Email**: jtokib@gmail.com

---

Built with modern web technologies, AI assistance, and ☕ by Toki Burke