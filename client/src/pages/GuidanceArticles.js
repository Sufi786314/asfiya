import React from 'react';
import Layout from '../components/Layout/Layout';
import './GuidanceArticles.css'; // CSS for styling

const GuidanceArticles = () => {
  return (
    <Layout title={'Guidance Articles'}>
      <div className="guidance-articles-container">
        <h1>Guidance Articles</h1>
        <p className="intro-text">
          Discover insightful articles that provide guidance on various aspects of mental health improvement. Each article offers practical tips and strategies to enhance your well-being.
        </p>

        <h2>Featured Articles</h2>
        <div className="articles-grid">
          <div className="article-card">
            <h3>Stress Management Techniques</h3>
            <p>Explore effective strategies to manage stress, including mindfulness practices and relaxation techniques that can help you regain control.</p>
          </div>
          <div className="article-card">
            <h3>Overcoming Anxiety</h3>
            <p>Learn about practical methods to cope with anxiety, including cognitive behavioral techniques and lifestyle changes that promote mental clarity.</p>
          </div>
          <div className="article-card">
            <h3>Building Resilience</h3>
            <p>Understand the key components of resilience and how to cultivate a mindset that can help you navigate life's challenges with confidence.</p>
          </div>
        </div>

        <h2>More Articles to Explore</h2>
        <div className="more-articles">
          <p>Here are some additional topics you might find helpful:</p>
          <ul>
            <li><strong>Mindfulness and Meditation:</strong> Learn techniques to incorporate mindfulness into your daily life.</li>
            <li><strong>Self-Care Practices:</strong> Discover self-care routines that can enhance your mental health.</li>
            <li><strong>Healthy Relationships:</strong> Tips for building and maintaining supportive relationships.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default GuidanceArticles;
