import './CodeIt.css';

function CodeIt() {

  const topics = [
    {
      title: "Classical Mechanics",
      difficulty: "Medium",
      problems: [
        "Calculate projectile motion trajectory with air resistance",
        "Simulate pendulum motion with damping effects", 
        "Model spring-mass system oscillations",
        "Compute orbital mechanics for satellite trajectories",
        "Analyze collision dynamics between multiple objects"
      ]
    },
    {
      title: "Thermodynamics",
      difficulty: "Hard",
      problems: [
        "Calculate heat transfer through different materials",
        "Model gas expansion in various thermodynamic processes",
        "Simulate heat engine efficiency calculations",
        "Analyze phase transitions and latent heat",
        "Compute entropy changes in isolated systems"
      ]
    },
    {
      title: "Electromagnetism",
      difficulty: "Hard",
      problems: [
        "Calculate electric field from charge distributions",
        "Model magnetic field around current-carrying wires",
        "Simulate electromagnetic wave propagation",
        "Analyze AC circuit behavior with complex impedance",
        "Compute electromagnetic induction in moving conductors"
      ]
    },
    {
      title: "Quantum Physics",
      difficulty: "Hard",
      problems: [
        "Solve Schrödinger equation for particle in a box",
        "Calculate quantum harmonic oscillator energy levels",
        "Model wave function collapse in measurement",
        "Simulate quantum tunneling through barriers",
        "Analyze quantum entanglement correlations"
      ]
    },
    {
      title: "Optics & Waves",
      difficulty: "Medium",
      problems: [
        "Calculate wave interference patterns from multiple sources",
        "Model light refraction through different media",
        "Simulate diffraction patterns through apertures",
        "Analyze polarization effects in optical systems",
        "Compute Doppler shift for moving wave sources"
      ]
    },
    {
      title: "Relativity",
      difficulty: "Hard",
      problems: [
        "Calculate time dilation effects at high velocities",
        "Model length contraction in moving reference frames",
        "Simulate relativistic momentum and energy",
        "Analyze spacetime curvature around massive objects",
        "Compute gravitational redshift in strong fields"
      ]
    }
  ];



  return (
    <div className="code-it">
      <div className="container">
        <div className="hero-section">
          <h1>Code It</h1>
          <p>Physics problems to solve through programming</p>
        </div>

        <div className="content-wrapper">
          <div className="problems-section">
            <h2>Physics Topics to Code</h2>
            <div className="problems-grid">
              {topics.map((topic, topicIndex) => (
                <div key={`topic-${topicIndex}`} className="problem-card">
                  <div className="problem-header">
                    <h3>{topic.title}</h3>
                    <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <div className="problems-list">
                    {topic.problems.map((problem, problemIndex) => (
                      <div key={`problem-${topicIndex}-${problemIndex}`} className="problem-item">
                        <span className="problem-number">{problemIndex + 1}.</span>
                        <span className="problem-text">{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeIt;