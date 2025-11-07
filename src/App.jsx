import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
      {/* Background Decorative Elements */}
      <div className="geometric-bg">
        <div className="geometric-shape circle shape-1"></div>
        <div className="geometric-shape circle-fill shape-2"></div>
        <div className="geometric-shape circle shape-3"></div>
        <div className="geometric-shape circle-fill shape-4"></div>
        <div className="geometric-shape line shape-5"></div>
        <div className="geometric-shape line shape-6"></div>
        <div className="geometric-shape diamond shape-7"></div>
        <div className="geometric-shape circle shape-8"></div>
        
        {/* Additional floating elements */}
        <div className="geometric-shape dot pulse-dot dot-1"></div>
        <div className="geometric-shape dot pulse-dot dot-2"></div>
        <div className="geometric-shape dot pulse-dot dot-3"></div>
        <div className="geometric-shape triangle triangle-1"></div>
        <div className="geometric-shape triangle triangle-2"></div>
        
        {/* Connecting lines */}
        <div className="connecting-line line-1"></div>
        <div className="connecting-line line-2"></div>
        <div className="connecting-line line-3"></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
