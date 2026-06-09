import React from 'react';
import { social } from '@/config/social';
import { profile } from '@/config/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 py-8">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
        <div>© {new Date().getFullYear()} {profile.name}</div>
        <div className="mt-2">
          <a className="mx-2" href={social.linkedin}>
            LinkedIn
          </a>
          <a className="mx-2" href={social.github}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
