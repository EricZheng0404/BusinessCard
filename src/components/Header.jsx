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
        <button type="button" className="email-btn">
          <i className="fas fa-envelope"></i>
          Email
        </button>
        <button type="button" className="linkedin-btn">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </div>
  )
}