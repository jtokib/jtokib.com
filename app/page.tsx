import Navigation from './components/Navigation'
import AIDemo from './components/AIDemo'
import Guestbook from './components/Guestbook'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main>
        <div style={{textAlign: 'center', padding: '1rem', background: 'linear-gradient(45deg, #FFD700, #FF1493)', color: 'white', fontFamily: 'Comic Sans MS', fontWeight: 'bold', fontSize: '1.2rem', animation: 'blink 1s infinite'}}>
          🚧 UNDER CONSTRUCTION 🚧 BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 🚧 LAST UPDATED: 12/31/1995 🚧
        </div>
        
        <div style={{textAlign: 'center', padding: '0.5rem', background: '#000080', color: '#00FF00', fontFamily: 'Comic Sans MS', fontSize: '1rem'}}>
          👁️ VISITOR COUNT: 000042069 👁️ YOU ARE VISITOR #42070! 👁️ 
        </div>

        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>🌟 WELCOME TO <span className="highlight">TOKI&apos;S</span> CYBER ZONE! 🌟</h1>
              <h2>⚡ RADICAL WEB WIZARD & DIGITAL SURF MASTER ⚡</h2>
              <p className="hero-description">
                🤖 Greetings, fellow netizen! 🤖 I&apos;m the ultimate MarTech ninja, coding the future 
                with AI superpowers and sick web skills! When I&apos;m not hacking the matrix or building 
                tubular mobile apps, you&apos;ll find me shredding gnarly waves across the Pacific Ocean! 
                🏄‍♂️ I also grow wicked cool California plants and fix surfboards like a total boss! 
                Welcome to my digital domain! ✨
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">🔥 CHECK OUT MY RAD PROJECTS! 🔥</a>
                <a href="#ai-demo" className="btn btn-secondary">🤖 TRY MY SICK AI DEMO! 🤖</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-placeholder">
                  🤖💻🏄‍♂️✨
                </div>
                <div style={{marginBottom: '1rem', color: 'white', fontFamily: 'Comic Sans MS', fontSize: '1.1rem', fontWeight: 'bold'}}>
                  ⚡ WEBMASTER TOKI ⚡
                </div>
                <div className="floating-tags">
                  <span className="tag">🚀 CYBER WIZARD</span>
                  <span className="tag">🌊 WAVE RIDER</span>
                  <span className="tag">☁️ CLOUD NINJA</span>
                  <span className="tag">🤖 AI GURU</span>
                  <span className="tag">🌱 PLANT MASTER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>🎯 ABOUT THE WEBMASTER 🎯</h2>
            <div style={{textAlign: 'center', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,215,0,0.3)', border: '3px dashed #FF1493', fontFamily: 'Comic Sans MS'}}>
              <strong>📧 EMAIL ME! 📧 SIGN MY GUESTBOOK! 📧 ADD ME TO YOUR HOTLIST! 📧</strong>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  🌐 Greetings from cyberspace! 🌐 I&apos;m your friendly neighborhood MarTech wizard, 
                  blending wicked coding skills with radical digital innovation! My cyber toolkit includes 
                  the most tubular cloud platforms (Google Firebase, Google Cloud, Supabase), cutting-edge 
                  development tools (GitHub, Vercel, Lovable), and mind-blowing AI platforms (Claude Code, 
                  ChatGPT, Meta AI) that are totally off the hook! 🚀
                </p>
                <p>
                  💾 My technical arsenal is loaded with full-stack web wizardry (HTML, CSS, JavaScript), 
                  gnarly marketing tech platforms (Tealium, Sitecore, WordPress, Wix), and sick analytics 
                  tools (Google Tag Manager, Google Analytics, Facebook Pixel, Facebook CAPI). Plus I&apos;ve 
                  got mad skills with infrastructure systems (Akamai, Cloudflare, Rackspace) that keep the 
                  digital world spinning! I live to create cyber solutions that are both functional AND totally cool! ✨
                </p>
                <p>
                  🏄‍♂️ When I&apos;m not coding up a storm or building the next killer app, you&apos;ll catch me 
                  riding the most epic waves across the Pacific Ocean! From the cold swells of Washington and Oregon 
                  to the tropical breaks of Hawaii&apos;s North Shore, from Japan&apos;s reef breaks to Peru&apos;s perfect 
                  points, and New Zealand&apos;s powerful southern swells - I&apos;ve surfed them all! 🌊 I also fix 
                  surfboards like a zen master and grow the most righteous California native plants (especially 
                  my prized Ceanothus collection)! 🌱
                </p>
                <div className="skills">
                  <h3>⚡ MY CYBER POWERS ⚡</h3>
                  <div className="skill-grid">
                    <div className="skill-item">
                      <span className="skill-icon">🚀💥</span>
                      <h4>MarTech Wizardry</h4>
                      <p>Tealium sorcery, Sitecore mastery, WordPress magic, Google Analytics domination, Facebook CAPI hacking, GTM ninja skills!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🤖🧠</span>
                      <h4>AI & Cloud Supremacy</h4>
                      <p>Claude Code genius, ChatGPT whispering, Meta AI commanding, Firebase ruling, Google Cloud conquering, Supabase mastering!</p>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">💻⚡</span>
                      <h4>Code & Infrastructure Domination</h4>
                      <p>HTML/CSS/JS excellence, GitHub mastery, Vercel deployment, Akamai acceleration, Cloudflare protection, Android creation!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-sidebar">
                <div className="fun-facts">
                  <h3>🌟 TOTALLY RADICAL FACTS! 🌟</h3>
                  <div style={{marginBottom: '1rem', textAlign: 'center', background: 'rgba(255,20,147,0.3)', padding: '0.5rem', border: '2px solid #FFD700', fontFamily: 'Comic Sans MS'}}>
                    ⭐ WEBMASTER&apos;S PERSONAL INFO ⭐
                  </div>
                  <ul>
                    <li>🌊 Gnarliest wave rider across WA, OR, CA, HI, Okinawa, Peru, and New Zealand!</li>
                    <li>🏄‍♂️ Zen surfboard repair master between epic coding marathons!</li>
                    <li>🌼 California native plant wizard (Ceanothus collection is LEGENDARY!)</li>
                    <li>🔨 Bathroom tiling champion with handcrafted templates!</li>
                    <li>🎨 Digital solution architect blending art with killer functionality!</li>
                    <li>🐕 Daily dog walks = brainstorming sessions for world domination!</li>
                    <li>💾 Started coding on a Commodore 64 (totally retro!)</li>
                    <li>🌈 Favorite browser: Netscape Navigator 4.0!</li>
                  </ul>
                  <div style={{marginTop: '1rem', textAlign: 'center', background: 'rgba(0,255,0,0.2)', padding: '0.5rem', border: '2px dashed #FF4500', fontFamily: 'Comic Sans MS', fontSize: '0.9rem'}}>
                    📨 Want to be cyber friends? Email me! 📨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>🚀 MY WICKED COOL PROJECTS 🚀</h2>
            <div style={{textAlign: 'center', marginBottom: '2rem', padding: '1rem', background: 'rgba(0,255,255,0.3)', border: '4px double #FF1493', fontFamily: 'Comic Sans MS'}}>
              <strong>⚡ CHECK OUT THESE TOTALLY TUBULAR CREATIONS! ⚡</strong><br/>
              <span style={{fontSize: '0.9rem'}}>🌟 Featured on Yahoo! GeoCities Hall of Fame 🌟</span>
            </div>
            <div className="projects-grid">
              <div className="project-card featured">
                <div className="project-header">
                  <h3>🌊 OBSF.SURF - THE ULTIMATE WAVE MACHINE! 🌊</h3>
                  <span className="project-status">🏆 AWARD WINNER 🏆</span>
                </div>
                <p>
                  🏄‍♂️ THE MOST RADICAL SURF FORECAST SITE ON THE ENTIRE WORLD WIDE WEB! 🏄‍♂️ 
                  Built with sick HTML/CSS/JavaScript wizardry and powered by gnarly NOAA and CDIP APIs! 
                  Deployed with lightning-fast Vercel hosting and protected by Cloudflare&apos;s cyber shield! 
                  Features real-time buoy data, wind analysis mastery, and tide predictions that are 
                  totally dialed for dawn patrol warriors! This site is OFF THE HOOK! 🚀
                </p>
                <div className="project-tags">
                  <span className="tag">⚡ JAVASCRIPT POWER</span>
                  <span className="tag">🚀 VERCEL SPEED</span>
                  <span className="tag">🌊 NOAA DATA</span>
                  <span className="tag">☁️ CLOUDFLARE</span>
                </div>
                <div className="project-links">
                  <a href="https://obsf.surf" target="_blank" rel="noopener">🌊 SURF THE WEB! 🌊</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>📱 MOBILE APP EMPIRE 📱</h3>
                </div>
                <p>
                  🤖 A TOTALLY SICK COLLECTION OF ANDROID APPS THAT RULE THE DIGITAL WORLD! 🤖 
                  Featuring Hydrate (the ultimate H2O tracking machine), TresMade (NBA stats domination), 
                  and productivity tools that are absolutely OFF THE CHARTS! Crafted with Java mastery, 
                  powered by GitHub version control wizardry, and featuring mobile UX patterns that 
                  will blow your cyber mind! These apps are the FUTURE! ⚡
                </p>
                <div className="project-tags">
                  <span className="tag">🤖 ANDROID POWER</span>
                  <span className="tag">☕ JAVA MAGIC</span>
                  <span className="tag">🐙 GITHUB MASTER</span>
                  <span className="tag">📱 UX GENIUS</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/jtokib" target="_blank" rel="noopener">🚀 CHECK THE CODE! 🚀</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>🚀 MARTECH DOMINATION SYSTEM 🚀</h3>
                </div>
                <p>
                  💥 THE MOST RADICAL MARKETING TECHNOLOGY EMPIRE ON THE PLANET! 💥 
                  Architecting cyber solutions with Tealium tag wizardry, Sitecore content mastery, 
                  and Google Analytics plus Facebook CAPI for total digital attribution supremacy! 
                  Powered by AI platforms like ChatGPT and Claude Code for automated personalization 
                  that will REVOLUTIONIZE the marketing universe! This is the FUTURE OF ADVERTISING! ⚡
                </p>
                <div className="project-tags">
                  <span className="tag">🏷️ TEALIUM MAGIC</span>
                  <span className="tag">🌐 SITECORE POWER</span>
                  <span className="tag">📊 ANALYTICS MASTER</span>
                  <span className="tag">📘 FACEBOOK NINJA</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>🌊 PERSONAL CRAFT MASTERY 🌊</h3>
                </div>
                <p>
                  🏄‍♂️ THE MOST RIGHTEOUS COLLECTION OF HANDS-ON SKILLS IN CYBERSPACE! 🏄‍♂️ 
                  My surfboard repair workshop is LEGENDARY - featuring ding fixes, fin adjustments, 
                  and custom artwork that would make Poseidon weep with joy! Plus I cultivate the 
                  most gnarly California native plants (my Ceanothus collection is WORLD-CLASS!) 
                  and my bathroom tiling with handmade templates is pure CRAFTSMANSHIP PERFECTION! 🌱
                </p>
                <div className="project-tags">
                  <span className="tag">🏄 BOARD WIZARD</span>
                  <span className="tag">🌿 PLANT MASTER</span>
                  <span className="tag">🔨 CRAFT GENIUS</span>
                  <span className="tag">🎨 ART CREATOR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIDemo />
        
        <Guestbook />
      </main>

      <div style={{textAlign: 'center', padding: '1rem', background: 'linear-gradient(45deg, #9400D3, #FF1493, #00FF00)', color: 'white', fontFamily: 'Comic Sans MS', fontWeight: 'bold', animation: 'blink 2s infinite'}}>
        🌈 JOIN THE CYBER REVOLUTION! 🌈 WEBMASTERS UNITE! 🌈 WELCOME TO THE FUTURE! 🌈
      </div>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>🌐 LET&apos;S BE CYBER FRIENDS! 🌐</h3>
              <div style={{textAlign: 'center', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,215,0,0.2)', border: '3px solid #00FF00', fontFamily: 'Comic Sans MS'}}>
                ⚡ WANT TO JOIN MY DIGITAL EMPIRE? ⚡<br/>
                📧 EMAIL ME! 📧 SIGN MY GUESTBOOK! 📧 ADD ME TO YOUR HOTLIST! 📧
              </div>
              <p>
                🚀 Ready to ride the information superhighway together? 🚀 Whether you&apos;re into 
                radical AI-powered MarTech wizardry, gnarly mobile development, or just want to chat 
                about the most tubular surf conditions on planet Earth - I&apos;m totally stoked 
                to connect with fellow cyber warriors! Let&apos;s make some digital magic happen! ⚡
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/toki-burke" target="_blank" rel="noopener" 
                   title="LinkedIn Profile">🏢 LINKEDIN ZONE</a>
                <a href="https://github.com/jtokib" target="_blank" rel="noopener" 
                   title="GitHub Profile">🐙 GITHUB GALAXY</a>
                <a href="https://obsf.surf" target="_blank" rel="noopener" 
                   title="Surf Conditions Site">🌊 SURF CENTRAL</a>
                <a href="mailto:toki@jtokib.com" title="Email Me">📧 EMAIL BLAST</a>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(90deg, #FF4500, #FFD700, #00FF00, #00FFFF, #FF1493)', marginTop: '2rem'}}>
            <div style={{color: 'white', fontFamily: 'Comic Sans MS', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              🌟 WEB RING NAVIGATION 🌟<br/>
              <span style={{fontSize: '0.9rem'}}>
                [ <a href="#" style={{color: 'white'}}>←PREV</a> | <a href="#" style={{color: 'white'}}>RANDOM</a> | <a href="#" style={{color: 'white'}}>NEXT→</a> ]<br/>
                Member of the RADICAL WEBMASTERS RING since 1995!
              </span>
            </div>
          </div>

          <div className="footer-bottom">
            <p style={{fontFamily: 'Comic Sans MS', fontSize: '1.1rem', fontWeight: 'bold'}}>
              ⚡ © 1995-{new Date().getFullYear()} WEBMASTER TOKI&apos;S CYBER EMPIRE ⚡<br/>
              🌈 Crafted with HTML wizardry, caffeine power, and pure 90s magic! 🌈<br/>
              <span style={{fontSize: '0.9rem', animation: 'blink 1s infinite'}}>
                🚧 Site best viewed in Netscape Navigator 4.0 at 800x600 resolution! 🚧
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}