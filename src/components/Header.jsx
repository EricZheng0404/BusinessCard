import profile from '../assets/profile.png'
export default function Header() {
  return (
    <div>
      <img src={profile} alt="profile" />
      <div className="name">
        <h1>Eric Zheng</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="contacts">
        <button className="email-btn">
          <i className="fas fa-envelope"></i>
          Email
        </button>
        <button className="linkedin-btn">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </div>
  )
}