import React from 'react';

const Resume = () => {
  const headerStyle = {
    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
    color: '#ffffff',
    padding: '40px',
    textAlign: 'center' as const
  };

  const containerStyle = {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '8.5in',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
    color: '#2c3e50'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px',
    padding: '40px'
  };

  const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '20px',
    paddingBottom: '8px',
    borderBottom: '2px solid #D97706'
  };

  const jobStyle = {
    marginBottom: '25px',
    padding: '15px',
    border: '1px solid #FED7AA',
    borderRadius: '8px'
  };

  const skillTagStyle = {
    backgroundColor: '#FFF7ED',
    color: '#D97706',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
    border: '1px solid #FED7AA',
    marginRight: '6px',
    marginBottom: '6px',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '1px' }}>
          J. Toki Burke
        </h1>
        
        <h2 style={{ fontSize: '18px', fontWeight: '300', margin: '0 0 20px 0', opacity: '0.9' }}>
          Marketing Technologist interested in unlocking AI Solutions for Small and Medium Sized Businesses
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', fontSize: '14px' }}>
          <span>San Francisco, CA 94131</span>
          <span>(415) 747-9254</span>
          <a href="mailto:jtokib@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
            jtokib@gmail.com
          </a>
          <a href="https://linkedin.com/in/toki-burke" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
            linkedin.com/in/toki-burke
          </a>
        </div>
      </div>

      <div style={gridStyle}>
        <div>
          <section style={{ marginBottom: '40px' }}>
            <h3 style={sectionTitleStyle}>Professional Experience</h3>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Marketing Technology Team Lead
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                Fisher Investments | July 2021 – Present | San Francisco, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Lead a 6-person technical team to drive marketing technology initiatives across web, mobile, and emerging digital channels
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Maintain an enterprise-scale tag management infrastructure supporting 80+ vendor configurations for client-side and server-side data collection
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Architect and deployed 25+ Conversion API (CAPI) integrations to optimize data quality for digital advertising platforms
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Manage MarTech ecosystem that includes Content Management (Sitecore), Marketing Automation (Selligent/Marigold), and Customer Data Platforms (Tealium)
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Technical business lead supporting cloud architecture migrations to Sitecore XM (Headless CMS) and Selligent Marketing Cloud platforms
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Create the data pipelines to support advanced analytics using GA4 and Google Cloud - Cloud Run + Storage + Big Query ML
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Managed a comprehensive browser automation program with 293+ browser-based tests using Ghost Inspector, reducing manual testing overhead
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Marketing Technology Program Manager
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                Fisher Investments | November 2019 – July 2021 | San Francisco, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Managed technical integrations across the full marketing technology stack, including Tealium, Sitecore, Akamai, Rackspace, and Optimizely
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Implemented server-side data collection using Tealium EventStream, integrating with Facebook CAPI, Google Ads API, and LinkedIn Ads CAPI
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Developed a comprehensive QA framework with Selenium and Puppeteer, using Mocha/Chai for robust front-end validation
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Led the technical conversion of an Excel-based financial calculator to ES6-compatible JavaScript with eCharts visualization
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Marketing Technology Analyst
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                Fisher Investments | August 2018 – November 2019 | San Francisco, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Administered Tealium iQ, managing custom tag configurations and deployment workflows as a power user
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Configured Optimizely Full Stack and Web X testing solutions, integrating with Sitecore and Contao CMS
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Optimized web performance by implementing Real User Monitoring (RUM) and synthetic monitoring tools, establishing benchmarks for TTFB and FCP
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Administered GDPR and CCPA compliance through Tealium and OneTrust across global markets
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Digital Media Specialist
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                California Institute of Integral Studies | October 2016 – August 2018 | San Francisco, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Developed alumni and students digital communications strategy
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Managed social media channels increasing follower count by 150%
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Managed social media marketing including creative design, audience targeting, and campaign management
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Conducted A/B testing to analyze user engagement across social media and web properties
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Senior Admissions Manager
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                California Institute of Integral Studies | December 2014 – October 2016 | San Francisco, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Oversaw Admissions Department operations, including inquiry, application, and decisions processing
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Developed admission policies and led new counselor onboarding programs
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Director of Financial Services
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                Comcourse | October 2012 – December 2014 | Santa Cruz, CA
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Managed partnerships with three universities to maximize efficiency in financial aid and business office operations
                </li>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Ensured compliance with FERPA, Federal Student Aid Handbook, and US Department of Education regulations
                </li>
              </ul>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0' }}>
                Assistant Language Teacher
              </h4>
              <p style={{ fontSize: '14px', color: '#D97706', margin: '2px 0 0 0', fontWeight: '500' }}>
                Japan Exchange Teaching (JET) Program | August 2008 – August 2012 | Nakijin, Japan
              </p>
              <ul style={{ marginTop: '8px', paddingLeft: '16px' }}>
                <li style={{ marginBottom: '4px', fontSize: '14px' }}>
                  Primary foreign language instructor teaching English at five elementary and junior high schools to 600+ students
                </li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h3 style={sectionTitleStyle}>Technical Projects</h3>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0 0 8px 0' }}>
                OBSF Surf – Real-time Oceanographic Data Application
              </h4>
              <a href="https://obsf.surf" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>
                obsf.surf ↗
              </a>
              <p style={{ fontSize: '14px', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                AI-Powered Analysis: Developed "Surf AI" using machine learning algorithms to analyze real-time oceanographic conditions based on 10 years of personal surf logs.
              </p>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0 0 8px 0' }}>
                TokiCoin – Blockchain Development & Tokenomics
              </h4>
              <a href="https://tokicoin.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>
                tokicoin.netlify.app ↗
              </a>
              <p style={{ fontSize: '14px', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Blockchain Integration: Developed and deployed a custom cryptocurrency token on the Algorand network.
              </p>
            </div>

            <div style={jobStyle}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#2c3e50', margin: '0 0 8px 0' }}>
                Claude Artifacts
              </h4>
              <p style={{ fontSize: '14px', margin: '8px 0 12px 0', lineHeight: '1.5' }}>
                Interactive web applications and tools built using Claude's artifact system:
              </p>
              <div style={{ marginLeft: '16px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <a href="https://claude.ai/public/artifacts/7871eefe-cbb9-42f5-a3eb-6825eaa876d9" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                    Child Safety Check ↗
                  </a>
                  <p style={{ fontSize: '12px', color: '#7f8c8d', margin: '2px 0 0 0' }}>
                    Safety assessment tool for evaluating child-friendly environments
                  </p>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <a href="https://claude.ai/public/artifacts/a0c16cc3-65a8-4e67-b9d4-bac696849531" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                    Python to TypeScript Converter ↗
                  </a>
                  <p style={{ fontSize: '12px', color: '#7f8c8d', margin: '2px 0 0 0' }}>
                    Code translation tool with type annotations
                  </p>
                </div>
                <div>
                  <a href="https://claude.ai/public/artifacts/894236c8-1a20-4aff-9096-4e39bbf033cb" target="_blank" rel="noopener noreferrer" style={{ color: '#D97706', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
                    Global Surf Resorts Finder ↗
                  </a>
                  <p style={{ fontSize: '12px', color: '#7f8c8d', margin: '2px 0 0 0' }}>
                    Interactive map for discovering surf spots worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <section style={{ marginBottom: '30px' }}>
            <h3 style={sectionTitleStyle}>Technical Skills</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#2c3e50', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Platforms
              </h4>
              <div>
                <span style={skillTagStyle}>Tealium (CDP/TMS)</span>
                <span style={skillTagStyle}>Sitecore (CMS)</span>
                <span style={skillTagStyle}>WordPress (CMS)</span>
                <span style={skillTagStyle}>Selligent/Marigold</span>
                <span style={skillTagStyle}>Google Marketing Platform</span>
                <span style={skillTagStyle}>Google Cloud</span>
                <span style={skillTagStyle}>Optimizely</span>
                <span style={skillTagStyle}>Akamai</span>
                <span style={skillTagStyle}>Vercel</span>
                <span style={skillTagStyle}>Firebase</span>
                <span style={skillTagStyle}>Atlassian (JIRA/Confluence/Bitbucket)</span>
                <span style={skillTagStyle}>Git/GitHub</span>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#2c3e50', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Development
              </h4>
              <div>
                <span style={skillTagStyle}>JavaScript (ES6+)</span>
                <span style={skillTagStyle}>Node.js</span>
                <span style={skillTagStyle}>React/Next.js</span>
                <span style={skillTagStyle}>HTML/CSS</span>
                <span style={skillTagStyle}>API Development</span>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h3 style={sectionTitleStyle}>Education</h3>
            
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#2c3e50', margin: '0 0 4px 0' }}>
                University of California, Davis
              </h4>
              <p style={{ fontSize: '13px', color: '#7f8c8d', margin: '0 0 2px 0' }}>
                BA, International Relations, Japanese
              </p>
              <p style={{ fontSize: '12px', color: '#D97706', margin: '0', fontStyle: 'italic' }}>
                UC Davis Men's Swimming and Diving Co-Captain
              </p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#2c3e50', margin: '0 0 4px 0' }}>
                City College of San Francisco
              </h4>
              <p style={{ fontSize: '13px', color: '#7f8c8d', margin: '0' }}>
                JavaScript Specialist Certificate
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#2c3e50', margin: '0 0 4px 0' }}>
                Grow with Google
              </h4>
              <p style={{ fontSize: '13px', color: '#7f8c8d', margin: '0' }}>
                Android Basics Development Certificate
              </p>
            </div>
          </section>

          <section>
            <h3 style={sectionTitleStyle}>Professional Certifications</h3>
            
            <div style={{ backgroundColor: '#FFF7ED', padding: '10px 12px', borderRadius: '6px', border: '1px solid #FED7AA' }}>
              <p style={{ fontSize: '13px', color: '#2c3e50', margin: '0 0 4px 0', fontWeight: '500' }}>
                Registered Investment Advisor - Series 65 - Investment Advisor Law
              </p>
              <a href="https://adviserinfo.sec.gov/individual/summary/7356876" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#D97706', textDecoration: 'none', fontWeight: '500' }}>
                SEC CRD#: 7356876 ↗
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;