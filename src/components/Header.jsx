import profile from '../assets/profile.png'
export default function Header() {
  return (
    <div className="header">
      <div className="profile-container">
        <img src={profile} alt="profile" />
      </div>
      <div className="name">
        <h1>Eric Zheng</h1>
        <h2 className="typing-effect">Full Stack Developer</h2>
      </div>
      <div className="contacts">
        <a href="mailto:erryzheng@gmail.com" className="email-btn">
          <i className="fas fa-envelope"></i>
          Email
        </a>
        <a href="https://www.linkedin.com/in/ericzheng0404/" 
        className="linkedin-btn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  )
}