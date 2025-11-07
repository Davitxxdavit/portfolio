import React, { useState } from 'react'
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('validation')
      setTimeout(() => setSubmitStatus(''), 3000)
      return
    }

    setIsSubmitting(true)
    
    // Create Gmail compose URL
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form Message')
    const body = encodeURIComponent(
      `Hi Davit,\n\n` +
      `You received a new message from your portfolio website:\n\n` +
      `From: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    )
    
    // Try Gmail compose URL first
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=davitberidze1510@gmail.com&subject=${subject}&body=${body}`
    
    // Try to open Gmail compose
    const newWindow = window.open(gmailUrl, '_blank')
    
    // If popup blocked or failed, show alternative options
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
      setSubmitStatus('blocked')
    } else {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
    
    setIsSubmitting(false)
    
    // Clear message after 6 seconds
    setTimeout(() => {
      setSubmitStatus('')
    }, 6000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'davitberidze1510@gmail.com',
      link: 'mailto:davitberidze1510@gmail.com',
      color: '#ff77c6'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Batumi, Georgia',
      link: 'https://maps.google.com/?q=Batumi,Georgia',
      color: '#78dbff'
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/davit-beridze-8616332b5/',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/Davitxxdavit',
      color: '#333'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, interesting projects, and potential collaborations
        </p>

        <div className="contact-content">
          <div className="contact-info glass-card">
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for freelance work and full-time positions. 
              If you have a project in mind, need a React developer, or just want 
              to chat about web development, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item glass-effect">
                  <div className="contact-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link glass-effect"
                    style={{ '--hover-color': social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="glass-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="glass-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (Optional)"
                  className="glass-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message *"
                  className="glass-input"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <FaPaperPlane />
                {isSubmitting ? 'Opening Email...' : 'Send via Email'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message glass-effect">
                  ✨ Gmail compose opened in new tab! Please send your message.
                </div>
              )}
              
              {submitStatus === 'blocked' && (
                <div className="info-message glass-effect">
                  <div>
                    <p>📧 <strong>Please send email to:</strong></p>
                    <p style={{fontSize: '1.1em', fontWeight: 'bold', color: '#00d2ff'}}>davitberidze1510@gmail.com</p>
                    <p style={{fontSize: '0.9em', marginTop: '8px', opacity: '0.8'}}>
                      Or enable popups to use Gmail compose directly
                    </p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'validation' && (
                <div className="error-message glass-effect">
                  ⚠️ Please fill in all required fields (Name, Email, Message).
                </div>
              )}
              
              <div className="form-note">
                <p>
                  <strong>Quick Contact:</strong> 
                  📧 <span style={{color: '#00d2ff', fontWeight: 'bold'}}>davitberidze1510@gmail.com</span>
                </p>
                <p style={{fontSize: '0.9em', opacity: '0.8'}}>
                  Or use the form above to compose in Gmail directly
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact