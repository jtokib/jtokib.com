# Add Resume Page to jtokib.com Next.js Project

## Objective
Add a new `/resume` route to the existing jtokib.com Next.js 14 project (deployed on Cloudflare Workers) that displays a professional resume as a standalone page using proper Next.js App Router architecture.

## Architecture Overview
This implementation uses Next.js 14 App Router with proper server-side rendering, avoiding anti-patterns like CDN React loading and client-side JSX compilation.

## Requirements

### 1. Next.js App Router Implementation
- Create `app/resume/page.tsx` using Next.js App Router
- Use server component for optimal performance and SEO
- Leverage existing Next.js build system and TypeScript setup
- Maintain compatibility with @opennextjs/cloudflare adapter

### 2. Component Architecture
- Extract resume data into a proper TypeScript data model
- Create reusable, composable React components
- Transform existing toki-burke-resume.tsx from monolithic to modular structure
- Follow SOLID principles and separation of concerns

### 3. SEO and Metadata
Configure proper Next.js metadata:
- Title: "J. Toki Burke - Resume | Marketing Technologist & AI Solutions"
- Description: "Professional resume of J. Toki Burke, Marketing Technologist specializing in AI solutions for small and medium businesses. Experience at Fisher Investments and technical projects."
- Open Graph and Twitter Card properties for social sharing
- Use Next.js built-in metadata API

### 4. Styling Strategy
- Migrate from inline styles to CSS Modules or extend global CSS
- Maintain existing Anthropic brand colors (#D97706, #B45309, #FFF7ED, #FED7AA)
- Add print-optimized CSS media queries
- Ensure responsive design and accessibility (WCAG compliance)

### 5. Performance Optimization
- Server-side rendering for optimal performance
- Leverage Next.js 14 optimizations and code splitting
- Proper caching headers via Cloudflare Workers
- No external CDN dependencies for core functionality

### 6. Integration Requirements
- Update existing Navigation component to include /resume link
- Maintain consistency with existing site design and user experience
- Add print-friendly functionality and PDF export hints
- Ensure external links open in new tabs

## Implementation Structure

```
app/
├── resume/
│   ├── page.tsx              # Main resume page (Server Component)
│   ├── layout.tsx            # Resume-specific layout (optional)
│   └── components/
│       ├── ResumeView.tsx    # Main resume display component
│       ├── ResumeHeader.tsx  # Header section component
│       ├── ExperienceSection.tsx # Work experience component
│       ├── ProjectsSection.tsx   # Projects component
│       ├── SidebarSection.tsx    # Skills/education sidebar
│       ├── PrintActions.tsx      # Print functionality (Client Component)
│       └── types.ts              # TypeScript data models
├── lib/
│   └── resume-factory.ts     # Resume data factory/service
└── globals.css               # Updated with resume-specific styles
```

## Expected Deliverables
- Complete Next.js App Router implementation
- Modular, reusable React components with TypeScript
- Proper SEO metadata configuration
- Print-optimized styling
- Updated navigation integration
- Performance-optimized server-side rendering

## Additional Notes
- The resume uses Anthropic's brand colors (#D97706, #B45309, #FFF7ED, #FED7AA)
- All external links in the resume should open in new tabs
- Ensure the page is accessible and meets WCAG guidelines
- The component is designed to be responsive and print-friendly

Please provide the complete implementation with all necessary code changes to add this resume page to my existing Cloudflare Workers project.