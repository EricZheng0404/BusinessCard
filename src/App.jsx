import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import MusicPlayer from './components/MusicPlayer'
import TechStack from './components/TechStack'
import ScrollAnimation from './components/ScrollAnimation'
import distribcacheImg from './assets/distribcache.png'
import carRentalImg from './assets/car_rental.png'
// import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className='app'>
      <nav className='navigation'>
        <div className='nav-brand'>Eric Zheng</div>
        <div className='nav-links'>
          <a href='#hero' className='nav-link'>Home</a>
          <a href='#about' className='nav-link'>About</a>
          <a href='#tech' className='nav-link'>Tech Stack</a>
          <a href='#projects' className='nav-link'>Projects</a>
          {/* <a href='#testimonials' className='nav-link'>Testimonials</a> */}
          <a href='#contact' className='nav-link'>Contact</a>
        </div>
      </nav>
      
      <main className='main-content'>
        <section id='hero' className='hero-section'>
          <ScrollAnimation animation='fade-in-delayed' delay={0}>
            <Header />
          </ScrollAnimation>
        </section>
        
        <section id='about' className='about-section'>
          <div className='section-container'>
            <ScrollAnimation animation='slide-up' delay={0}>
              <h2 className='section-title'>About Me</h2>
            </ScrollAnimation>
            <ScrollAnimation animation='fade-in-delayed' delay={2}>
              <Main />
            </ScrollAnimation>
          </div>
        </section>
        
        <section id='tech' className='tech-section' style={{paddingBottom: '100px', paddingTop: '100px'}}>
          <div className='section-container'>
            <ScrollAnimation animation='slide-up' delay={0}>
              <h2 className='section-title'>Tech Stack</h2>
            </ScrollAnimation>
            <ScrollAnimation animation='scale-up' delay={2}>
              <TechStack />
            </ScrollAnimation>
          </div>
        </section>
        
        <section id='projects' className='projects-section'>
          <div className='section-container'>
            <ScrollAnimation animation='slide-up' delay={0}>
              <h2 className='section-title'>Featured Projects</h2>
            </ScrollAnimation>
            <ScrollAnimation animation='fade-in-delayed' delay={2}>
              <div className='projects-grid'>
                <div className='project-card project-card--featured'>
                  <a href='https://car-rental-gs.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    <img
                      src={carRentalImg}
                      alt='Car Rental app screenshot'
                      className='project-screenshot'
                    />
                  </a>
                  <h3>Car Rental</h3>
                  <p>A full-stack car rental application with booking management and user authentication.</p>
                  <a href='https://car-rental-gs.vercel.app/' 
                     className='project-link' 
                     target='_blank' 
                     rel='noopener noreferrer'>
                    <i className='fas fa-external-link-alt'></i> View Project
                  </a>
                </div>
                <div className='project-card project-card--featured'>
                  <a href='https://distribcache.fly.dev/' target='_blank' rel='noopener noreferrer'>
                    <img
                      src={distribcacheImg}
                      alt='DistribCache dashboard screenshot'
                      className='project-screenshot'
                    />
                  </a>
                  <h3>DistribCache</h3>
                  <p>A distributed caching system for high-performance data storage and retrieval.</p>
                  <a href='https://distribcache.fly.dev/' 
                     className='project-link' 
                     target='_blank' 
                     rel='noopener noreferrer'>
                    <i className='fab fa-github'></i> View on GitHub
                  </a>
                </div>
                <div className='project-card'>
                  <div className='project-icon'>
                    <i className='fas fa-code'></i>
                  </div>
                  <h3>LibreSignal</h3>
                  <p>A practice framework for CodeSignal's Industry Coding Framework (ICF) assessments.</p>
                  <a href='https://github.com/EricZheng0404/LibreSignal' 
                     className='project-link' 
                     target='_blank' 
                     rel='noopener noreferrer'>
                    <i className='fab fa-github'></i> View on GitHub
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
        
        <section id='contact' className='contact-section'>
          <div className='section-container'>
            <ScrollAnimation animation='slide-up' delay={0}>
              <h2 className='section-title'>Let's Connect</h2>
            </ScrollAnimation>
            <ScrollAnimation animation='fade-in-delayed' delay={2}>
              <Footer />
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <MusicPlayer />
    </div>
  )
}

