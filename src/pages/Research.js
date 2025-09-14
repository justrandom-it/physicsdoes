import './Research.css';

const researchData = [
  {
    id: 1,
    theory: "Theory of Everything",
    professor: "Stephen Hawking",
    quote: "My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.",
    description: "The quest to unify all fundamental forces of nature into a single theoretical framework."
  },
  {
    id: 2,
    theory: "String Theory",
    professor: "Edward Witten",
    quote: "String theory is a miracle through and through.",
    description: "A theoretical framework where point-like particles are replaced by one-dimensional strings."
  },
  {
    id: 3,
    theory: "Quantum Field Theory",
    professor: "Richard Feynman",
    quote: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    description: "The theoretical framework combining quantum mechanics with special relativity."
  },
  {
    id: 4,
    theory: "Cosmological Inflation",
    professor: "Alan Guth",
    quote: "The universe is the ultimate free lunch.",
    description: "Theory explaining the exponential expansion of space in the early universe."
  }
];

function Research() {
  return (
    <div className="research">
      <h1>Famous Research & Theories</h1>
      <div className="research-grid">
        {researchData.map(item => (
          <div key={item.id} className="research-card">
            <h3>{item.theory}</h3>
            <p className="professor">by {item.professor}</p>
            <blockquote>"{item.quote}"</blockquote>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
      
      <section className="physics-goal">
        <h2>The Ultimate Goal of Physics</h2>
        <p>
          Physics seeks to understand the fundamental nature of reality - from the smallest quantum particles 
          to the largest cosmic structures. The ultimate goal is to discover a "Theory of Everything" that 
          unifies all forces and explains why the universe exists and operates as it does.
        </p>
        <p>
          Through physics, we aim to answer the deepest questions: What is time? What is consciousness? 
          How did the universe begin? Are there multiple universes? These questions drive us to push 
          the boundaries of human knowledge and understanding.
        </p>
      </section>
    </div>
  );
}

export default Research;