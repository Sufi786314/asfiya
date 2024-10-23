import React from 'react';
import Layout from '../components/Layout/Layout';
import './WellnessTools.css'; // CSS for styling

const WellnessTools = () => {
  return (
    <Layout title={'Wellness Tools'}>
      <div className="wellness-tools-container">
        <h1>Wellness Tools</h1>
        <p className="intro-text">
          Discover interactive tools that can help improve your mental well-being. 
          These tools are designed to support your journey toward a healthier mind.
        </p>
        
        <h2>Available Tools</h2>
        <ul className="tools-list">
          <li className="tool-item">
            <img src="/path/to/mood-tracker-icon.png" alt="Mood Tracker" className="tool-icon" />
            <h3>Mood Tracker</h3>
            <p>Monitor your daily mood with our easy-to-use tracker. Understanding your emotions can help you identify patterns and triggers.</p>
          </li>
          <li className="tool-item">
            <img src="/path/to/meditation-guide-icon.png" alt="Meditation Guide" className="tool-icon" />
            <h3>Meditation Guide</h3>
            <p>Explore guided meditations to help you find calm and peace in your day. Perfect for beginners and experienced meditators alike.</p>
          </li>
          <li className="tool-item">
            <img src="/path/to/journal-prompts-icon.png" alt="Journal Prompts" className="tool-icon" />
            <h3>Journal Prompts</h3>
            <p>Use our thoughtful journal prompts to inspire self-reflection and emotional expression. Journaling can be a powerful tool for mental health.</p>
          </li>
        </ul>

        <h2>Additional Resources</h2>
        <div className="additional-resources">
          <h3>Interactive Workshops</h3>
          <p>Join our workshops to learn how to effectively use these tools in your daily routine.</p>
          <button className="register-button">Register Here</button>

          <h3>Resource Library</h3>
          <p>Access a collection of articles and guides that provide deeper insights into mental wellness.</p>
          <button className="explore-button">Explore Resources</button>
        </div>
      </div>
    </Layout>
  );
};

export default WellnessTools;
