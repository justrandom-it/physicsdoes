const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const membersFile = path.join(__dirname, 'public', 'community-members.json');

// Get all members
app.get('/api/members', (req, res) => {
  try {
    const data = fs.readFileSync(membersFile, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.json([]);
  }
});

// Add new member
app.post('/api/members', (req, res) => {
  try {
    let members = [];
    if (fs.existsSync(membersFile)) {
      const data = fs.readFileSync(membersFile, 'utf8');
      members = JSON.parse(data);
    }
    
    const newMember = {
      id: Date.now(),
      ...req.body,
      joinedDate: new Date().toISOString()
    };
    
    members.push(newMember);
    fs.writeFileSync(membersFile, JSON.stringify(members, null, 2));
    
    res.json({ success: true, member: newMember });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save member' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});