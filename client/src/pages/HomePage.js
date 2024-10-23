import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import './HomePage.css'; // Updated CSS path

const HomePage = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();

  return (
    <Layout title={'Welcome to Soul Aid'}>
      <div className="home-page">
        <header className="hero">
          <div className="banner">
            <h1>Soul Aid</h1>
            <p>Your resource for mental health support, education, and community.</p>
            <button className="cta-button" onClick={() => navigate('/register')}>
              Get Started
            </button>
          </div>
        </header>

        <section className="resources">
          <h2>Explore Resources</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Educational Materials</h3>
              <p>Learn about various topics to improve your mental health.</p>
              <button onClick={() => navigate('/educational-materials')}>Explore</button>
            </div>
            <div className="resource-item">
              <h3>Interactive Wellness Tools</h3>
              <p>Utilize tools that help you track and improve your wellness.</p>
              <button onClick={() => navigate('/wellness-tools')}>Explore</button>
            </div>
            <div className="resource-item">
              <h3>Supportive Community Forum</h3>
              <p>Connect with others and share your experiences.</p>
              <button onClick={() => navigate('/community-forum')}>Explore</button>
            </div>
            <div className="resource-item">
              <h3>Guidance Articles</h3>
              <p>Read articles that provide insights into mental health improvement.</p>
              <button onClick={() => navigate('/guidance-articles')}>Explore</button>
            </div>
            <div className="resource-item">
              <h3>Motivational Resources</h3>
              <p>Find inspiration through quotes and stories.</p>
              <button onClick={() => navigate('/motivational-resources')}>Explore</button>
            </div>
          </div>
        </section>

        <section className="community">
          <h2>Join Our Community</h2>
          <p>Connect with others, share your experiences, and find support.</p>
          <button className="cta-button" onClick={() => navigate('/community')}>
            Get Involved
          </button>
        </section>

        <section className="guidance">
          <h2>Guidance Articles</h2>
          <p>Read insightful articles on mental health improvement.</p>
          <div className="article-list">
            <div className="article-item">
              <h3>Stress Management Techniques</h3>
              <p>Learn how to effectively manage stress in your daily life.</p>
            </div>
            <div className="article-item">
              <h3>Overcoming Anxiety</h3>
              <p>Explore strategies to help reduce anxiety levels.</p>
            </div>
            <div className="article-item">
              <h3>Building Resilience</h3>
              <p>Discover ways to strengthen your resilience.</p>
            </div>
          </div>
        </section>

        <section className="motivation">
          <h2>Motivational Quotes</h2>
          <div className="quote-list">
            <blockquote className="quote-item">
              "The only way to do great work is to love what you do." – Steve Jobs
            </blockquote>
            <blockquote className="quote-item">
              "You are never too old to set another goal or to dream a new dream." – C.S. Lewis
            </blockquote>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or need support, feel free to reach out!</p>
          <button className="cta-button" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
