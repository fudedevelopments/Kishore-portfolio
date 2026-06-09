"use client";
import React from 'react';
import { skills } from '@/config/skills';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/components/animations/motion';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial="hidden" animate="visible" variants={fadeUp} className="text-3xl font-bold">
          Skills
        </motion.h2>
        <motion.div initial="hidden" animate="visible" variants={stagger} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp}>
            <Card>
              <h4 className="font-semibold">Development</h4>
              <ul className="mt-2 text-sm text-gray-300">
                {skills.development.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card>
              <h4 className="font-semibold">Digital Marketing</h4>
              <ul className="mt-2 text-sm text-gray-300">
                {skills.marketing.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card>
              <h4 className="font-semibold">Creative</h4>
              <ul className="mt-2 text-sm text-gray-300">
                {skills.creative.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
