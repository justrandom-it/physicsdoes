import './Articles.css';

const articles = [
  {
    id: 1,
    title: "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor",
    author: "Dr. Sarah Chen",
    date: "March 2024",
    excerpt: "IBM has unveiled a revolutionary 1000-qubit quantum processor that could solve complex problems exponentially faster than classical computers.",
    content: "This breakthrough represents a significant milestone in quantum computing. The new processor uses advanced error correction techniques and could revolutionize fields like cryptography, drug discovery, and artificial intelligence.",
    category: "Quantum Physics"
  },
  {
    id: 2,
    title: "Dark Matter Detection: New Evidence from Underground Experiments",
    author: "Prof. Michael Rodriguez",
    date: "February 2024",
    excerpt: "Scientists at the Large Underground Xenon experiment have detected potential signals that could finally prove the existence of dark matter particles.",
    content: "After decades of searching, researchers believe they may have found direct evidence of dark matter interactions. The signals detected deep underground could reshape our understanding of the universe's composition.",
    category: "Cosmology"
  },
  {
    id: 3,
    title: "Room Temperature Superconductor: The Holy Grail of Physics",
    author: "Dr. Elena Petrov",
    date: "January 2024",
    excerpt: "A team of researchers claims to have created a material that exhibits superconductivity at room temperature and ambient pressure.",
    content: "If verified, this discovery could revolutionize technology, enabling lossless power transmission, magnetic levitation trains, and ultra-efficient electronics. The material combines hydrogen, carbon, and sulfur in a unique crystal structure.",
    category: "Condensed Matter"
  },
  {
    id: 4,
    title: "Gravitational Waves Reveal Secrets of Neutron Star Collisions",
    author: "Dr. James Wilson",
    date: "December 2023",
    excerpt: "LIGO detectors have captured gravitational waves from neutron star mergers, providing insights into the creation of heavy elements.",
    content: "These cosmic collisions are responsible for creating gold, platinum, and other heavy elements. The gravitational wave signatures help us understand the extreme physics occurring during these cataclysmic events.",
    category: "Astrophysics"
  },
  {
    id: 5,
    title: "Fusion Energy Milestone: Net Energy Gain Achieved",
    author: "Dr. Amanda Foster",
    date: "November 2023",
    excerpt: "The National Ignition Facility has achieved fusion ignition, producing more energy than was directly input into the reaction.",
    content: "This historic achievement brings us closer to clean, unlimited energy. The fusion reaction produced 3.15 megajoules of energy from 2.05 megajoules of laser input, proving that controlled fusion is possible.",
    category: "Nuclear Physics"
  },
  {
    id: 6,
    title: "Time Crystals: A New State of Matter with Quantum Applications",
    author: "Prof. Lisa Zhang",
    date: "October 2023",
    excerpt: "Scientists have created stable time crystals that could revolutionize quantum computing and energy storage technologies.",
    content: "Time crystals are structures that repeat in time rather than space, maintaining motion in their ground state. These exotic materials could lead to perpetual motion devices and ultra-stable quantum memories.",
    category: "Quantum Physics"
  }
];

function Articles() {
  return (
    <div className="articles">
      <h1>Popular Physics Articles</h1>
      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <span className="article-category">{article.category}</span>
              <h2>{article.title}</h2>
              <div className="article-meta">
                <span className="author">By {article.author}</span>
                <span className="date">{article.date}</span>
              </div>
            </div>
            <div className="article-content">
              <p className="excerpt">{article.excerpt}</p>
              <p className="content">{article.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Articles;