"use client";
import React from 'react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { fadeLeft } from '@/components/animations/motion';

import { experience } from '@/config/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-6 space-y-4">
          {experience.map((e) => (
            <motion.div key={e.role} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Card>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm text-gray-400">{e.company}</div>
                  </div>
                  <div className="text-sm text-gray-400">{e.period}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
