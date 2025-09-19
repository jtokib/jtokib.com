import { ResumeData } from '../components/types';

export function createResumeData(): ResumeData {
  return {
    personal: {
      name: "J. Toki Burke",
      title: "Marketing Technologist interested in unlocking AI Solutions for Small and Medium Sized Businesses",
      location: "San Francisco, CA 94131",
      phone: "(415) 747-9254",
      email: "jtokib@gmail.com",
      linkedin: "https://linkedin.com/in/toki-burke"
    },
    experience: [
      {
        title: "Marketing Technology Group Manager",
        company: "Fisher Investments",
        duration: "July 2021 – Present",
        location: "San Francisco, CA",
        responsibilities: [
          "Lead a technical team driving marketing technology initiatives across web, mobile, and emerging digital channels",
          "Develop and maintain the technology roadmap, setting project and development priorities, while leading the evaluation and onboarding of new technologies.",
          "Manage MarTech integrations across Customer Data Platform and Tag Management Systems (Tealium),Content Management System(Sitecore), Marketing Automation Platform(Selligent), Analytics(GA4 + Google BigQuery), and Data Management Platforms(Redpoint Global).",
          "Serve as technical business lead for cloud architecture migrations to Sitecore XM (Headless CMS) and Selligent Marketing Cloud platforms.",
          "Managed a comprehensive browser automation program with 293+ browser-based tests using Ghost Inspector, reducing manual testing overhead"
        ]
      },
      {
        title: "Marketing Technology Program Manager",
        company: "Fisher Investments",
        duration: "November 2019 – July 2021",
        location: "San Francisco, CA",
        responsibilities: [
          "Managed technical integrations across the full marketing technology stack, including Tealium, Sitecore, Akamai, Rackspace, and Optimizely",
          "Implemented server-side data collection using Tealium EventStream, integrating with Facebook CAPI, Google Ads API, and LinkedIn Ads CAPI",
          "Developed a comprehensive QA framework with Selenium and Puppeteer, using Mocha/Chai for robust front-end validation",
          "Led the technical conversion of an Excel-based financial calculator to ES6-compatible JavaScript with eCharts visualization"
        ]
      },
      {
        title: "Marketing Technology Analyst",
        company: "Fisher Investments",
        duration: "August 2018 – November 2019",
        location: "San Francisco, CA",
        responsibilities: [
          "Administered Tealium iQ, managing custom tag configurations and deployment workflows as a power user",
          "Configured Optimizely Full Stack and Web X testing solutions, integrating with Sitecore and Contao CMS",
          "Optimized web performance by implementing Real User Monitoring (RUM) and synthetic monitoring tools, establishing benchmarks for TTFB and FCP",
          "Administered GDPR and CCPA compliance through Tealium and OneTrust across global markets"
        ]
      },
      {
        title: "Digital Marketing and Communications Manager",
        company: "California Institute of Integral Studies",
        duration: "October 2016 – August 2018",
        location: "San Francisco, CA",
        responsibilities: [
          "Developed a comprehensive digital marketing & communications strategy",
          "Managed social media marketing including creative design, audience targeting, and campaign management",
        ]
      },
      {
        title: "Senior Admissions Manager",
        company: "California Institute of Integral Studies",
        duration: "December 2014 – October 2016",
        location: "San Francisco, CA",
        responsibilities: [
          "Oversaw Admissions Department operations, including inquiry, application, and decisions processing",
          "Developed admission policies and led new counselor onboarding programs"
        ]
      },
      {
        title: "Director of Financial Services",
        company: "Comcourse",
        duration: "October 2012 – December 2014",
        location: "Santa Cruz, CA",
        responsibilities: [
          "Managed partnerships with three universities to maximize efficiency in financial aid and business office operations",
          "Ensured compliance with FERPA, Federal Student Aid Handbook, and US Department of Education regulations"
        ]
      },
      {
        title: "Assistant Language Teacher",
        company: "Japan Exchange Teaching (JET) Program",
        duration: "August 2008 – August 2012",
        location: "Nakijin, Japan",
        responsibilities: [
          "Primary foreign language instructor teaching English at five elementary and junior high schools to 600+ students"
        ]
      }
    ],
    projects: [
      {
        title: "OBSF Surf – Real-time Oceanographic Data Application",
        url: "https://obsf.surf",
        description: "AI-Powered Analysis: Developed \"Surf AI\" using machine learning algorithms to analyze real-time oceanographic conditions based on 10 years of personal surf logs."
      },
      {
        title: "TokiCoin – Blockchain Development & Tokenomics",
        url: "https://tokicoin.netlify.app",
        description: "Blockchain Integration: Developed and deployed a custom cryptocurrency token on the Algorand network."
      },
      {
        title: "Claude Artifacts",
        description: "Interactive web applications and tools built using Claude's artifact system:",
        subProjects: [
          {
            title: "Child Safety Check",
            url: "https://claude.ai/public/artifacts/7871eefe-cbb9-42f5-a3eb-6825eaa876d9",
            description: "Safety assessment tool for evaluating child-friendly environments"
          },
          {
            title: "Python to TypeScript Converter",
            url: "https://claude.ai/public/artifacts/a0c16cc3-65a8-4e67-b9d4-bac696849531",
            description: "Code translation tool with type annotations"
          },
          {
            title: "Global Surf Resorts Finder",
            url: "https://claude.ai/public/artifacts/894236c8-1a20-4aff-9096-4e39bbf033cb",
            description: "Interactive map for discovering surf spots worldwide"
          },
          {
            title: "Japanese Furigana Helper",
            url: "https://claude.ai/public/artifacts/da2182c2-995d-428b-97b3-6aaa45709ca0",
            description: "An app that adds furigana (phonetic reading aids) to Japanese text"
          },
          {
            title: "Prompt MadLibs",
            url: "https://claude.ai/public/artifacts/c68a8383-7d78-4d31-94ea-a09e68f7aef9",
            description: "An app that helps create fun and engaging prompts for AI models"
          },
        ]
      }
    ],
    skills: [
      {
        category: "Platforms",
        skills: [
          "Tealium (CDP/TMS)", "Sitecore (CMS)", "WordPress (CMS)", "Selligent/Marigold",
          "Google Marketing Platform", "Google Cloud", "Optimizely", "Cloudflare","Akamai", "Vercel", 
          "Firebase", "Atlassian (JIRA/Confluence/Bitbucket)", "Git/GitHub"
        ]
      },
      {
        category: "Development",
        skills: [
          "JavaScript (ES6+)", "Node.js", "React/Next.js", "HTML/CSS", "API Development"
        ]
      }
    ],
    education: [
      {
        institution: "University of California, Davis",
        degree: "BA, International Relations, Japanese",
        details: "UC Davis Men's Swimming and Diving Co-Captain"
      },
      {
        institution: "City College of San Francisco",
        degree: "JavaScript Specialist Certificate"
      },
      {
        institution: "Grow with Google",
        degree: "Android Basics Development Certificate"
      }
    ],
    certifications: [
      {
        name: "Registered Investment Advisor - Series 65 - Investment Advisor Law",
        url: "https://adviserinfo.sec.gov/individual/summary/7356876",
        credential: "SEC CRD#: 7356876"
      }
    ]
  };
}