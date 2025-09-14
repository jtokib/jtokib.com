import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'
import GuestbookContainer from './components/guestbook/GuestbookContainer'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <div className="under-construction block-dark-yellow">
          🚧 UNDER CONSTRUCTION 🚧 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 🚧 LAST UPDATED: 12/31/1995 🚧
        </div>
        <section id="home" className="hero">
          <div className="hero-content block-dark">
            <div className="hero-text text-white">
              <h1>⚡ WELCOME TO <span className="highlight">TOKI&apos;S</span> CYBER ZONE! ⚡</h1>
              <p className="hero-description">
                🤖 Greetings, fellow netizen! 🤖 I&apos;m a MarTech aficionado  specializing in ad tech, 
                tag management, and web development with deep expertise in Tealium, Sitecore, and Selligent platforms.
                When I&apos;m not building digital solutions, you&apos;ll find me surfing across the Pacific 🏄‍♂️, 
                growing California native plants 🌱, or fixing up old surfboards! Welcome to my digital escape! ✨
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">🔥 CHECK OUT MY PROJECTS! 🔥</a>
                <a href="#ai-demo" className="btn btn-secondary">🤖 TRY MY AI DEMO! 🤖</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card block-dark text-white">
                <div className="profile-placeholder">
                  🤖💻🏄‍♂️✨
                </div>
                <div className="profile-card-content">
                  ⚡ THE CYBER WARRIOR HIMSELF ⚡
                </div>
                <div className="profile-card-details">
                  🌐 MarTech<br/>
                  🏄‍♂️ Semi-Amateur Professional Kook<br/>
                  🤖 AI Explorer<br/>
                  🌱 Plant Enthusiast
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
            <h2>🎯 ABOUT THE WEBMASTER 🎯</h2>
            <div className="about-email-cta">
              <strong>
                💬 <a href="mailto:jtokib@gmail.com">GET IN TOUCH</a> or <a href="#guestbook">SIGN MY GUESTBOOK!</a> 💬
              </strong>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  🌐 Welcome to my corner of cyberspace! 🌐 I&apos;ve been exploring the intersection of 
                  marketing technology and web development, learning new platforms and tools. 
                  I&apos;ve been diving into cloud platforms (Google Firebase, Google Cloud, Supabase), 
                  development tools (GitHub, Cloudflare Workers), and AI platforms (Claude Code, ChatGPT, Meta AI). 
                  The tech landscape keeps evolving, and I love the challenge of keeping up! 🚀
                </p>
                <p>
                  🌊 I also enjoy going on adventures with my family, surfing, fixing up old surfboards, growing California native plants, and the occasional bathroom tiling project! 🌱
                </p>
                <div className="skills">
                  <h3>⚡ MY SKILLS & EXPERTISE ⚡</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon">🚀💥</span>
                      <h4>MarTech & Ad Tech Expertise</h4>
                      <p>Deep expertise in marketing technology platforms including Tealium, Sitecore, and Selligent. Specialized in both client-side and server-side tag management, analytics implementation (Google Tag Manager, Google Analytics, Facebook Pixel, Facebook CAPI), and infrastructure systems (Akamai, Cloudflare, Rackspace). I love creating robust digital solutions that perform well and look great!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🤖🧠</span>
                      <h4>AI & Cloud Learning</h4>
                      <p>Playing with Claude Code, chatting with ChatGPT, trying Meta AI, building with Firebase, exploring Google Gemini, and discovering Supabase!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">💻⚡</span>
                      <h4>Web Development & Infrastructure</h4>
                      <p>Very proficient in HTML, CSS, and JavaScript! Experienced with GitHub workflows, Cloudflare Workers deployments, and infrastructure platforms like Akamai & Cloudflare. Still exploring Android development!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-sidebar">
                <div className="fun-facts">
                  <h3>🌟 TOTALLY RADICAL FACTS! 🌟</h3>
                  <div className="webmaster-info">
                    ⭐ WEBMASTER&apos;S PERSONAL INFO ⭐
                  </div>
                  <ul>
                    <li>🎨 Aspiring digital creator who likes blending function with style!</li>
                    <li>🐕 Daily dog walks = brainstorming sessions for world domination!</li>
                    <li>🌈 Favorite browser: Netscape Navigator 4.0!</li>
                    <li>💾 Thinks the 90s internet was peak civilization!</li>
                    <li>⚡ Believes in the power of Comic Sans MS for serious business!</li>
                  </ul>
                  <div className="cyber-friends-cta">
                    🌐 WELCOME TO MY CYBER REALM! 🌐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>🚀 MY RADICAL PROJECTS 🚀</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>🌊 obsf.surf - Ocean Beach Surf Forecast</h3>
                  <div className="project-status">⚡ LIVE & GNARLY ⚡</div>
                </div>
                <div className="project-description">
                  <p>
                    🏄‍♂️ My pride and joy! A comprehensive surf forecast dashboard specifically tuned for Ocean Beach in San Francisco. 
                    Built because I got tired of checking 17 different websites before paddling out, only to get completely worked by the ocean anyway!
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">🌐 Web App</span>
                    <span className="tech-tag">📊 Real-time Data</span>
                    <span className="tech-tag">🏄‍♂️ Surf-Specific</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href="https://obsf.surf" target="_blank" rel="noopener" className="btn btn-primary">🌊 VISIT SITE</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>📱 Mobile Apps (Learning Journey)</h3>
                  <div className="project-status">🔧 IN DEVELOPMENT 🔧</div>
                </div>
                <div className="project-description">
                  <p>
                    🤖 Currently exploring Android development with Java! Building simple apps to learn mobile development patterns 
                    and understand the full stack. It's humbling going from web dev back to "Hello World" but I'm loving the challenge!
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">📱 Android</span>
                    <span className="tech-tag">☕ Java</span>
                    <span className="tech-tag">🎓 Learning</span>
                  </div>
                </div>
                <div className="project-links">
                  <span className="btn btn-secondary disabled">🚧 COMING SOON 🚧</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-demo" className="ai-demo-section">
          <div className="container">
            <h2>🤖 AI SURF ASSISTANT DEMO 🤖</h2>
            <div className="ai-demo-disclaimer">
              🌊 POWERED BY CUTTING-EDGE AI TECHNOLOGY! 🌊<br/>
              <small>(Disclaimer: May occasionally recommend surfing during tsunamis)</small>
            </div>
            <AIDemo />
          </div>
        </section>

        <GuestbookContainer />
      </main>

      <footer id="contact" className="footer block-dark-yellow-footer" style={{ background: 'linear-gradient(90deg, #222 80%, #ffe066 100%)' }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>🌐 LET&apos;S BE CYBER FRIENDS! 🌐</h3>
              <div className="footer-empire-cta">
                ⚡ CONNECT & SHARE IDEAS! ⚡
              </div>
              <p>
                🚀 Ready to connect and share ideas? 🚀 Whether you&apos;re interested in web development, 
                surfing adventures, plant growing, or just want to chat about life - I&apos;d love to hear from you! 
                As a professional in some things and a semi-amateur professional in most other things, 
                I&apos;m always learning and happy to connect! ⚡
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/toki-burke" target="_blank" rel="noopener" 
                   title="LinkedIn Profile">🏢 LINKEDIN ZONE</a>
                <a href="https://github.com/jtokib" target="_blank" rel="noopener" 
                   title="GitHub Profile">🐙 GITHUB GALAXY</a>
                <a href="https://obsf.surf" target="_blank" rel="noopener" 
                   title="Surf Conditions Site">🌊 SURF CENTRAL</a>
                <a href="mailto:jtokib@gmail.com" title="Email Me">📧 EMAIL BLAST</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}