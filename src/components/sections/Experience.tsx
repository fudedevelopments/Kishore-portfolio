"use client";
import React from 'react';
import { experience } from '@/config/experience';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-label">My Journey</div>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>
      <div className="timeline">
        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            className="timeline-item"
            custom={i + 1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-company">{e.company}</div>
              <div className="timeline-period">{e.period}</div>
              {e.description && (
                <div className="mt-2 text-sm text-gray-400" style={{ lineHeight: '1.6' }}>{e.description}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
