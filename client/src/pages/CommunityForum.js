import React from 'react';
import Layout from '../components/Layout/Layout';
import './CommunityForum.css'; // CSS for styling

const CommunityForum = () => {
  return (
    <Layout title={'Community Forum'}>
      <div className="community-forum-container">
        <h1>Community Forum</h1>
        <p className="intro-text">
          Join discussions, share experiences, and connect with others in our supportive community. Our forum is a safe space where you can express your thoughts, ask questions, and find resources for your mental health journey.
        </p>

        <h2>Topics of Discussion</h2>
        <div className="discussion-topics">
          <div className="topic-card">
            <h3>Stress Management</h3>
            <p>Share your tips, strategies, and experiences in managing stress effectively.</p>
          </div>
          <div className="topic-card">
            <h3>Anxiety</h3>
            <p>Discuss common triggers, coping mechanisms, and support strategies for anxiety.</p>
          </div>
          <div className="topic-card">
            <h3>Self-Care Practices</h3>
            <p>Explore self-care routines and share your favorite practices that help improve your well-being.</p>
          </div>
        </div>

        <h2>Latest Discussions</h2>
        <ul className="latest-discussions">
          <li>
            <strong>How to manage work-related stress?</strong>
            <p>Joined by: User123</p>
          </li>
          <li>
            <strong>Overcoming anxiety in social situations</strong>
            <p>Joined by: WellnessWarrior</p>
          </li>
          <li>
            <strong>My self-care routine</strong>
            <p>Joined by: MindfulMike</p>
          </li>
        </ul>

        <h2>Join the Conversation!</h2>
        <p>If you're interested in sharing your story or seeking advice, don't hesitate to participate. Our community is here to support you!</p>
      </div>
    </Layout>
  );
};

export default CommunityForum;
