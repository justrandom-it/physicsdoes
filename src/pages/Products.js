import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './Products.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = ['all', 'mechanics', 'electricity', 'thermal', 'waves', 'modern-physics'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <h1>Physics Topics Collection</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{product.price} Level</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;