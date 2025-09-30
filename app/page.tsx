import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'
import GuestbookContainer from './components/guestbook/GuestbookContainer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <section id="home" className="hero">
          <div className="hero-content block-dark">
            <div className="hero-text text-white">
              <h1>WELCOME TO <span className="highlight">TOKI&apos;S</span> DIGITAL PORTFOLIO</h1>
              <p className="hero-description">
                Marketing Technology Team Lead delivering scalable solutions for enterprise clients.
                Expert in Tealium, Sitecore, and Selligent implementations with 5+ years specializing in
                client-side/server-side tag management and analytics infrastructure.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#ai-demo" className="btn btn-secondary">Try AI Demo</a>
                <a href="#guestbook" className="btn btn-secondary">Sign Guestbook</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card block-dark text-white">
                <div className="profile-placeholder">
                  🚀
                </div>
                <div className="profile-card-content">
                  Digital Professional
                </div>
                <div className="profile-card-details">
                  MarTech Specialist<br/>
                  Surf Enthusiast<br/>
                  AI Explorer<br/>
                  Plant Lover
                </div>
                <div className="profile-card-quote">
                  "Building digital solutions by day, chasing waves by weekend!"
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I build marketing technology solutions that scale. My current focus includes
                  cloud infrastructure (Firebase, Google Cloud, Supabase), modern deployment workflows,
                  and AI integration for enhanced user experiences.
                </p>
                <p>
                  Outside of tech, I enjoy family adventures, Ocean Beach surf forecasting projects,
                  and cultivating California native plants.
                </p>
                <div className="skills">
                  <h3>Skills & Expertise</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>MarTech & Ad Tech</h4>
                      <p>5+ years implementing enterprise MarTech stacks. Specialize in tag management architecture, analytics deployment (GTM, GA4, Facebook CAPI), and infrastructure optimization for high-traffic environments.</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>AI & Cloud Platforms</h4>
                      <p>Implementing AI-powered features and cloud-native architectures. Current projects integrate Claude Code, ChatGPT APIs, Firebase backend services, and Supabase for real-time data management.</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>Web Development & Infrastructure</h4>
                      <p>Proficient in HTML, CSS, and JavaScript. Experienced with GitHub workflows, Cloudflare Workers, and modern deployment pipelines. Building cross-platform solutions including mobile applications.</p>
                    </div>
                  </div>
                </div>
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
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>obsf.surf - Ocean Beach Surf Forecast</h3>
                  <div className="project-status">Live</div>
                </div>
                <div className="project-description">
                  <p>
                    Comprehensive surf forecast dashboard tailored for Ocean Beach, San Francisco. 
                    Consolidates multiple data sources into one reliable interface for local surf conditions.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Web App</span>
                    <span className="tech-tag">Real-time Data</span>
                    <span className="tech-tag">Surf Analytics</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href="https://obsf.surf" target="_blank" rel="noopener" className="btn btn-primary">Visit Site</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>TokiCoin - Algorand Standard Asset</h3>
                  <div className="project-status">Deployed</div>
                </div>
                <div className="project-description">
                  <p>
                    Custom cryptocurrency token built on the Algorand blockchain. Demonstrates blockchain development 
                    skills and understanding of tokenomics, smart contracts, and DeFi concepts on a high-performance network.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Blockchain</span>
                    <span className="tech-tag">Algorand</span>
                    <span className="tech-tag">Tokenomics</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href="https://tokicoin.netlify.app" target="_blank" rel="noopener" className="btn btn-primary">View Project</a>
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

      <footer id="contact" className="footer block-dark-yellow-footer" style={{ background: 'linear-gradient(90deg, #222 80%, #ffe066 100%)' }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>Let&apos;s Connect</h3>
              <p>
                Ready to collaborate? Whether discussing MarTech implementations,
                web development projects, or sharing surf stories - let&apos;s connect!
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