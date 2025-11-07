import React from 'react'
import './Projects.css'
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVite, SiFramer } from 'react-icons/si'
import grewecoImage from '../assets/greweco.png'
import cybersolutionsImage from '../assets/cybersolutions.png'
import cyberacademyImage from '../assets/cyberacademy.png'
import spacetourismImage from '../assets/spacetourism.png'
import eazybankImage from '../assets/eazybank.png'
import insureImage from '../assets/insure.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GreWeCo",
      description: "An innovative web platform focused on environmental sustainability and green technology solutions. Built with modern React architecture and responsive design to promote eco-friendly initiatives and community engagement.",
      image: grewecoImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/GreWeCo",
      live: "http://www.grew.eco/",
      featured: true
    },
    {
      id: 2,
      title: "Cyber Solutions",
      description: "A comprehensive cybersecurity solutions platform providing cutting-edge security services, threat analysis, and digital protection for businesses. Features modern animations and interactive user experience.",
      image: cybersolutionsImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/CyberSolutions",
      live: "https://cyso.ge/",
      featured: true
    },
    {
      id: 3,
      title: "Cyber Academy",
      description: "An educational platform for cybersecurity training and courses. Provides comprehensive learning resources, interactive modules, and certification programs for cybersecurity professionals and students.",
      image: cyberacademyImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/cyber-academy",
      live: "https://academy.edu.ge/",
      featured: false
    },
    {
      id: 4,
      title: "Space Tourism",
      description: "An immersive space tourism website featuring stunning visuals, interactive space exploration experiences, and detailed information about space travel destinations, crew members, and cutting-edge technology.",
      image: spacetourismImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/space-tourism-website",
      live: "https://space-toursim-davit.netlify.app/home",
      featured: false
    },
    {
      id: 5,
      title: "Eazy Bank",
      description: "A modern banking website with sleek design and smooth user experience. Features comprehensive banking services, account management, and financial solutions with responsive design and intuitive navigation.",
      image: eazybankImage,
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/easybank",
      live: "https://easyeasybanks.netlify.app/",
      featured: false
    },
    {
      id: 6,
      title: "Insure",
      description: "A professional insurance company landing page with modern design and compelling user interface. Features service showcases, customer testimonials, and comprehensive insurance solutions with clean, responsive layout.",
      image: insureImage,
      technologies: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" }
      ],
      github: "https://github.com/Davitxxdavit/insure-landing-page-master",
      live: "https://insure-landing-page-ma.netlify.app/#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent works that showcase my skills in React development and modern web technologies
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && <div className="featured-badge">Featured</div>}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github-link"
                      title="View Code"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link live-link"
                      title="Live Website"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Website</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index} 
                      className="tech-tag glass-effect"
                      style={{ '--tech-color': tech.color }}
                    >
                      <span className="tech-icon" style={{ color: tech.color }}>
                        {tech.icon}
                      </span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects