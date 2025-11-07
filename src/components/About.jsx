import React from 'react'
import './About.css'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiVite, SiTypescript, SiNextdotjs, SiSass, SiRedux } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const About = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', level: 95, color: '#61DAFB' },
    { icon: <FaJs />, name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', level: 70, color: '#3178C6' },
    { icon: <FaHtml5 />, name: 'HTML5', level: 95, color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 90, color: '#1572B6' },
    { icon: <SiSass />, name: 'Sass/SCSS', level: 85, color: '#CC6699' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 75, color: '#06B6D4' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 80, color: '#000000' },
    { icon: <SiRedux />, name: 'Redux', level: 65, color: '#764ABC' },
    { icon: <FaGitAlt />, name: 'Git', level: 85, color: '#F05032' },
    { icon: <SiVite />, name: 'Vite', level: 85, color: '#646CFF' },
    { icon: <VscCode />, name: 'VS Code', level: 95, color: '#007ACC' },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass-card">
            <div className="text-content">
              <h3>Frontend Developer from Georgia</h3>
              <p>
                I'm a passionate Frontend Developer based in beautiful Batumi, Georgia. 
                With a strong focus on React and modern web technologies, I create 
                stunning, responsive, and user-friendly web applications that deliver 
                exceptional user experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how 
                websites work, and it has evolved into a deep passion for crafting 
                digital experiences that not only look beautiful but also perform 
                flawlessly across all devices and platforms.
              </p>
              <p>
                I specialize in frontend development with React, but I'm always 
                eager to learn new technologies and stay up-to-date with the 
                latest industry trends and best practices.
              </p>
              
              <div className="about-stats">
                <div className="stat glass-effect">
                  <h4>3+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat glass-effect">
                  <h4>25+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="stat glass-effect">
                  <h4>100%</h4>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-container glass-card">
            <h3>My Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item glass-effect">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About