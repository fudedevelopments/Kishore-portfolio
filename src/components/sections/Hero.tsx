"use client";
import React from 'react';
import Image from 'next/image';
import { profile } from '@/config/profile';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeUp } from '@/components/animations/motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">{profile.title}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-lg text-gray-300">
            {profile.subtitle}
          </motion.p>
          <div className="mt-6 flex gap-3">
            <Button onClick={() => (location.href = '#projects')}>View My Work</Button>
            <Button onClick={() => (location.href = '#contact')} className="bg-blue-600">
              Contact Me
            </Button>
          </div>
        </div>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-xl overflow-hidden glass flex items-center justify-center">
            <Image src={profile.portrait} alt="Portrait" width={420} height={420} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
