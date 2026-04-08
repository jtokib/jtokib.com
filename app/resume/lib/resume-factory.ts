import { ResumeData } from '../components/types';

export function createResumeData(): ResumeData {
  return {
    personal: {
      name: "J. Toki Burke",
      title: "Associate Vice President, Marketing Technology",
      location: "San Francisco, CA 94131",
      phone: "(415) 747-9254",
      email: "jtokib@gmail.com",
      linkedin: "https://linkedin.com/in/toki-burke"
    },
    experience: [
      {
        title: "Associate Vice President, Marketing Technology",
        company: "Fisher Investments",
        duration: "January 2026 – Present",
        location: "San Francisco, CA",
        responsibilities: [
          "Lead technical operations team driving marketing technology initiatives across web, mobile, and digital channels for global enterprise operations spanning EMEA, APAC, and LATAM markets",
          "Architect cloud-native solutions spanning Content Management (Sitecore XM Cloud), Marketing Automation (Selligent/Marigold), and Customer Data Platforms (Tealium CDP)",
          "Maintain enterprise-scale tag management infrastructure supporting 36+ vendor configurations for client-side and server-side data collection, including 25+ Conversion API integrations optimizing data quality for digital advertising platforms",
          "Deploy identity resolution solutions (Horizon BluID, LiveRamp eCST/ATS) and maintain GA4 + BigQuery ML data pipelines for advanced measurement",
          "Drive API strategy and integrations across marketing automation, analytics, and advertising platforms; led migration of SMS/MMS integrations from SOAP to REST architecture"
        ]
      },
      {
        title: "Marketing Technology Group Manager",
        company: "Fisher Investments",
        duration: "July 2021 – January 2026",
        location: "San Francisco, CA",
        responsibilities: [
          "Managed technical team implementing marketing technology across global operations; architected tag governance infrastructure handling GDPR (opt-in) and CCPA/CPRA (opt-out) consent models with Global Privacy Control (GPC) support",
          "Implemented comprehensive QA automation framework with 293+ browser-based tests using Ghost Inspector, reducing manual testing overhead by 80%",
          "Served as technical business lead for cloud architecture migrations to Sitecore XM Cloud and Selligent Marketing Cloud platforms",
          "Developed technology roadmap and evaluation criteria for platform adoption, balancing innovation with compliance requirements across multiple regulatory frameworks",
          "Administered Atlassian suite (JIRA/Confluence) with custom issue types, workflows, and automation schemes for cross-functional engineering and marketing teams"
        ]
      },
      {
        title: "Marketing Technology Program Manager",
        company: "Fisher Investments",
        duration: "November 2019 – July 2021",
        location: "San Francisco, CA",
        responsibilities: [
          "Managed technical integrations across enterprise MarTech stack (Tealium, Sitecore, Akamai, Rackspace, Optimizely) supporting multi-region lead generation and performance marketing",
          "Onboarded Tealium EventStream for server-side data collection; implemented Facebook CAPI, Google Ads API, and LinkedIn CAPI integrations maintaining attribution integrity within consent constraints",
          "Built comprehensive QA automation framework using Selenium and Puppeteer with Mocha/Chai for front-end validation and custom data layer verification; developed Node.js scripts for data processing and platform automation",
          "Led technical conversion of Excel-based retirement calculator to production-ready ES6 JavaScript with eCharts data visualization"
        ]
      },
      {
        title: "Marketing Technology Analyst",
        company: "Fisher Investments",
        duration: "August 2018 – November 2019",
        location: "San Francisco, CA",
        responsibilities: [
          "Administered global privacy compliance across EMEA, APAC, and LATAM markets using Tealium iQ and OneTrust, implementing GDPR (opt-in) and CCPA (opt-out) consent frameworks with region-specific tag governance",
          "Managed Tealium iQ tag management configurations and deployment workflows, including custom JavaScript extensions and data layer standardization",
          "Configured Optimizely Full Stack and Web Experimentation platforms, integrating with Sitecore and Contao CMS for multivariate testing",
          "Optimized web performance using Real User Monitoring (RUM) and synthetic monitoring, establishing performance benchmarks for Time to First Byte (TTFB) and First Contentful Paint (FCP)"
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
        description: "Developed \"Surf AI\" system analyzing real-time oceanographic conditions using machine learning trained on 13 years of personal surf logs (2012–2025). Built API pipeline consuming live feeds from CDIP buoy networks and NOAA weather services, with a full-stack responsive dashboard for real-time data and predictive analytics."
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
        category: "Specializations",
        skills: [
          "Global Privacy Compliance (GDPR, CCPA/CPRA, Global Privacy Control)",
          "Tag Governance & Consent Management (OneTrust, Tealium Privacy Manager)",
          "Server-Side Data Collection (Facebook CAPI, Google Ads API, LinkedIn CAPI)",
          "Multi-Region Marketing Infrastructure (EMEA, APAC, LATAM)"
        ]
      },
      {
        category: "Platforms",
        skills: [
          "Tealium (CDP/TMS)", "Sitecore (CMS)", "WordPress (CMS)", "Selligent/Marigold",
          "Google Marketing Platform", "Google Cloud", "Optimizely", "OneTrust (CMP)",
          "Cloudflare", "Akamai", "Vercel", "Firebase", "Atlassian (JIRA/Confluence/Bitbucket)", "Git/GitHub"
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