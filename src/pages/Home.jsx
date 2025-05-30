import React, { useState } from 'react';
import './Home.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedf, setSelectedf] = useState('MindHug Features');
const [fDetails, setfDetails] = useState('MindHug is designed to support female students by offering a safe, inclusive, and empowering digital space. Our platform focuses on peer connection, emotional well-being, and self-care. With features like anonymous chats, peer groups, mental health resources, and personalized self-care tools, MindHug fosters a culture of empathy and support. Explore each feature to discover how we’re helping students thrive mentally and emotionally.');


  const [backgroundImage, setBackgroundImage] = useState('public/assets/h1.jpg'); 


 
  const fInfo = {
  "🫂 Join Peer Support Groups": {
    description: `Connect with others who understand your journey. Our peer support groups create a safe space to share experiences, build friendships, and find encouragement from fellow students facing similar challenges.`,
    image: "public/assets/f1.jpg"
  },
  "💬 Anonymous Chat with Peers": {
    description: `Engage in real-time, anonymous conversations with peers. Whether you're seeking advice or just need to vent, our chat feature offers a supportive and confidential environment.`,
    image: "public/assets/f21.jpg"
  },
  "📘 Mental Health Resources": {
    description: `Access a curated library of articles, videos, and guides focused on mental well-being. Learn about coping strategies, emotional regulation, and tips to maintain a balanced student life.`,
    image: "public/assets/f3.jpg"
  },
  "🧠 Self-Care Tools ": {
    description: `Take charge of your mental health with personalized self-care tools. From mood tracking to meditation guides, explore features designed to help you manage stress and stay resilient.`,
    image: "public/assets/f4.jpg"
  }
};

 const newsArticles = [
  {
    id: 1,
    title: "MindHug Support Circle Launch",
    date: "May 20, 2025",
    description: "We’ve launched peer support groups for safe, open conversations on mental health and emotional well-being.",
    image: "public/assets/n1.jpg"
  },
  {
    id: 2,
    title: "Bloomwell Self-Care Saturday",
    date: "May 25, 2025",
    description: "A full-day workshop with yoga, journaling, and mindfulness sessions to help students recharge and reconnect.",
    image: "public/assets/n2.jpg"
  },
  {
    id: 3,
    title: "TalkSpace Room Now Open",
    date: "June 1, 2025",
    description: "A cozy drop-in space on campus where you can talk, unwind, or simply sit in silence when life gets too loud.",
    image: "public/assets/l3.jpg"
  }
];

  
  

  const showfDetails = (f) => {
    setSelectedf(f);
    setfDetails(fInfo[f].description);
    setBackgroundImage(fInfo[f].image); 
  };

  return (
    <>
     
      <div className="top-bar">
        <span> Find us | 📞 Hotline : +94 11 9153492</span>
        
      </div>

      
      <section className="home">
        <div className="home-content">
          <h6>
            LET’S TALK,<br></br> UNWIND AND<br></br> TAKE CARE TOGETHER<br />
           
          </h6>
          <h1> A warm space to support girls' mental wellness. Check in, relax, and find care.</h1>

          <button
            className="home-button"
            onClick={() => document.getElementById('footer-section').scrollIntoView({ behavior: 'smooth' })}
          >
            CALL US NOW
          </button>
        </div>
        <div className="home-image">
          <img src="public/assets/c.jpg"/>
           
           <img src="public/assets/d.jpg" />
        </div>
      </section>

     
      <section className="welcome">
         <div className="home-image">
          <img src="public/assets/a1.jpg"/>
           
           
          </div>
         <div className="welcome-content">
           
          <h1>Welcome to BloomWell</h1>
           
          <h3>Caring for Her Mind, Nurturing Her Strength</h3>
          <h4>Empathy, Empowerment & Emotional Wellness</h4>
          <p>
            Since its inception, BloomWell has been a safe space built to support and uplift
             the mental health of young women. Rooted in empathy and driven by innovation,
              our mission is to provide personalized emotional support, mental wellness tools,
               and a community that listens and understands. From guided mood check-ins to
                calming spaces and peer support networks, BloomWell brings together technology 
                and compassion to help every girl feel heard, valued, and strong. Here, 
                we believe mental wellness is not a luxury—but a right, and every journey matters.
          </p>
          
          </div>
      </section>

      
      <div className="top-bar">
        <span>
          <h2> KEY FEATURES </h2>
        </span>
      </div>

      <div className="f-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="f-list">
          <ul>
            {Object.keys(fInfo).map((f) => (
              <li key={f} onClick={() => showfDetails(f)}>
                {f}
              </li>
              
            ))}
          </ul>
        </div>

     
        <div className="f-details">
          <h2>{selectedf}</h2>
          <p>{fDetails}</p>
        </div>
      </div>

      

     
      <div className="top-bar">
        <span>
          <h2 > LATEST NEWS </h2>
        </span>
      </div>

      <div className="latest-news-section">
        <div className="news-list">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-item">
              <img src={article.image} alt={article.title} className="news-image" />
              <h3>{article.title}</h3>
              <p className="news-date">{article.date}</p>
              <p className="news-description">{article.description}</p>
             
            </div>
          ))}
        </div>
      </div>
      <Footer id="footer-section" />
    </>
  );
};

export default Home;