"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    value: '2+ Years',
    label: 'Software Development\nExperience',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    value: '1+ Year',
    label: 'Digital Marketing\nExperience',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    value: 'Projects',
    label: 'Delivered modern solutions\nthat drive results',
  },
];

const traits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: 'Continuous Learner',
    desc: 'Always exploring new tech and marketing trends',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Business Focused',
    desc: 'Combining technology and marketing for growth',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Quality Driven',
    desc: 'Committed to delivering high-quality work',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        {/* Left – text card */}
        <motion.div
          className="about-text-card"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="about-label">About Me</div>
          <h2 className="about-heading">
            Passionate about<br />Technology &amp; Marketing
          </h2>
          <p className="about-description">
            I&apos;m a Digital Marketing Executive and Software Developer with 2+ years of experience in Odoo development and 1+ year in digital marketing. I help businesses grow through data-driven marketing strategies and scalable software solutions.
          </p>
          <button className="about-btn">
            Know More About Me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </motion.div>

        {/* Right – stats + traits grid */}
        <div className="about-stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              className="stat-card"
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
            </motion.div>
          ))}
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              className="stat-card"
              custom={i + 4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="stat-icon">{t.icon}</div>
              <div className="stat-value" style={{ fontSize: '1.05rem' }}>{t.title}</div>
              <div className="stat-label">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
