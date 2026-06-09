"use client";
import React from 'react';
import { profile } from '@/config/profile';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { fadeUp } from '@/components/animations/motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial="hidden" animate="visible" variants={fadeUp} className="text-3xl font-bold">
          About
        </motion.h2>
        <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="mt-2 text-gray-300">{profile.subtitle}</p>
            <ul className="mt-4 text-sm text-gray-400">
              <li>Experience: 2+ years Software Development</li>
              <li>Digital Marketing: 1+ year</li>
            </ul>
          </Card>
          <Card>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-2 text-sm text-gray-300">
              <div>Email: {profile.email}</div>
              <div>Phone: {profile.phone}</div>
              <div>Location: {profile.location}</div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
