// src/pages/Support.jsx
import React from 'react';
import './Support.css';
import Footer from '../components/Footer';

function Support() {
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
         <h4> You're never alone—this space is built to listen, care, and help.</h4>

            <p>
          Whether you're feeling overwhelmed, uncertain, or just need someone to talk to, support is 
      always within reach. Taking a step toward help is a brave and powerful choice. Here, 
      you'll find peer listeners, helpful resources, and emotional guidance to get you through 
      tough times. No matter what you're going through, your feelings are valid—and you deserve 
      kindness, understanding, and healing. Let’s take that first step together.
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
  href="https://www.7cups.com"  // Replace with your preferred peer support site
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
  href="https://www.7cups.com"  // Replace with your preferred peer support site
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
    <Footer/>
    </>
  );
}

export default Support;
