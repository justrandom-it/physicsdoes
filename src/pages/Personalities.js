import './Personalities.css';

const personalities = [
  {
    id: 1,
    name: "Albert Einstein",
    field: "Theoretical Physics",
    achievement: "Theory of Relativity",
    quote: "Imagination is more important than knowledge.",
    description: "Revolutionary physicist who developed the theory of relativity and won the Nobel Prize in Physics in 1921.",
    contributions: ["Special Relativity", "General Relativity", "Photoelectric Effect", "Mass-Energy Equivalence"]
  },
  {
    id: 2,
    name: "Marie Curie",
    field: "Radioactivity",
    achievement: "First woman to win Nobel Prize",
    quote: "Nothing in life is to be feared, it is only to be understood.",
    description: "Pioneer in radioactivity research, first woman to win a Nobel Prize and first person to win Nobel Prizes in two sciences.",
    contributions: ["Discovery of Radium", "Discovery of Polonium", "Radioactivity Research", "Mobile X-ray Units"]
  },
  {
    id: 3,
    name: "Stephen Hawking",
    field: "Cosmology",
    achievement: "Black Hole Thermodynamics",
    quote: "Intelligence is the ability to adapt to change.",
    description: "Theoretical physicist known for his work on black holes and cosmology, author of 'A Brief History of Time'.",
    contributions: ["Hawking Radiation", "Black Hole Information Paradox", "Singularity Theorems", "Popular Science Writing"]
  },
  {
    id: 4,
    name: "Richard Feynman",
    field: "Quantum Physics",
    achievement: "Quantum Electrodynamics",
    quote: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    description: "Nobel Prize winner known for his work in quantum mechanics and his ability to explain complex physics simply.",
    contributions: ["Feynman Diagrams", "Path Integral Formulation", "Parton Model", "Quantum Computing"]
  },
  {
    id: 5,
    name: "Niels Bohr",
    field: "Atomic Physics",
    achievement: "Atomic Structure Model",
    quote: "Prediction is very difficult, especially about the future.",
    description: "Danish physicist who made foundational contributions to understanding atomic structure and quantum theory.",
    contributions: ["Bohr Model", "Complementarity Principle", "Copenhagen Interpretation", "Nuclear Fission"]
  },
  {
    id: 6,
    name: "Isaac Newton",
    field: "Classical Mechanics",
    achievement: "Laws of Motion",
    quote: "If I have seen further it is by standing on the shoulders of Giants.",
    description: "English mathematician and physicist who formulated the laws of motion and universal gravitation.",
    contributions: ["Three Laws of Motion", "Universal Gravitation", "Calculus", "Optics"]
  }
];

function Personalities() {
  return (
    <div className="personalities">
      <h1>Featured Physics Personalities</h1>
      <p className="subtitle">Brilliant minds who shaped our understanding of the universe</p>
      
      <div className="personalities-grid">
        {personalities.map(person => (
          <div key={person.id} className="personality-card">
            <div className="personality-header">
              <h2>{person.name}</h2>
              <span className="field">{person.field}</span>
            </div>
            
            <div className="personality-content">
              <div className="achievement">
                <strong>Famous for:</strong> {person.achievement}
              </div>
              
              <blockquote>"{person.quote}"</blockquote>
              
              <p className="description">{person.description}</p>
              
              <div className="contributions">
                <h4>Key Contributions:</h4>
                <ul>
                  {person.contributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personalities;