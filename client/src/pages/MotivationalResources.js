import React from 'react';
import Layout from '../components/Layout/Layout';
import './MotivationalResources.css'; // CSS for styling

const MotivationalResources = () => {
  return (
    <Layout title={'Motivational Resources'}>
      <div className="motivational-resources-container">
        <h1>Motivational Resources</h1>
        <p className="intro-text">
          Discover quotes and resources to inspire and motivate you on your mental health journey. Let these words uplift your spirit and remind you of your strength.
        </p>
        
        <h2>Inspiring Quotes</h2>
        <div className="quotes-container">
          <blockquote className="quote-item">
            <p>"Believe you can and you're halfway there." – Theodore Roosevelt</p>
          </blockquote>
          <blockquote className="quote-item">
            <p>"You are stronger than you think." – Unknown</p>
          </blockquote>
          <blockquote className="quote-item">
            <p>"Every day may not be good, but there is something good in every day." – Unknown</p>
          </blockquote>
        </div>

        <h2>Additional Resources</h2>
        <div className="resources-list">
          <div className="resource-card">
            <h3>Books for Inspiration</h3>
            <p>Explore transformative books that can guide you through challenges and inspire personal growth.</p>
            <ul>
              <li>"The Power of Now" by Eckhart Tolle</li>
              <li>"Daring Greatly" by Brené Brown</li>
              <li>"You Are a Badass" by Jen Sincero</li>
            </ul>
          </div>
          <div className="resource-card">
            <h3>Podcasts to Uplift You</h3>
            <p>Listen to motivating podcasts that feature inspiring stories and practical advice for a better mindset.</p>
            <ul>
              <li>"The Mindset Mentor"</li>
              <li>"Unlocking Us with Brené Brown"</li>
              <li>"The Tony Robbins Podcast"</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MotivationalResources;
