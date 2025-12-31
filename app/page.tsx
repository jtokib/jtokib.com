import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'
import GuestbookContainer from './components/guestbook/GuestbookContainer'
import HeroVideo from './components/HeroVideo'

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <section id="home" className="hero">
          <HeroVideo />
          <div className="hero-content block-dark">
            <h1>WELCOME TO <span className="highlight">TOKI&apos;S</span> DIGITAL PORTFOLIO</h1>
            <p className="hero-description">
              I help build marketing and advertising technology stacks that works across continents, consent models, and compliance frameworks—turning global privacy complexity into competitive advantage for enterprise brands.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#ai-demo" className="btn btn-secondary">Try AI Demo</a>
              <a href="#guestbook" className="btn btn-secondary">Sign Guestbook</a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  For the last seven years I&apos;ve helped build marketing technology infrastructure that most teams don&apos;t realize is hard until they try it themselves:
                </p>
                <ul className="about-highlights">
                  <li>Tag governance that handles both opt-in (GDPR) and opt-out (CCPA) consent models across EMEA, APAC, and LATAM</li>
                  <li>Server-side implementations that respect Global Privacy Control while maintaining attribution integrity</li>
                  <li>Lead generation funnels where precision isn&apos;t optional and compliance isn&apos;t negotiable</li>
                  <li>Measurement systems that turn privacy constraints into better data—because when you&apos;re optimizing for performance marketing at a global financial services brand, &quot;we think it&apos;s working&quot; doesn&apos;t cut it</li>
                </ul>
                <br />
                <p>
                  Whether I&apos;m forecasting Ocean Beach surf conditions or building cross-region analytics infrastructure, it&apos;s the same skillset: finding reliable patterns in complex systems, then making them work for humans.
                </p>
              </div>
              <div className="about-sidebar">
                <div className="fun-facts">
                  <h3>Personal Notes</h3>
                  <ul>
                    <li>Blends functionality with thoughtful design</li>
                    <li>Dog walks double as brainstorming sessions</li>
                    <li>Appreciates both cutting-edge tools and web history</li>
                    <li>Values clean, accessible design principles</li>
                    <li>Perpetual learner and technology explorer</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="skills">
              <h3>Skills &amp; Expertise</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <span className="skill-icon"></span>
                  <h4>MarTech &amp; Ad Tech</h4>
                  <p>Seven years deep in enterprise tag management (Tealium CDP/iQ), building server-side data collection with Facebook CAPI, Google Ads API, and LinkedIn CAPI integrations. I specialize in the unglamorous-but-critical work: tag governance across global consent models, GA4 + BigQuery analytics pipelines, and performance optimization for sites handling millions of visitors. My superpower? Making compliance architecture feel invisible to users while giving marketers clean attribution data they can actually trust.</p>
                </div>
                <div className="skill-item">
                  <span className="skill-icon"></span>
                  <h4>AI &amp; Cloud Platforms</h4>
                  <p>Currently exploring what happens when you combine AI models with real user problems: Claude API integrations for document intelligence, Firebase + Supabase backends powering real-time applications, and GPT-4 implementations that actually solve workflows instead of just sounding clever. I&apos;m less interested in &quot;AI-powered&quot; marketing speak, more interested in shipping tools that make someone&apos;s Tuesday easier—like obsf.surf&apos;s AI surf analysis trained on a decade of my own session logs.</p>
                </div>
                <div className="skill-item">
                  <span className="skill-icon"></span>
                  <h4>Web Development &amp; Infrastructure</h4>
                  <p>JavaScript (ES6+), React/Next.js, and the HTML/CSS fundamentals that never go out of style. I&apos;ve deployed projects across Vercel, Cloudflare Workers, and Akamai CDN configurations, debugged performance bottlenecks with Real User Monitoring, and built QA frameworks with Selenium and Puppeteer. My philosophy: make it fast, make it accessible, make it work on someone&apos;s janky corporate laptop—then optimize from there.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img
                    src="/images/obsf-surf-preview.webp"
                    alt="Ocean Beach Surf Forecast Dashboard Interface"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>obsf.surf - Ocean Beach Surf Forecast</h3>
                    <div className="project-status">Live</div>
                  </div>
                  <div className="project-description">
                    <p>
                      Ocean Beach is notoriously fickle—most surf forecasts treat it like any other break, which means they&apos;re wrong half the time. After a decade of logging sessions and watching patterns, I built obsf.surf to consolidate buoy data, tide charts, wind models, and webcam feeds into one dashboard that actually understands this specific stretch of coastline. Added &quot;Surf AI&quot; trained on my own session logs to translate raw oceanographic data into &quot;should I paddle out or go to work?&quot; recommendations. Turns out building measurement systems for unpredictable conditions is the same whether you&apos;re forecasting swells or optimizing marketing funnels.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">Real-time Data</span>
                      <span className="tech-tag">AI Analysis</span>
                      <span className="tech-tag">Pattern Recognition</span>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href="https://obsf.surf" target="_blank" rel="noopener" className="btn btn-primary">Visit Site</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <img
                    src="/images/tokicoin-preview.webp"
                    alt="TokiCoin Algorand Token Interface"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>TokiCoin - Algorand Standard Asset</h3>
                    <div className="project-status">Deployed</div>
                  </div>
                  <div className="project-description">
                    <p>
                      Built a custom token on Algorand to understand blockchain infrastructure from the inside—wallet integrations, transaction mechanics, smart contract deployment on a high-performance network. TokiCoin taught me that decentralized systems require a different mental model than traditional web architecture: immutability means you better get it right the first time, and &quot;trustless&quot; doesn&apos;t mean simpler. The tokenomics exercise was fascinating, but the real learning was in deploying something permanent to a public ledger where mistakes live forever. Humbling and instructive in equal measure.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">Algorand ASA</span>
                      <span className="tech-tag">Web3 Integration</span>
                      <span className="tech-tag">Blockchain Architecture</span>
                    </div>
                  </div>
                  <div className="project-links">
                    <a href="https://tokicoin.netlify.app" target="_blank" rel="noopener" className="btn btn-primary">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-demo" className="ai-demo-section">
          <div className="container">
            <AIDemo />
          </div>
        </section>

        <GuestbookContainer />
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>Let&apos;s Connect</h3>
              <p>
                Need someone who understands both the code and the compliance headaches? Want to talk tag governance, AI integrations, or why Ocean Beach is firing this week? Let&apos;s connect.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/toki-burke" target="_blank" rel="noopener" 
                   title="LinkedIn Profile">LinkedIn</a>
                <a href="https://github.com/jtokib" target="_blank" rel="noopener" 
                   title="GitHub Profile">GitHub</a>
                <a href="https://obsf.surf" target="_blank" rel="noopener" 
                   title="Surf Conditions Site">Surf Central</a>
                <a href="mailto:jtokib@gmail.com" title="Email Me">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}