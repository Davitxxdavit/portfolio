import React, { useState } from 'react'
import './Footer.css'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCheck } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [emailCopied, setEmailCopied] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmailCopy = async (e) => {
    e.preventDefault()
    const email = 'davitberidze1510@gmail.com'
    
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    }
  }

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/Davitxxdavit',
      name: 'GitHub',
      color: '#333',
      type: 'link'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/davit-beridze-8616332b5/',
      name: 'LinkedIn',
      color: '#0077B5',
      type: 'link'
    },
    {
      icon: emailCopied ? <FaCheck /> : <FaEnvelope />,
      url: 'mailto:davitberidze1510@gmail.com',
      name: emailCopied ? 'Email Copied!' : 'Copy Email',
      color: '#ff77c6',
      type: 'email'
    }
  ]

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  const services = [
    'React Development',
    'Frontend Development',
    'Responsive Design',
    'UI/UX Implementation',
    'Performance Optimization',
    'Code Review & Consulting'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Davit Beridze</h3>
            <p>
              Frontend Developer from Batumi, Georgia, specializing in React and modern web technologies. 
              Passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                link.type === 'email' ? (
                  <div key={index} className="email-button-wrapper">
                    <button
                      onClick={handleEmailCopy}
                      aria-label={link.name}
                      className={`social-link glass-effect ${emailCopied ? 'copied' : ''}`}
                      style={{ '--hover-color': link.color }}
                      title={link.name}
                    >
                      {link.icon}
                    </button>
                    {emailCopied && (
                      <div className="copy-notification">
                        Email copied! 📧
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-link glass-effect"
                    style={{ '--hover-color': link.color }}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                )
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavClick(item.id)}
                    className="footer-link-btn"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>
              Ready to bring your ideas to life? Let's work together to create something amazing.
            </p>
            <button 
              onClick={() => handleNavClick('contact')}
              className="contact-btn glass-effect"
            >
              Let's Talk
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Davit Beridze. Made with <FaHeart className="heart-icon" /> in Batumi, Georgia
            </p>
            <button onClick={handleScrollToTop} className="back-to-top glass-effect">
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer