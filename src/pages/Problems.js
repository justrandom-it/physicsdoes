import './Problems.css';

const physicsProblems = [
  {
    id: 1,
    category: "Quantum Mechanics",
    difficulty: "Advanced",
    problem: "A particle of mass m is confined to a one-dimensional infinite potential well of width L. If the particle is in the nth energy eigenstate, derive the expression for the probability density function ψₙ*(x)ψₙ(x) and find the most probable position of the particle for n = 2."
  },
  {
    id: 2,
    category: "Relativity",
    difficulty: "Intermediate",
    problem: "A spaceship travels from Earth to a star 20 light-years away at a speed of 0.8c. Calculate the time taken for the journey as measured by: (a) an observer on Earth, (b) an observer on the spaceship. Also find the contracted length of the journey as measured by the spaceship observer."
  },
  {
    id: 3,
    category: "Electromagnetism",
    difficulty: "Advanced",
    problem: "A conducting sphere of radius R carries a total charge Q. The sphere is surrounded by a dielectric material with permittivity ε. Derive the electric field E(r) for all regions (r < R, r > R) and calculate the energy stored in the electric field outside the conductor."
  },
  {
    id: 4,
    category: "Thermodynamics",
    difficulty: "Intermediate",
    problem: "An ideal gas undergoes a cyclic process consisting of: (1) isothermal expansion at temperature T₁, (2) adiabatic expansion, (3) isothermal compression at temperature T₂, (4) adiabatic compression back to initial state. Derive the efficiency of this Carnot cycle and prove that it is independent of the working substance."
  },
  {
    id: 5,
    category: "Classical Mechanics",
    difficulty: "Advanced",
    problem: "A uniform rod of length L and mass M is pivoted at one end and can rotate freely in a vertical plane. The rod is released from rest at an angle θ₀ from the vertical. Using Lagrangian mechanics, derive the equation of motion and find the angular velocity when the rod passes through the vertical position."
  },
  {
    id: 6,
    category: "Optics",
    difficulty: "Intermediate",
    problem: "Light of wavelength λ is incident normally on a diffraction grating with N slits, each of width a, separated by distance d. Derive the intensity distribution I(θ) as a function of diffraction angle θ, considering both single-slit diffraction and multi-slit interference effects."
  },
  {
    id: 7,
    category: "Nuclear Physics",
    difficulty: "Advanced",
    problem: "Consider the nuclear reaction ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n. Calculate the Q-value of this fission reaction using the given atomic masses. If the initial kinetic energy of the neutron is negligible, find the total kinetic energy of the fission fragments."
  },
  {
    id: 8,
    category: "Solid State Physics",
    difficulty: "Advanced",
    problem: "In a one-dimensional crystal with N atoms and lattice constant a, derive the dispersion relation ω(k) for phonons using the linear chain model with nearest-neighbor interactions. Consider both acoustic and optical branches for a diatomic basis."
  }
];

function Problems() {
  return (
    <div className="problems">
      <h1>Real Physics Problems</h1>
      <p className="subtitle">Challenge yourself with advanced physics problems</p>
      
      <div className="problems-grid">
        {physicsProblems.map(problem => (
          <div key={problem.id} className="problem-card">
            <div className="problem-header">
              <span className="problem-category">{problem.category}</span>
              <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                {problem.difficulty}
              </span>
            </div>
            <div className="problem-number">Problem #{problem.id}</div>
            <div className="problem-text">
              {problem.problem}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;