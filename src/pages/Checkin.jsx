import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Checkin.css';



function CheckIn() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mood: ${mood}\nNote: ${note}`);
    setMood('');
    setNote('');
  };

  return (

    
    <section id="checkin" className="checkin-container">

      <div className="top-bar">
        <span> Find us | 📞 Hotline : +94 11 9153492</span>
      </div>
     
  <section className="welcome3">
          <div className="r-image">
            <img src="src/assets/n1.jpg" />
            


          </div>
          <div className="welcome3-content">

            <h1>Mood Check-In</h1>

         <h3>Life can feel heavy sometimes—but taking a moment to check in with yourself can bring clarity and peace.</h3>
<h4>This space is just for you—honest, gentle, and judgment-free.</h4>

            <p>
           Taking a moment to check in with your emotions helps you understand yourself 
          better. Every feeling you experience is important and deserves your attention. 
          Whether you're joyful, tired, or anything in between, acknowledging your mood 
          with kindness is a powerful step toward healing and growth. Remember, 
          self-care starts with self-awareness — be gentle with yourself today.
          </p>

          </div>
        </section>
   
      <div className='part2'>
        
       
        <section className="checkin-mood-section">
        
        <h3>Select Your Mood</h3>
        <div className="mood-buttons">
          {['😊', '😐', '😢', '😡', '😴'].map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => setMood(emoji)}
              className={`mood-btn ${mood === emoji ? 'selected' : ''}`}
              aria-pressed={mood === emoji}
              aria-label={`Select mood ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </section>

      <section className="checkin-notes-section">
        <h3>Write About Your Day</h3>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write something about your day..."
          rows={5}
          aria-label="Daily mood note"
          className="notes-textarea"
        />
      </section>

      <section className="checkin-submit-section">
        <button
          onClick={handleSubmit}
          disabled={!mood && !note.trim()}
          className="submit-btn"
        >
          Submit Check-In
        </button>
      </section>

      

      </div>

      <Footer />
    </section>
  );
}

export default CheckIn;
