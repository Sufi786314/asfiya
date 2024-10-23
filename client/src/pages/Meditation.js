import React from 'react';
import Layout from '../components/Layout/Layout';
import './Meditation.css'; // CSS for styling

const MeditationYoga = () => {
  return (
    <Layout title={'Meditation & Yoga'}>
      <div className="meditation-yoga-container">
        <h1>Meditation & Yoga</h1>
        <p>
          Welcome to our Meditation and Yoga section! Here, you'll find resources, techniques, and guidance to help you cultivate mindfulness and improve your well-being through the practices of meditation and yoga.
        </p>

        <section className="benefits">
          <h2>Benefits of Meditation and Yoga</h2>
          <ul>
            <li>Reduces stress and anxiety</li>
            <li>Enhances emotional health</li>
            <li>Improves focus and concentration</li>
            <li>Promotes better sleep</li>
            <li>Boosts self-awareness</li>
            <li>Encourages a healthy lifestyle</li>
          </ul>
        </section>

        <section className="meditation-techniques">
          <h2>Meditation Techniques</h2>
          <p>Explore various meditation techniques to find what works best for you:</p>
          <ul>
            <li><strong>Mindfulness Meditation:</strong> Focus on your breath and observe your thoughts without judgment.</li>
            <li><strong>Guided Meditation:</strong> Follow along with an instructor or recording to help guide your practice.</li>
            <li><strong>Loving-Kindness Meditation:</strong> Cultivate feelings of compassion and love for yourself and others.</li>
            <li><strong>Body Scan Meditation:</strong> Tune into different parts of your body to release tension and relax.</li>
          </ul>
        </section>

        <section className="yoga-practices">
          <h2>Yoga Practices</h2>
          <p>Incorporate these yoga practices into your routine:</p>
          <ul>
            <li><strong>Hatha Yoga:</strong> A gentle introduction to the most basic yoga postures.</li>
            <li><strong>Vinyasa Yoga:</strong> A flow of poses that are synchronized with your breath.</li>
            <li><strong>Ashtanga Yoga:</strong> A rigorous style of yoga that follows a specific sequence of postures.</li>
            <li><strong>Restorative Yoga:</strong> A relaxing practice that uses props to support the body.</li>
          </ul>
        </section>

        <section className="resources">
          <h2>Recommended Resources</h2>
          <p>Here are some resources to help you deepen your practice:</p>
          <ul>
            <li><strong>Books:</strong> 
              <ul>
                <li>"The Miracle of Mindfulness" by Thich Nhat Hanh</li>
                <li>"The Heart of Yoga" by T.K.V. Desikachar</li>
              </ul>
            </li>
            <li><strong>Apps:</strong>
              <ul>
                <li>Headspace</li>
                <li>Calm</li>
                <li>Insight Timer</li>
              </ul>
            </li>
            <li><strong>YouTube Channels:</strong>
              <ul>
                <li>Yoga with Adriene</li>
                <li>The Mindful Movement</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="get-started">
          <h2>Get Started Today!</h2>
          <p>Embrace the journey of self-discovery and wellness through meditation and yoga. Find a quiet space, set aside some time, and start your practice today!</p>
          <button className="get-started-button">Join a Class</button>
        </section>
      </div>
    </Layout>
  );
};

export default MeditationYoga;
