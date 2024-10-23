import React from 'react';
import Layout from '../components/Layout/Layout';
import './About.css'; // CSS for styling

const About = () => {
  return (
    <Layout title={'About Soul Aid'}>
      <div className="about-container">
        <h1>About Soul Aid</h1>
        <p className="intro-text">
          Soul Aid is dedicated to providing mental health resources and support for individuals seeking guidance and improvement in their mental well-being. Our goal is to create a supportive community that empowers users to navigate their mental health journeys.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to connect individuals with essential resources, tools, and support systems that foster mental wellness and resilience. We strive to be a reliable platform for those looking for assistance and guidance in their mental health challenges.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where mental health support is accessible to everyone, breaking down stigmas and barriers to seeking help. Our aim is to promote understanding, empathy, and proactive approaches to mental well-being.
        </p>

        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <h3>Dr. Sarah Lee</h3>
            <p>Co-Founder & Clinical Psychologist</p>
            <p>Dr. Lee has extensive experience in mental health care and is passionate about providing effective support to individuals in need.</p>
          </div>
          <div className="team-member">
            <h3>Mark Thompson</h3>
            <p>Co-Founder & Mental Health Advocate</p>
            <p>Mark is committed to raising awareness about mental health issues and ensuring that everyone has access to necessary resources.</p>
          </div>
          <div className="team-member">
            <h3>Jessica Wong</h3>
            <p>Content Director</p>
            <p>Jessica specializes in creating engaging and informative content that resonates with those seeking mental health support.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
