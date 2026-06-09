import React from 'react';
import { social } from '@/config/social';
import { profile } from '@/config/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-text">
          © {new Date().getFullYear()} {profile.name}. All rights reserved. |{' '}
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' · '}
          <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>{' · '}
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
