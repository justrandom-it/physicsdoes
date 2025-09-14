import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Physics Does</h1>
        <p>Explore the fundamental laws that govern reality</p>
        <div className="hero-buttons">
          <Link to="/concepts" className="btn primary">Explore Concepts</Link>
          <Link to="/problems" className="btn secondary">Solve Problems</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>🧠 Physics Concepts</h3>
          <p>Deep dive into fundamental physics principles</p>
        </div>
        <div className="feature-card">
          <h3>🔬 Research Theories</h3>
          <p>Famous theories by renowned professors</p>
        </div>
        <div className="feature-card">
          <h3>📰 Popular Articles</h3>
          <p>Latest discoveries and physics insights</p>
        </div>
        <div className="feature-card">
          <h3>🧮 Real Physics</h3>
          <p>Advanced problems to challenge your skills</p>
        </div>
        <div className="feature-card">
          <h3>🌌 Ultimate Goal</h3>
          <p>Understanding the universe through physics</p>
        </div>
      </section>
    </div>
  );
}

export default Home;