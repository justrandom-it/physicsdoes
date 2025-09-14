import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We appreciate your interest in physics.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <h3>🌍 Online Platform</h3>
            <p>Physics Hub<br />Learn Physics Anywhere<br />Available 24/7</p>
          </div>
          
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>learn@physicshub.com</p>
          </div>
          
          <div className="info-item">
            <h3>📚 Study Support</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Weekend: Self-paced learning</p>
          </div>

          <div className="info-item">
            <h3>🎆 Topics Covered</h3>
            <p>From Classical Mechanics to Quantum Physics</p>
          </div>

          <div className="info-item">
            <h3>🎯 Learning Levels</h3>
            <p>Beginner, Intermediate, and Advanced courses</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;