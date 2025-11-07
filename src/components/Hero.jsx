import React from 'react'
import './Hero.css'
import { FaDownload, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import davitPhoto from '../assets/davit.jpeg'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add your resume PDF to the public folder
    link.download = 'Davit_Beridze_Resume.pdf'
    link.click()
  }

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className='heroContainer'>
      <div className="container">
        <div className="hero-content">
          <div className='heroText'>
            <h1 className="greeting">Hello! I'm</h1>
            <h2 className="name">Davit Beridze</h2>
            <p className="title">Frontend Developer</p>
            <p className="location">
              <FaLocationArrow /> Batumi, Georgia
            </p>
            <p className="hero-description">
              Passionate React developer specializing in creating beautiful, responsive, 
              and user-friendly web applications. I love turning ideas into stunning 
              digital experiences using modern frontend technologies.
            </p>
            
            <div className="hero-buttons">
              <button className="primary-btn" onClick={handleDownloadResume}>
                <FaDownload />
                Get Resume
              </button>
              <button className="secondary-btn" onClick={() => handleScroll('projects')}>
                View Projects
              </button>
            </div>

            <div className="hero-social">
              <a href="https://github.com/Davitxxdavit" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/davit-beridze-8616332b5/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className='myPhoto'>
            <div className="photo-container">
              <div className="photo-placeholder">
                <img src={davitPhoto} alt="Davit Beridze" className="profile-photo" />
              </div>
              <div className="photo-decoration"></div>
              <div className="floating-elements">
                <div className="element element-1">React</div>
                <div className="element element-2">JS</div>
                <div className="element element-3">CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
