import React from 'react';
import Layout from '../components/Layout/Layout';
import './Resources.css'; // Make sure the path is correct

const Policy = () => {
  return (
    <Layout title={'Privacy Policy - Soul Aid'}>
      <div className="container">
        <h1>Privacy Policy of Soul Aid</h1>
        <p><strong>Effective Date:</strong> [25 December 2024]</p>

        <p>
          At Soul Aid, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> When you register for an account or contact us, we may collect personal information such as your name, email address, phone number, and other relevant details.</li>
          <li><strong>Usage Data:</strong> We collect information on how you access and use our platform, including your IP address, browser type, pages visited, and time spent on our site.</li>
          <li><strong>Cookies:</strong> Our website uses cookies to enhance your experience. You can choose to accept or decline cookies, but this may prevent you from taking full advantage of the site.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To notify you about changes to our services.</li>
          <li>To allow you to participate in interactive features when you choose to do so.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our services.</li>
          <li>To monitor the usage of our services.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information in the following situations:</p>
        <ul>
          <li>With service providers who assist us in our operations.</li>
          <li>To comply with legal obligations or respond to legal requests.</li>
          <li>To protect the rights and safety of Soul Aid, our users, or others.</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Object to or restrict our processing of your personal information.</li>
        </ul>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>Email:</strong> [asfiyashaikh204@gmail.com] <br />
          <strong>Address:</strong> [Dahisar,Mumbai]
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
