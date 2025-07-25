import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I&apos;m <span className="highlight">Toki Burke</span></h1>
              <h2>AI-Driven Marketing Technologist & Digital Innovator</h2>
              <p className="hero-description">
                I lead MarTech initiatives, applying AI and code to scale digital outcomes. 
                I&apos;m obsessed with product-led growth, automated personalization, and building 
                elegant mobile experiences. Outside work? I surf breaks across the Pacific, 
                repair surfboards, and cultivate California native plants with precision.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#ai-demo" className="btn btn-secondary">Try AI Demo</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-placeholder">
                  🤖🏄‍♂️
                </div>
                <div className="floating-tags">
                  <span className="tag">AI Expert</span>
                  <span className="tag">MarTech Lead</span>
                  <span className="tag">Cloud Architect</span>
                  <span className="tag">Pacific Surfer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I&apos;m a Marketing Technology Team Lead who blends strategic thinking with 
                  technical execution to drive digital innovation. My expertise spans cloud 
                  platforms (Google Firebase, Google Cloud, Supabase), modern development tools 
                  (GitHub, Vercel, Lovable), and AI platforms (Claude Code, ChatGPT, Meta AI).
                </p>
                <p>
                  My technical foundation includes full-stack web development (HTML, CSS, JavaScript), 
                  marketing technology platforms (Tealium, Sitecore, WordPress, Wix), analytics and tracking 
                  (Google Tag Manager, Google Analytics, Facebook Pixel, Facebook CAPI), and infrastructure 
                  (Akamai, Cloudflare, Rackspace). I enjoy creating digital solutions that bridge technology and creativity.
                </p>
                <p>
                  When I&apos;m not architecting marketing technology solutions, you&apos;ll find me 
                  surfing breaks across the Pacific—from Washington and Oregon down the California coast, 
                  the North Shore of Oahu, the reefs of Okinawa, the points of Peru, and New Zealand&apos;s 
                  powerful swells. I repair surfboards as a meditative hobby and tend to my California 
                  native plant garden, with a particular fondness for Ceanothus and Ray Hartman cultivars.
                </p>
                <div className="skills">
                  <h3>What I Do</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon">🚀</span>
                      <h4>Marketing Technology</h4>
                      <p>Tealium, Sitecore, WordPress, Google Analytics, Facebook CAPI, GTM</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🤖</span>
                      <h4>AI & Cloud Platforms</h4>
                      <p>Claude Code, ChatGPT, Meta AI, Firebase, Google Cloud, Supabase</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">📱</span>
                      <h4>Development & Infrastructure</h4>
                      <p>HTML/CSS/JS, GitHub, Vercel, Akamai, Cloudflare, Android development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-sidebar">
                <div className="fun-facts">
                  <h3>Fun Facts</h3>
                  <ul>
                    <li>🌊 Surfed breaks across WA, OR, CA, HI, Okinawa, Peru, and New Zealand</li>
                    <li>🏄‍♂️ Repair surfboards as a meditative hobby between coding sessions</li>
                    <li>🌼 Cultivate California natives, especially Ceanothus and Ray Hartman</li>
                    <li>🔨 Tiled a full bathroom solo with handmade templates</li>
                    <li>🎨 Design digital solutions that blend creativity with functionality</li>
                    <li>🐕 Daily dog walks = brainstorming sessions for new features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card featured">
                <div className="project-header">
                  <h3>obsf.surf</h3>
                  <span className="project-status">Featured Project</span>
                </div>
                <p>
                  Ocean Beach SF surf forecast dashboard built with HTML/CSS/JavaScript, 
                  integrating NOAA and CDIP APIs. Deployed on Vercel with Cloudflare CDN. 
                  Features real-time buoy data, wind analysis, and tide predictions 
                  optimized for mobile surfers checking conditions at dawn.
                </p>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">Vercel</span>
                  <span className="tag">NOAA APIs</span>
                  <span className="tag">Cloudflare</span>
                </div>
                <div className="project-links">
                  <a href="https://obsf.surf" target="_blank" rel="noopener">Visit obsf.surf</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Mobile App Portfolio</h3>
                </div>
                <p>
                  A collection of Android applications including Hydrate (water intake tracker), 
                  TresMade (NBA three-point statistics), and productivity tools. Built with Java, 
                  utilizing GitHub for version control and exploring mobile UX patterns 
                  for data visualization and user engagement.
                </p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Java</span>
                  <span className="tag">GitHub</span>
                  <span className="tag">Mobile UX</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/jtokib" target="_blank" rel="noopener">View GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Marketing Technology Innovation</h3>
                </div>
                <p>
                  Architecting marketing technology solutions using Tealium for tag management, 
                  Sitecore for content delivery, and Google Analytics with Facebook CAPI for 
                  attribution. Integrating AI platforms like ChatGPT and Claude Code for 
                  automated personalization and campaign optimization.
                </p>
                <div className="project-tags">
                  <span className="tag">Tealium</span>
                  <span className="tag">Sitecore</span>
                  <span className="tag">Google Analytics</span>
                  <span className="tag">Facebook CAPI</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Personal Craft Projects</h3>
                </div>
                <p>
                  Surfboard repair workshop featuring ding fixes, fin adjustments, and custom artwork. 
                  California native plant cultivation focusing on drought-resistant Ceanothus varieties 
                  and Ray Hartman specimens. Plus precision bathroom tiling with handmade templates.
                </p>
                <div className="project-tags">
                  <span className="tag">Surfboard Repair</span>
                  <span className="tag">Native Plants</span>
                  <span className="tag">Craftsmanship</span>
                  <span className="tag">Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIDemo />
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>Let&apos;s Connect</h3>
              <p>
                Interested in AI-driven marketing technology, mobile development, or just want to 
                chat about the latest surf conditions? I&apos;d love to hear from you.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/toki-burke" target="_blank" rel="noopener" 
                   title="LinkedIn Profile">LinkedIn</a>
                <a href="https://github.com/jtokib" target="_blank" rel="noopener" 
                   title="GitHub Profile">GitHub</a>
                <a href="https://obsf.surf" target="_blank" rel="noopener" 
                   title="Surf Conditions Site">obsf.surf</a>
                <a href="mailto:toki@jtokib.com" title="Email Me">Email</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Toki Burke. Crafted with AI and caffeine.</p>
          </div>
        </div>
      </footer>
    </>
  )
}