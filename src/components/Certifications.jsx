import React, { useState } from 'react'
import './Certifications.css'
import { FaAward, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa'
import { SiCodecademy } from 'react-icons/si'
import codecademyCert from '../assets/frontend engineer.pdf'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Front-End Engineer",
      organization: "Codecademy",
      description: "Professional certification awarded for successfully passing all exams and completing comprehensive front-end development curriculum.",
      technologies: [
        "HTML", "CSS", "JavaScript", "Git & GitHub", 
        "Web Design", "React", "Redux", "Build Tools", 
        "Data Structures", "Algorithms"
      ],
      icon: <SiCodecademy />,
      organizationColor: "#1F4056",
      badgeColor: "#FF6B35",
      completionDate: "2024", // Update with your actual completion date
      verified: true,
      certificateFile: codecademyCert,
      features: [
        "Professional Certification",
        "All Exams Passed Successfully", 
        "QR Code Verification",
        "Head of Learning Signature",
        "Comprehensive Curriculum Completed"
      ]
    }
  ]

  const handleViewCertificate = (certificate) => {
    if (certificate.certificateFile) {
      // Open certificate PDF
      const link = document.createElement('a')
      link.href = certificate.certificateFile
      link.target = '_blank'
      link.click()
    }
  }

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications that validate my expertise in modern web development technologies
        </p>
        
        <div className="certifications-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certification-card glass-card">
              <div className="cert-header">
                <div className="cert-icon" style={{ color: cert.organizationColor }}>
                  {cert.icon}
                </div>
                <div className="cert-badge" style={{ background: cert.badgeColor }}>
                  <FaAward />
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-organization">
                  <span className="org-name">{cert.organization}</span>
                  {cert.verified && (
                    <div className="verified-badge">
                      <FaCheckCircle />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-date">
                  <FaCalendarAlt />
                  <span>Completed: {cert.completionDate}</span>
                </div>
                
                <div className="cert-technologies">
                  <h4>Technologies Covered:</h4>
                  <div className="tech-tags">
                    {cert.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag glass-effect">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="cert-features">
                  <h4>Certification Features:</h4>
                  <ul className="features-list">
                    {cert.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="cert-actions">
                  <button 
                    className="view-cert-btn primary-btn"
                    onClick={() => handleViewCertificate(cert)}
                    disabled={!cert.certificateFile}
                  >
                    <FaExternalLinkAlt />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications