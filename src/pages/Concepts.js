import { useState } from 'react';
import './Concepts.css';

const physicsTopics = [
  {
    id: 1,
    title: "Quantum Mechanics",
    description: "The behavior of matter and energy at the atomic and subatomic level",
    content: "Quantum mechanics reveals that particles can exist in multiple states simultaneously (superposition) until observed. Wave-particle duality shows that matter exhibits both wave and particle properties. The uncertainty principle states that we cannot simultaneously know both position and momentum with perfect accuracy. Quantum entanglement demonstrates that particles can be mysteriously connected across vast distances.",
    category: "Modern Physics",
    keyPoints: ["Superposition", "Wave-particle duality", "Uncertainty principle", "Quantum entanglement"]
  },
  {
    id: 2,
    title: "Theory of Relativity",
    description: "Einstein's revolutionary understanding of space, time, and gravity",
    content: "Special relativity shows that time and space are interwoven into spacetime. Time dilation occurs at high speeds, and length contraction affects moving objects. General relativity describes gravity not as a force, but as the curvature of spacetime caused by mass and energy. This theory predicted black holes, gravitational waves, and the expansion of the universe.",
    category: "Modern Physics",
    keyPoints: ["Spacetime", "Time dilation", "Gravitational curvature", "Black holes"]
  },
  {
    id: 3,
    title: "Thermodynamics",
    description: "The study of heat, energy, and their transformations",
    content: "The four laws of thermodynamics govern energy transfer and entropy. The first law states energy cannot be created or destroyed. The second law explains why time has a direction and why perpetual motion machines are impossible. Entropy always increases in isolated systems, leading to the heat death of the universe.",
    category: "Classical Physics",
    keyPoints: ["Conservation of energy", "Entropy increase", "Heat engines", "Statistical mechanics"]
  },
  {
    id: 4,
    title: "Electromagnetism",
    description: "The unified theory of electric and magnetic phenomena",
    content: "Maxwell's equations describe how electric and magnetic fields propagate through space as electromagnetic waves. Light is an electromagnetic wave, and the electromagnetic spectrum includes radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays. Electromagnetic induction is the basis for generators and transformers.",
    category: "Classical Physics",
    keyPoints: ["Maxwell's equations", "Electromagnetic waves", "Light spectrum", "Electromagnetic induction"]
  },
  {
    id: 5,
    title: "Particle Physics",
    description: "The study of fundamental particles and forces",
    content: "The Standard Model describes all known fundamental particles and three of the four fundamental forces. Quarks combine to form protons and neutrons, while leptons include electrons and neutrinos. The Higgs boson gives mass to other particles. Particle accelerators like the LHC probe the deepest levels of reality.",
    category: "Modern Physics",
    keyPoints: ["Standard Model", "Quarks and leptons", "Higgs boson", "Fundamental forces"]
  },
  {
    id: 6,
    title: "Cosmology",
    description: "The study of the universe's origin, evolution, and fate",
    content: "The Big Bang theory explains how the universe began 13.8 billion years ago from a singularity. Cosmic microwave background radiation provides evidence for this theory. Dark matter and dark energy make up 95% of the universe. The universe is expanding and may continue forever or eventually collapse.",
    category: "Modern Physics",
    keyPoints: ["Big Bang", "Cosmic expansion", "Dark matter", "Dark energy"]
  }
];

function Concepts() {
  const [expandedTopic, setExpandedTopic] = useState(null);

  return (
    <div className="concepts">
      <h1>Physics Concepts</h1>
      <div className="concepts-list">
        {physicsTopics.map(topic => (
          <div key={topic.id} className="concept-section">
            <div className="concept-header">
              <span className="category">{topic.category}</span>
              <h2>{topic.title}</h2>
              <p className="description">{topic.description}</p>
            </div>
            <div className="concept-content">
              <p>{topic.content}</p>
              <div className="key-points">
                <h4 
                  className="key-points-toggle" 
                  onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                >
                  Key Points {expandedTopic === topic.id ? '▼' : '▶'}
                </h4>
                {expandedTopic === topic.id && (
                  <ul>
                    {topic.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concepts;