import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'
import Guestbook from './components/Guestbook'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <div className="under-construction">
          🚧 UNDER CONSTRUCTION 🚧 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 🚧 LAST UPDATED: 12/31/1995 🚧
        </div>
        
        <div className="visitor-counter">
          👁️ VISITOR COUNT: 000042069 👁️ YOU ARE VISITOR #42070! 👁️ 
        </div>

        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>🌟 WELCOME TO <span className="highlight">TOKI&apos;S</span> CYBER ZONE! 🌟</h1>
              <h2>⚡ MARTECH PROFESSIONAL & SEMI-PROFESSIONAL AMATEUR SURFER ⚡</h2>
              <p className="hero-description">
                🤖 Greetings, fellow netizen! 🤖 I&apos;m a MarTech professional with expertise in ad tech,
                tag management, and web development! When I&apos;m not building digital solutions or working 
                with platforms like Tealium and Sitecore, you&apos;ll find me out in the water as a 
                semi-professional amateur trying to catch waves across the Pacific Ocean! 🏄‍♂️ I also enjoy 
                growing California native plants and tinkering with surfboard repairs. Welcome to my digital corner! ✨
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">🔥 CHECK OUT MY PROJECTS! 🔥</a>
                <a href="#ai-demo" className="btn btn-secondary">🤖 TRY MY AI DEMO! 🤖</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-placeholder">
                  🤖💻🏄‍♂️✨
                </div>
                <div className="profile-card-content">
                  ⚡ THE CYBER WARRIOR HIMSELF ⚡
                </div>
                <div className="profile-card-details">
                  🌐 MarTech Expert<br/>
                  🏄‍♂️ Semi-Pro Amateur Surfer<br/>
                  🤖 AI Explorer<br/>
                  🌱 Plant Enthusiast
                </div>
                <div className="profile-card-quote">
                  "Building digital solutions by day, 🏄‍♂️ chasing waves by... also day!"
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
                <a href="mailto:jtokib@gmail.com">📧 EMAIL ME!</a>
                📧 
                <a href="#guestbook">SIGN MY GUESTBOOK!</a>
                📧
              </strong>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  🌐 Greetings from cyberspace! 🌐 I&apos;m an experienced MarTech professional with deep 
                  expertise in ad tech and web development! I specialize in platforms like Tealium, Sitecore, 
                  and Selligent, with strong skills in HTML, CSS, and JavaScript. I&apos;ve also been exploring 
                  cloud platforms (Google Firebase, Google Cloud, Supabase), development tools (GitHub, Vercel, 
                  Lovable), and AI platforms (Claude Code, ChatGPT, Meta AI) - always learning new tech! 🚀
                </p>
                <p>
                  💾 I&apos;m very proficient in web development fundamentals (HTML, CSS, JavaScript) and 
                  have deep expertise in the ad tech stack. I&apos;m highly skilled with marketing platforms 
                  like Tealium, Sitecore, and Selligent, specializing in both client-side and server-side 
                  tag management. I also work with analytics tools (Google Tag Manager, Google Analytics, 
                  Facebook Pixel, Facebook CAPI) and infrastructure systems (Akamai, Cloudflare, Rackspace). 
                  I love creating robust digital solutions that perform well and look great! ✨
                </p>
                <p>
                  🏄‍♂️ When I&apos;m not experimenting with code, you&apos;ll find me in the water trying to catch waves 
                  across the Pacific Ocean! I&apos;ve been fortunate to surf in Washington, Oregon, California, 
                  Hawaii, Japan, Peru, and New Zealand - always learning and usually getting worked by the ocean! 
                  🌊 I also enjoy fixing up old surfboards (still learning that craft too) and growing 
                  California native plants, especially my growing Ceanothus collection! 🌱
                </p>
                <div className="skills">
                  <h3>⚡ MY SKILLS & EXPERTISE ⚡</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon">🚀💥</span>
                      <h4>MarTech & Ad Tech Expertise</h4>
                      <p>Highly proficient in Tealium, Sitecore, and Selligent! Deep knowledge of the ad tech stack with expertise in both client-side and server-side tag management, Google Analytics, Facebook CAPI, and GTM implementation.</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🤖🧠</span>
                      <h4>AI & Cloud Learning</h4>
                      <p>Playing with Claude Code, chatting with ChatGPT, trying Meta AI, building with Firebase, exploring Google Cloud, and discovering Supabase!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">💻⚡</span>
                      <h4>Web Development & Infrastructure</h4>
                      <p>Very proficient in HTML, CSS, and JavaScript! Experienced with GitHub workflows, Vercel deployments, and infrastructure platforms like Akamai & Cloudflare. Still exploring Android development!</p>
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
                    <li>🌊 Semi-professional amateur surfer who's been lucky to ride waves in WA, OR, CA, HI, Japan, Peru, and New Zealand!</li>
                    <li>🏄‍♂️ Learning surfboard repair (and ding fixing) between coding sessions!</li>
                    <li>🌼 California native plant enthusiast (my Ceanothus collection is growing!)</li>
                    <li>🔨 Enjoys bathroom tiling projects with handmade templates!</li>
                    <li>🎨 Aspiring digital creator who likes blending function with style!</li>
                    <li>🐕 Daily dog walks = brainstorming sessions for world domination!</li>

                    <li>🌈 Favorite browser: Netscape Navigator 4.0!</li>
                  </ul>
                  <div className="cyber-friends-cta">
                    📨 Want to be cyber friends? <a href="mailto:jtokib@gmail.com">Email me!</a> 📨
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

        <Guestbook />
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>🌐 LET&apos;S BE CYBER FRIENDS! 🌐</h3>
              <div className="footer-empire-cta">
                ⚡ WANT TO JOIN MY DIGITAL EMPIRE? ⚡<br/>
                <a href="mailto:jtokib@gmail.com">📧 EMAIL ME!</a>
                📧 
                <a href="#guestbook">SIGN MY GUESTBOOK!</a>
                📧
              </div>
              <p>
                🚀 Ready to connect and share ideas? 🚀 Whether you&apos;re interested in MarTech solutions, 
                ad tech implementations, web development, surfing adventures, or just want to chat about life - 
                I&apos;d love to hear from you! As a professional in digital marketing tech and a semi-professional 
                amateur in most other things, I&apos;m always learning and happy to connect! ⚡
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