import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import GuestbookContainer from '../components/guestbook/GuestbookContainer'

export const metadata: Metadata = {
  title: 'Toki Burke | Fun Stuff',
  description: 'Side projects, experiments, and a guestbook. The less-serious corner of jtokib.com.',

}

export default function FunPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="hero" style={{ minHeight: '40vh', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="hero-content block-dark">
            <h1><span className="highlight">FUN STUFF</span></h1>
            <p className="hero-description">
              Side projects, blockchain experiments, and a guestbook. The less-serious corner of jtokib.com.
            </p>
            <div className="hero-buttons">
              <Link href="/" className="btn btn-secondary">← Back to Portfolio</Link>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <h2>Experiments</h2>
            <div className="projects-grid">
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
                    <h3>TokiCoin — Algorand Standard Asset</h3>
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

        <GuestbookContainer />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>Back to the Serious Stuff</h3>
              <p>
                The actual portfolio is at <Link href="/">jtokib.com</Link>. Or reach out directly.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/toki-burke" target="_blank" rel="noopener" title="LinkedIn Profile">LinkedIn</a>
                <a href="https://github.com/jtokib" target="_blank" rel="noopener" title="GitHub Profile">GitHub</a>
                <a href="mailto:jtokib@gmail.com" title="Email Me">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
