// src/pages/Support.jsx
import React, { useState } from 'react';
import './Support.css';
import Footer from '../components/Footer';

function Support() {
  // Simulate login (set to true if logged in, false otherwise)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
     alert("Thank you for trusting us. Keep an eye on your email — we'll reach out to you soon!");
      return;
    }

    
    alert(`Message sent!\nFrom: ${username} (${email})\nMessage: ${message}`);
    
    // Clear form
    setEmail('');
    setUsername('');
    setMessage('');
  };

  return (
    <>
      <div className="top-bar">
        <span> Find us | 📞 Hotline : +94 11 9153492</span>
      </div>

      <section className="welcome3">
        <div className="r-image">
          <img src="src/assets/ss1.jpg" />
        </div>
        <div className="welcome3-content">
          <h1>We're Here to Support You</h1>
          <h3>Everyone needs a safe space to talk, feel heard, and find strength again.</h3>
          <h4>You're never alone—this space is built to listen, care, and help.</h4>
          <p>
            Whether you're feeling overwhelmed, uncertain, or just need someone to talk to,
            support is always within reach. Taking a step toward help is a brave and powerful
            choice. Here, you'll find peer listeners, helpful resources, and emotional guidance
            to get you through tough times. No matter what you're going through, your feelings
            are valid—and you deserve kindness, understanding, and healing. Let’s take that
            first step together.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2 className="support-heading">🤝 You're Not Alone</h2>
        <p className="support-description">
          BloomWell is here to connect you with support, whether it's a friend to talk to,
          helpful resources, or professional care. You matter 💖
        </p>

        <div className="support-grid">
          <div className="support-card">
            <h3 className="card-title">🌼 Peer Listening</h3>
            <p className="card-text">
              Talk with a trained peer who understands student life and mental health challenges.
            </p>
            <a
              href="https://www.7cups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
            >
              Request Support
            </a>
          </div>

          <div className="support-card">
            <h3 className="card-title">📚 Self-Help Resources</h3>
            <p className="card-text">
              Explore guides, coping tips, and mental health tools curated for female students.
            </p>
            <a
              href="https://www.7cups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
            >
              View Resources
            </a>
          </div>
        </div>

        <div className="emergency-box">
          <p className="emergency-text">
            🚨 In urgent need of help? Contact counseling services or a trusted adult immediately.
          </p>
        </div>
      </section>

    <section className="contact-doctor-section">
  <h2 className="support-heading">📝 Share Your Concerns</h2>
  <p className="support-description">
    Want to speak directly to our doctor? Type your problem below—we're here to listen and help.
  </p>
  <p className="login-reminder">
  ⚠️ Make sure to <strong>log in</strong>. If not, we may not process your response properly.
</p>
  <form className="doctor-form" onSubmit={handleSubmit}>
    <input
      type="email"
      placeholder="Your email"
      className="problem-input"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="text"
      placeholder="Your username"
      className="problem-input"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <textarea
      className="problem-input"
      placeholder="Describe your issue here..."
      rows="6"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
    <button type="submit" className="submit-button">
      Send to Doctor
    </button>
  </form>
</section>


      <Footer />
    </>
  );
}

export default Support;
