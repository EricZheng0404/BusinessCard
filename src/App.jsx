import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
      <div className='container'>
        <Header />
        <Main />
        <Footer />
        <MusicPlayer />
      </div>
  )
}

