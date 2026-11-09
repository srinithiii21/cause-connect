
import { type FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [volunteerMessage, setVolunteerMessage] = useState('')
  const [partnerMessage, setPartnerMessage] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  function saveForm(
    event: FormEvent<HTMLFormElement>,
    storageKey: string,
    setMessage: (message: string) => void
  ) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const submission = Object.fromEntries(formData.entries())

    try {
      const existing = JSON.parse(
        localStorage.getItem(storageKey) || '[]'
      )

      existing.push({
        ...submission,
        submittedAt: new Date().toISOString()
      })

      localStorage.setItem(storageKey, JSON.stringify(existing))

      setMessage('Thank you! Your submission has been saved.')
      form.reset()
    } catch {
      setMessage('Unable to save your submission. Please try again.')
    }
  }

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
          <a href="#programs">Our Programs</a>
          <a href="#impact">Our Impact</a>
          <a href="#news">News</a>
          <a href="#involved">Get Involved</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#involved" className="nav-button">
          Join Us →
        </a>
      </nav>

      {/* ORIGINAL HERO SECTION - PRESERVED */}
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
            <a href="#programs" className="primary-button">
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

      {/* ABOUT US */}
      <section className="about" id="about">
        <p className="eyebrow">WHO WE ARE</p>
        <h2>Connecting Hearts, Creating Impact.</h2>

        <p>
          CauseConnect is a community engagement platform
          created to bring people and meaningful causes together.
          Inspired by the work of Surabhi Foundation, we believe
          that small acts of kindness can create lasting change.
        </p>

        <div className="about-details">
          <div className="info-card">
            <span>🌱</span>
            <h3>Our Mission</h3>
            <p>
              Encourage people to participate in meaningful
              community initiatives.
            </p>
          </div>

          <div className="info-card">
            <span>💚</span>
            <h3>Our Vision</h3>
            <p>
              Build a connected community where everyone
              has an opportunity to make a difference.
            </p>
          </div>

          <div className="info-card">
            <span>🤝</span>
            <h3>Our Values</h3>
            <p>
              Compassion, collaboration, transparency
              and community development.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS */}
      <section className="causes" id="programs">
        <p className="eyebrow">MAKE A DIFFERENCE</p>
        <h2>Explore Our Programs</h2>

        <p className="section-description">
          Discover meaningful ways to support communities
          and create positive change.
        </p>

        <div className="cause-grid">

          <div className="cause-card">
            <div className="cause-icon">📚</div>
            <h3>Education</h3>
            <p>
              Support learning opportunities, educational
              resources and brighter futures for children.
            </p>
            <a href="#involved" className="card-link">
              Participate →
            </a>
          </div>

          <div className="cause-card">
            <div className="cause-icon">🌳</div>
            <h3>Environment</h3>
            <p>
              Encourage environmental awareness,
              greener communities and sustainability.
            </p>
            <a href="#involved" className="card-link">
              Participate →
            </a>
          </div>

          <div className="cause-card">
            <div className="cause-icon">❤️</div>
            <h3>Community Care</h3>
            <p>
              Help support individuals and families
              through community-focused initiatives.
            </p>
            <a href="#involved" className="card-link">
              Participate →
            </a>
          </div>

        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="impact" id="impact">
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

      <section className="stories">
        <p className="eyebrow">THE DIFFERENCE WE MAKE</p>
        <h2>Every Small Action Matters.</h2>

        <div className="story-grid">
          <div className="story-card">
            <span>📖</span>
            <h3>Education for All</h3>
            <p>
              Creating opportunities for children
              to learn, grow and reach their potential.
            </p>
          </div>

          <div className="story-card">
            <span>🌿</span>
            <h3>A Greener Tomorrow</h3>
            <p>
              Bringing communities together
              to care for the environment.
            </p>
          </div>

          <div className="story-card">
            <span>💚</span>
            <h3>Stronger Communities</h3>
            <p>
              Building connections through
              kindness and collective action.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS AND UPDATES */}
      <section className="news-section" id="news">
        <p className="eyebrow">STAY CONNECTED</p>
        <h2>News & Updates</h2>

        <p className="section-description">
          Follow our activities, initiatives and community stories.
        </p>

        <div className="news-grid">
          <article className="news-card">
            <span className="news-tag">Community</span>
            <h3>Community Initiatives</h3>
            <p>
              Discover the activities and initiatives
              bringing people together for positive change.
            </p>
          </article>

          <article className="news-card">
            <span className="news-tag">Volunteering</span>
            <h3>Volunteer Highlights</h3>
            <p>
              Celebrate the people who contribute
              their time and effort to meaningful causes.
            </p>
          </article>

          <article className="news-card">
            <span className="news-tag">Announcements</span>
            <h3>Latest Announcements</h3>
            <p>
              Stay informed about upcoming activities
              and opportunities to participate.
            </p>
          </article>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="involved-section" id="involved">
        <p className="eyebrow">BE PART OF THE CHANGE</p>
        <h2>Get Involved With Us.</h2>

        <p className="section-description">
          Your time, skills and ideas can help create
          a stronger and more caring community.
        </p>

        <div className="forms-grid">

          {/* VOLUNTEER FORM */}
          <div className="form-card">
            <h3>Become a Volunteer</h3>
            <p>Tell us a little about yourself.</p>

            <form onSubmit={(e) =>
              saveForm(e, 'causeconnect_volunteers', setVolunteerMessage)
            }>
              <label htmlFor="vol-name">Full Name</label>
              <input id="vol-name" name="name" type="text"
                placeholder="Enter your name" required />

              <label htmlFor="vol-email">Email Address</label>
              <input id="vol-email" name="email" type="email"
                placeholder="Enter your email" required />

              <label htmlFor="vol-phone">Phone Number</label>
              <input id="vol-phone" name="phone" type="tel"
                placeholder="Enter your phone number" required />

              <label htmlFor="vol-interest">Area of Interest</label>
              <select id="vol-interest" name="interest" required>
                <option value="">Select a program</option>
                <option>Education</option>
                <option>Environment</option>
                <option>Community Care</option>
                <option>Other</option>
              </select>

              <button type="submit" className="form-button">
                Register as Volunteer →
              </button>

              {volunteerMessage && (
                <p className="form-message" role="status">
                  {volunteerMessage}
                </p>
              )}
            </form>
          </div>

          {/* PARTNERSHIP FORM */}
          <div className="form-card">
            <h3>Become a Partner</h3>
            <p>Let's work together to create impact.</p>

            <form onSubmit={(e) =>
              saveForm(e, 'causeconnect_partners', setPartnerMessage)
            }>
              <label htmlFor="partner-name">Name</label>
              <input id="partner-name" name="name" type="text"
                placeholder="Your name" required />

              <label htmlFor="partner-org">Organisation</label>
              <input id="partner-org" name="organisation" type="text"
                placeholder="Organisation name" required />

              <label htmlFor="partner-email">Email Address</label>
              <input id="partner-email" name="email" type="email"
                placeholder="Your email" required />

              <label htmlFor="partner-type">Partnership Interest</label>
              <select id="partner-type" name="partnership" required>
                <option value="">Select an option</option>
                <option>Corporate Partnership</option>
                <option>NGO Collaboration</option>
                <option>Event Collaboration</option>
                <option>Other</option>
              </select>

              <button type="submit" className="form-button">
                Send Partnership Enquiry →
              </button>

              {partnerMessage && (
                <p className="form-message" role="status">
                  {partnerMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* DONATION - POSTPONED */}
      <section className="donate-section" id="donate">
        <p className="eyebrow">SUPPORT OUR MISSION</p>
        <h2>Every Contribution Matters.</h2>
        <p>
          Donation functionality is coming soon.
          Stay connected with CauseConnect.
        </p>
      </section>

      {/* CONTACT US */}
      <section className="contact-section" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>We'd Love to Hear From You.</h2>

        <div className="contact-layout">

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have a question, suggestion or idea for collaboration?
              Send us a message.
            </p>
            <p>💚 Connecting people. Inspiring change.</p>
          </div>

          <div className="form-card">
            <form onSubmit={(e) =>
              saveForm(e, 'causeconnect_contacts', setContactMessage)
            }>
              <label htmlFor="contact-name">Your Name</label>
              <input id="contact-name" name="name" type="text"
                placeholder="Enter your name" required />

              <label htmlFor="contact-email">Email Address</label>
              <input id="contact-email" name="email" type="email"
                placeholder="Enter your email" required />

              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text"
                placeholder="What is this about?" required />

              <label htmlFor="contact-message">Your Message</label>
              <textarea id="contact-message" name="message"
                placeholder="Write your message here..."
                rows={5} required />

              <button type="submit" className="form-button">
                Send Message →
              </button>

              {contactMessage && (
                <p className="form-message" role="status">
                  {contactMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h2>CauseConnect.</h2>
        <p>Connecting people. Inspiring change.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#news">News</a>
          <a href="#involved">Get Involved</a>
          <a href="#contact">Contact</a>
        </div>

        <p>© 2026 CauseConnect. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
