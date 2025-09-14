import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Physics Does</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/concepts">Concepts</Link>
        <Link to="/research">Research</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/problems">Real Physics</Link>
        <Link to="/code-it">Code It</Link>
        <Link to="/personalities">Personalities</Link>
        <Link to="/community">Community</Link>
      </div>
    </nav>
  );
}

export default Navbar;