'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* nav-brand removed as requested */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            href="#home" 
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Link>
          <Link 
            href="#ai-demo" 
            className="nav-link"
            onClick={() => scrollToSection('ai-demo')}
          >
            AI Demo
          </Link>
          <Link 
            href="#contact" 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Link>
          <Link 
            href="/resume" 
            className="nav-link"
          >
            Resume
          </Link>
        </div>
        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}