import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Physics Hub</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Physics Hub is dedicated to making the fascinating world of physics accessible 
            to everyone. From the quantum realm to the cosmos, we explore the fundamental 
            laws that govern our universe. Our goal is to inspire curiosity and deepen 
            understanding of the physical world around us.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Comprehensive physics topics from beginner to advanced</li>
            <li>Clear explanations with real-world applications</li>
            <li>Interactive learning experiences</li>
            <li>Latest discoveries in modern physics</li>
            <li>Educational resources for all levels</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Physics Matters</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>⚛️ Understanding Reality</h3>
              <p>Discover how the universe works at every scale</p>
            </div>
            <div className="feature">
              <h3>🚀 Innovation Driver</h3>
              <p>Physics powers technological advancement</p>
            </div>
            <div className="feature">
              <h3>🧠 Critical Thinking</h3>
              <p>Develop problem-solving and analytical skills</p>
            </div>
            <div className="feature">
              <h3>🌌 Cosmic Perspective</h3>
              <p>Gain insights into our place in the universe</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;