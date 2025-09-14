import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Etawah'
  });

  const handleCreateStudyPlan = (e) => {
    e.preventDefault();
    alert(`Study plan created! You have ${cartItems.length} physics topics to explore.\nHappy learning!`);
    setShowCheckout(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Favorites</h1>
        <p className="empty-cart">No favorite topics yet</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Favorite Physics Topics</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price} Level</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="item-total">
              Study Sessions: {item.quantity}
            </div>
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Topics: {cartItems.length}</h2>
        <p className="delivery-info">Create your personalized study plan</p>
        <button 
          className="checkout-btn"
          onClick={() => setShowCheckout(true)}
        >
          Create Study Plan
        </button>
      </div>

      {showCheckout && (
        <div className="checkout-modal">
          <div className="modal-content">
            <h2>Study Plan Details</h2>
            <form onSubmit={handleCreateStudyPlan}>
              <input
                type="text"
                placeholder="Your Name"
                value={orderForm.name}
                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={orderForm.phone}
                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                required
              />
              <textarea
                placeholder="Learning Goals"
                value={orderForm.address}
                onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                required
              />
              <select
                value={orderForm.city}
                onChange={(e) => setOrderForm({...orderForm, city: e.target.value})}
              >
                <option value="Beginner">Beginner Level</option>
                <option value="Intermediate">Intermediate Level</option>
                <option value="Advanced">Advanced Level</option>
              </select>
              <p className="payment-info">Free personalized study plan</p>
              <div className="modal-buttons">
                <button type="submit">Create Plan</button>
                <button type="button" onClick={() => setShowCheckout(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;