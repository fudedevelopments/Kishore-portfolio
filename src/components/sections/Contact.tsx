"use client";
import React from 'react';
import { profile } from '@/config/profile';
import { social } from '@/config/social';
import { Card } from '@/components/ui/Card';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="text-sm text-gray-300">Email: {profile.email}</div>
            <div className="text-sm text-gray-300">Phone: {profile.phone}</div>
            <div className="text-sm text-gray-300">Location: {profile.location}</div>
            <div className="mt-3">
              <a href={social.linkedin} className="text-blue-400 mr-2">
                LinkedIn
              </a>
              <a href={social.github} className="text-blue-400 mr-2">
                GitHub
              </a>
            </div>
          </Card>
          <Card>
            <form className="space-y-3">
              <input className="w-full p-2 rounded bg-transparent border border-white/6" placeholder="Your name" />
              <input className="w-full p-2 rounded bg-transparent border border-white/6" placeholder="Email" />
              <textarea className="w-full p-2 rounded bg-transparent border border-white/6" placeholder="Message" />
              <button className="px-4 py-2 rounded bg-blue-600 text-white">Send (UI only)</button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
