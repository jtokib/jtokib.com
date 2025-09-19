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
                I&apos;m a MarTech specialist focusing on ad tech, 
                tag management, and web development with deep expertise in Tealium, Sitecore, and Selligent platforms.
                When I&apos;m not building digital solutions, you&apos;ll find me surfing across the Pacific, 
                growing California native plants, or fixing up old surfboards!
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
                  Plant Enthusiast
                </div>
                <div className="profile-card-quote">
                  "Building digital solutions by day, taking care of babies by night!"
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
                  I&apos;ve been exploring the intersection of 
                  marketing technology and web development, learning new platforms and tools. 
                  I&apos;ve been diving into cloud platforms (Google Firebase, Google Cloud, Supabase), 
                  development tools (GitHub, Cloudflare Workers), and AI platforms (Claude Code, ChatGPT, Meta AI). 
                  The tech landscape keeps evolving, and I love the challenge of keeping up!
                </p>
                <p>
                  I also enjoy going on adventures with my family, surfing, fixing up old surfboards, growing California native plants, and the occasional bathroom tiling project!
                </p>
                <div className="skills">
                  <h3>Skills & Expertise</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>MarTech & Ad Tech Expertise</h4>
                      <p>Deep expertise in marketing technology platforms including Tealium, Sitecore, and Selligent. Specialized in both client-side and server-side tag management, analytics implementation (Google Tag Manager, Google Analytics, Facebook Pixel, Facebook CAPI), and infrastructure systems (Akamai, Cloudflare, Rackspace). I love creating robust digital solutions that perform well and look great!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>AI & Cloud Platforms</h4>
                      <p>Exploring Claude Code, ChatGPT, Meta AI, building with Firebase, working with Google Gemini, and discovering Supabase capabilities.</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon"></span>
                      <h4>Web Development & Infrastructure</h4>
                      <p>Proficient in HTML, CSS, and JavaScript. Experienced with GitHub workflows, Cloudflare Workers deployments, and infrastructure platforms like Akamai & Cloudflare. Currently exploring Android development.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-sidebar">
                <div className="fun-facts">
                  <h3>Personal Notes</h3>
                  <ul>
                    <li>Digital creator who enjoys blending function with style</li>
                    <li>Daily dog walks serve as brainstorming sessions</li>
                    <li>Appreciates both modern tools and web history</li>
                    <li>Values clean, accessible design principles</li>
                    <li>Always learning and exploring new technologies</li>
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
                    My comprehensive surf forecast dashboard specifically tuned for Ocean Beach in San Francisco. 
                    Built to consolidate multiple data sources into one reliable interface for local surf conditions.
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
                    A custom cryptocurrency token built on the Algorand blockchain. This project showcases blockchain development skills and understanding of tokenomics, smart contracts, and decentralized finance concepts on a high-performance network.
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
                Ready to connect and share ideas? Whether you&apos;re interested in web development, 
                surfing adventures, plant growing, or just want to chat about life - I&apos;d love to hear from you! 
                As a professional in some things and a semi-amateur professional in most other things, 
                I&apos;m always learning and happy to connect!
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