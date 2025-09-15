import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import MusicPlayer from './components/MusicPlayer'
import TechStack from './components/TechStack'
import ScrollAnimation from './components/ScrollAnimation'

export default function App() {
  return (
    <div className='app'>
      <nav className='navigation'>
        <div className='nav-brand'>Eric Zheng</div>
        <div className='nav-links'>
          <a href='#hero' className='nav-link'>Home</a>
          <a href='#about' className='nav-link'>About</a>
          <a href='#tech' className='nav-link'>Tech Stack</a>
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
        
        <section id='tech' className='tech-section'>
          <div className='section-container'>
            <ScrollAnimation animation='slide-up' delay={0}>
              <h2 className='section-title'>Tech Stack</h2>
            </ScrollAnimation>
            <ScrollAnimation animation='scale-up' delay={2}>
              <TechStack />
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

