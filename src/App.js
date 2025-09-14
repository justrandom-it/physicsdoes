import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import Research from './pages/Research';
import Articles from './pages/Articles';
import Problems from './pages/Problems';
import Personalities from './pages/Personalities';
import Community from './pages/Community';
import CodeIt from './pages/CodeIt';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/research" element={<Research />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/personalities" element={<Personalities />} />
          <Route path="/community" element={<Community />} />
          <Route path="/code-it" element={<CodeIt />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;