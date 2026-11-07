import './App.css'

function App() {
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Cause<span>Connect.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#causes">Causes</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#volunteer" className="nav-button">
          Join Us →
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="eyebrow">
            TOGETHER, WE CAN MAKE A DIFFERENCE
          </p>

          <h1>
            Small Acts.<br />
            <span>Big Changes.</span>
          </h1>

          <p className="hero-description">
            Every helping hand creates a better tomorrow.
            Connect with meaningful causes, support communities
            and become a part of something bigger.
          </p>

          <div className="hero-buttons">
            <a href="#causes" className="primary-button">
              Explore Causes →
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>

          <div className="hero-note">
            ♥ Making kindness count, one action at a time.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="visual-emoji">🤝</div>
            <h2>Be the Change</h2>
            <p>Give hope. Share kindness.</p>
          </div>

          <div className="floating-card card-one">
            🌱 Grow Together
          </div>

          <div className="floating-card card-two">
            ❤️ Spread Kindness
          </div>
        </div>

      </section>

      {/* IMPACT SECTION */}
      <section className="impact">
        <div>
          <h2>500+</h2>
          <p>Lives Impacted</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Active Volunteers</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Community Initiatives</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Years of Service</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <p className="eyebrow">WHO WE ARE</p>
        <h2>Connecting Hearts, Creating Impact.</h2>

        <p>
          CauseConnect brings people and meaningful causes together.
          We believe that everyone has the power to create positive
          change through volunteering, awareness and community action.
        </p>
      </section>

      {/* CAUSES SECTION */}
      <section className="causes" id="causes">
        <p className="eyebrow">MAKE A DIFFERENCE</p>
        <h2>Explore Our Causes</h2>

        <div className="cause-grid">
          <div className="cause-card">
            <div className="cause-icon">📚</div>
            <h3>Education</h3>
            <p>Help children access learning opportunities and resources.</p>
          </div>

          <div className="cause-card">
            <div className="cause-icon">🌳</div>
            <h3>Environment</h3>
            <p>Support greener communities and a sustainable future.</p>
          </div>

          <div className="cause-card">
            <div className="cause-icon">❤️</div>
            <h3>Community Care</h3>
            <p>Stand together to support people in need.</p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER SECTION */}
      <section className="volunteer" id="volunteer">
        <h2>Be Someone's Reason to Smile.</h2>
        <p>Your time, kindness and effort can change someone's life.</p>
        <a href="#contact">Become a Volunteer →</a>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <h2>CauseConnect.</h2>
        <p>Connecting people. Inspiring change.</p>
        <p>© 2026 CauseConnect. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App