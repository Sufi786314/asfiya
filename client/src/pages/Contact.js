import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import './Contact.css'; // CSS for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Layout title={'Contact Us'}>
      <div className="contact-container">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’re here to help you on your journey. Please fill out the form below and we’ll get back to you shortly.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
          />
          
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            required
          />
          
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        {error && <div className="error-message">{error}</div>}
        {response && (
          <div className="success-message">
            <h2>Success!</h2>
            <p>{response}</p>
          </div>
        )}

        <section className="additional-info">
          <h2>Additional Information</h2>
          <p>
            At Soul Aid, we prioritize your mental health. Here are some common queries we receive:
          </p>
          <ul>
            <li>What resources do you offer for mental health support?</li>
            <li>How can I participate in community discussions?</li>
            <li>What tools are available to aid in wellness?</li>
          </ul>
        </section>

        <section className="contact-hours">
          <h2>Contact Hours</h2>
          <p>
            Our support team is available during the following hours:
          </p>
          <ul>
            <li>Monday to Friday: 9 AM - 5 PM</li>
            <li>Saturday: 10 AM - 4 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <p>We aim to respond to all inquiries within 1-2 business days.</p>
        </section>

        <section className="social-media">
          <h2>Follow Us</h2>
          <p>
            Stay connected through our social media channels for updates and support:
          </p>
          <ul>
            <li>Facebook: SoulAidCommunity</li>
            <li>Twitter: @SoulAidSupport</li>
            <li>Instagram: @soul_aid</li>
            <li>LinkedIn: Soul Aid</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
