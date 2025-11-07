import React from 'react'
import './Services.css'
import { 
  FaReact, 
  FaCode, 
  FaMobile, 
  FaPaintBrush, 
  FaRocket, 
  FaSearch,
  FaTools,
  FaLaptopCode,
  FaChartLine,
  FaBug,
  FaUsers,
  FaArrowRight
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaReact />,
      title: "React Development",
      description: "Building modern, scalable web applications using React.js with hooks, context API, and component-based architecture.",
      features: [
        "Component-based architecture",
        "State management with hooks",
        "Performance optimization",
        "Custom hooks development"
      ],
      color: "#61DAFB",
      gradient: "linear-gradient(135deg, #61DAFB, #21232A)"
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating beautiful, interactive user interfaces with modern JavaScript, HTML5, and CSS3 technologies.",
      features: [
        "Modern JavaScript ES6+",
        "HTML5 semantic markup",
        "CSS3 animations & transitions",
        "Cross-browser compatibility"
      ],
      color: "#F7DF1E",
      gradient: "linear-gradient(135deg, #F7DF1E, #323330)"
    },
    {
      id: 3,
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect and functions flawlessly across all devices and screen sizes.",
      features: [
        "Mobile-first approach",
        "Flexible grid systems",
        "Touch-friendly interfaces",
        "Progressive enhancement"
      ],
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35, #1F4056)"
    },
    {
      id: 4,
      icon: <FaPaintBrush />,
      title: "UI/UX Implementation",
      description: "Transforming designs into pixel-perfect, interactive experiences that delight users and drive engagement.",
      features: [
        "Pixel-perfect implementation",
        "Design system integration",
        "Accessibility compliance",
        "User experience optimization"
      ],
      color: "#9C27B0",
      gradient: "linear-gradient(135deg, #9C27B0, #673AB7)"
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and superior user experience across all platforms.",
      features: [
        "Code splitting & lazy loading",
        "Bundle size optimization",
        "Core Web Vitals improvement",
        "Caching strategies"
      ],
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50, #2E7D32)"
    },
    {
      id: 6,
      icon: <FaTools />,
      title: "Code Review & Consulting",
      description: "Providing expert code reviews, architecture consulting, and best practices guidance for development teams.",
      features: [
        "Code quality assessment",
        "Architecture recommendations",
        "Best practices guidance",
        "Team mentoring"
      ],
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800, #F57C00)"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.",
      icon: <FaSearch />
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating wireframes, prototypes, and developing the solution using modern technologies and best practices.",
      icon: <FaLaptopCode />
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Rigorous testing across devices and browsers, performance optimization, and quality assurance.",
      icon: <FaBug />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support, maintenance, and performance monitoring.",
      icon: <FaRocket />
    }
  ]

  const handleContactClick = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Services & Expertise</h2>
          <p className="section-subtitle">
            Comprehensive frontend development services to bring your digital vision to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon" style={{ background: service.gradient }}>
                {service.icon}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <FaArrowRight className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-overlay" style={{ background: service.gradient }}></div>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h3 className="process-title">My Development Process</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how I can help bring your ideas to life with modern web technologies.</p>
            <button onClick={handleContactClick} className="cta-button">
              <span>Get In Touch</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services