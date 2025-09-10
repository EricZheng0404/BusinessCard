
export default function Main() {
  return (
    <div className="main">
      {/* About Section */}
      <div className="about">
        <h3>About</h3>
        <div>
          <p>
            🤓 Passionate about crafting impactful software solutions—from 
            intuitive <span style={{color: '#3B82F6', fontWeight: '600'}}>full-stack applications</span> 
            to resilient <span style={{color: '#3B82F6', fontWeight: '600'}}>distributed systems</span>—
            that empower people, uncover insights, and make technology 
            feel seamless. Experienced across React, Node.js, Python, and 
            cloud-native architectures.
          </p>
          <p>
            🐕 A curious soul beyond the code: a devoted <span style={{color: '#3B82F6', fontWeight: '600'}}>pet lover</span>, 
            <span style={{color: '#3B82F6', fontWeight: '600'}}> music enthusiast</span>, and <span style={{color: '#3B82F6', fontWeight: '600'}}>traveler</span>, 
            always seeking stories, rhythms, and adventures that inspire both life and work.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="interests">
        <h3>Philosophy</h3>
        <div>
          <p>
            💡 I believe in writing <span style={{color: '#3B82F6', fontWeight: '600'}}>clean, maintainable code</span> that not only solves problems 
            but tells a story. Every line should have purpose, every function should be elegant, 
            and every system should be built to last.
          </p>
          <p>
            🚀 Constantly learning and evolving, I embrace new technologies while respecting 
            the fundamentals that make great software possible.
          </p>
        </div>
      </div>
    </div>
  );
}