import { useState } from 'react';
import './Community.css';

const communityMembers = [
  {
    id: 1,
    name: "Alex Chen",
    field: "Quantum Computing",
    location: "MIT, Boston",
    interests: ["Quantum Algorithms", "Superconducting Qubits", "Error Correction"],
    bio: "PhD student working on quantum error correction. Love discussing quantum mechanics over coffee!",
    contact: "alex.chen@physics.com"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    field: "Astrophysics",
    location: "Caltech, California",
    interests: ["Black Holes", "Gravitational Waves", "Cosmology"],
    bio: "Researching gravitational wave detection. Always excited to talk about the mysteries of the universe.",
    contact: "sarah.r@astro.com"
  },
  {
    id: 3,
    name: "David Kumar",
    field: "Particle Physics",
    location: "CERN, Switzerland",
    interests: ["Higgs Boson", "Standard Model", "LHC Experiments"],
    bio: "Working on LHC data analysis. Passionate about fundamental particles and forces.",
    contact: "d.kumar@cern.ch"
  },
  {
    id: 4,
    name: "Emma Thompson",
    field: "Condensed Matter",
    location: "Oxford, UK",
    interests: ["Superconductivity", "Quantum Materials", "Topological Insulators"],
    bio: "Exploring exotic quantum materials. Love connecting theory with experimental results.",
    contact: "emma.t@oxford.ac.uk"
  }
];

function Community() {
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    location: '',
    interests: '',
    bio: '',
    contact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const memberData = {
      name: formData.name,
      field: formData.field,
      location: formData.location,
      interests: formData.interests,
      bio: formData.bio,
      contact: formData.contact,
      timestamp: new Date().toISOString()
    };

    try {
      // Replace with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData)
      });
      
      alert('Welcome to the Physics Community! Your profile has been saved to Google Sheets.');
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      alert('Error saving data. Please try again.');
    }
    
    setShowJoinForm(false);
    setFormData({ name: '', field: '', location: '', interests: '', bio: '', contact: '' });
  };

  return (
    <div className="community">
      <h1>Physics Community</h1>
      <p className="subtitle">Connect with passionate physicists from around the world</p>
      
      <div className="community-actions">
        <button 
          className="join-btn"
          onClick={() => setShowJoinForm(true)}
        >
          Join Our Community
        </button>
      </div>

      <div className="members-grid">
        {communityMembers.map(member => (
          <div key={member.id} className="member-card">
            <div className="member-header">
              <h3>{member.name}</h3>
              <span className="field-tag">{member.field}</span>
            </div>
            
            <div className="member-info">
              <p className="location">📍 {member.location}</p>
              <p className="bio">{member.bio}</p>
              
              <div className="interests">
                <h4>Interests:</h4>
                <div className="interest-tags">
                  {member.interests.map((interest, index) => (
                    <span key={index} className="interest-tag">{interest}</span>
                  ))}
                </div>
              </div>
              
              <div className="contact">
                <strong>Contact:</strong> {member.contact}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showJoinForm && (
        <div className="modal" onClick={() => setShowJoinForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Join Physics Community</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Field of Interest"
                value={formData.field}
                onChange={(e) => setFormData({...formData, field: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Your Interests (comma separated)"
                value={formData.interests}
                onChange={(e) => setFormData({...formData, interests: e.target.value})}
                required
              />
              <textarea
                placeholder="Tell us about yourself"
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Contact Email"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required
              />
              <div className="form-buttons">
                <button type="submit">Join Community</button>
                <button type="button" onClick={() => setShowJoinForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;