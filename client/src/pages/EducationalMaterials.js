import React from 'react';
import Layout from '../components/Layout/Layout';
import './EducationalMaterials.css'; // CSS for styling

const EducationalMaterials = () => {
  return (
    <Layout title={'Educational Materials'}>
      <div className="educational-materials-container">
        <h1>Educational Materials</h1>
        <p className="intro-text">
          Explore a variety of educational resources designed to support your mental health journey.
          These materials aim to provide insights and strategies for enhancing your well-being.
        </p>
        
        <h2>Topics Covered</h2>
        <ul className="topics-list">
          <li className="topic-item">
            <img src="/images/stress-management.jpg" alt="Stress Management" />
            <h3>Stress Management</h3>
            <p>Learn effective techniques to manage stress and improve your resilience.</p>
          </li>
          <li className="topic-item">
            <img src="/images/anxiety-relief.jpg" alt="Anxiety Relief" />
            <h3>Anxiety Relief</h3>
            <p>Discover strategies to alleviate anxiety and foster a sense of calm.</p>
          </li>
          <li className="topic-item">
            <img src="/images/mindfulness.jpg" alt="Mindfulness Techniques" />
            <h3>Mindfulness Techniques</h3>
            <p>Practice mindfulness to enhance self-awareness and emotional regulation.</p>
          </li>
        </ul>

        <h2>Additional Resources</h2>
        <div className="additional-resources">
          <h3>Workbooks & Guides</h3>
          <p>Download our workbooks for a structured approach to mental wellness.</p>
          <button className="download-button">Download Now</button>

          <h3>Online Workshops</h3>
          <p>Join our interactive workshops to learn with experts in mental health.</p>
          <button className="register-button">Register Here</button>
        </div>
      </div>
    </Layout>
  );
};

export default EducationalMaterials;
