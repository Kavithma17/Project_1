
import React, { useState, useEffect } from 'react';
import './Relax.css';
import Footer from '../components/Footer';

const quotes = [
  "You are enough, just as you are.",
  "Breathe in calm, breathe out stress.",
  "Rest is productive.",
  "You are doing your best, and that is enough.",
  "Your mind deserves peace too."
];

function Relax() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="top-bar">
        <span> Find us | 📞 Hotline : +94 11 9153492</span>
      </div>
      <section id="relax" className="relax-section">

        

        <section className="welcome2">
          <div className="r-image">
            <img src="src/assets/r1.jpg" />


          </div>
          <div className="welcome2-content">

            <h1>Relax & Recharge</h1>

            <h3>Life can be overwhelming—but even a short pause can restore clarity and calm.</h3>
            <h4>Here's something just for you:</h4>
            <p>



              Here’s what you’ll find:<br></br>
              🧘‍♀️ Guided Breathing & Mindfulness Exercises<br></br>
              

              🎧 Soothing Soundscapes<br></br>
              

              💬 Gentle Check-ins<br></br>
              

              💞 Supportive Community Spaces<br></br>
              


            </p>

          </div>
        </section>


        <div className="quote-box">
          <p className="quote-text">{quotes[quoteIndex]}</p>

        </div>
        <div className="top-bar">
          <span>
            <h2> EXERCICES FOR YOU</h2>
          </span>
        </div>

        <div className="services-section">
          <div className="services-intro">
            <p>We’re committed to nurturing your well-being through calming,
               at-home exercises designed to help you relax, recharge, and reconnect 
               with yourself.</p>
          </div>
          <div className="services-list">
            {[
              { image: "src/assets/ex11.jpg", title: "Stretch & Breathe Routine" },
              { image: "src/assets/ex2.jpg", title: "Beginner Yoga Flow" },
              { image: "src/assets/ex3.jpg", title: "Dance for Joy – Feel-Good Moves" },
              { image: "src/assets/ex4.jpg", title: "Doing creative things" },
              { image: "src/assets/ex5.jpg", title: "Guided Meditation for Anxiety" },
              { image: "src/assets/ex6.jpg", title: "Self-Massage Techniques" },
              { image: "src/assets/ex77.jpg", title: "5-Minute Energy Booster Workout" },
              { image: "src/assets/ex8.jpg", title: "Playing Music Instruments" },

            ].map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
<Footer/>
      </section>
      
    </>
  );
}

export default Relax;
