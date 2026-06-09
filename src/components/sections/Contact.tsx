"use client";
import React from 'react';
import { profile } from '@/config/profile';
import { social } from '@/config/social';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Contact Me</h2>
      </motion.div>
      <div className="contact-grid">
        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="contact-info-card">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">{profile.email}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">{profile.phone}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">{profile.location}</div>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              {[
                { href: social.linkedin, label: 'LinkedIn' },
                { href: social.github, label: 'GitHub' },
                { href: social.instagram, label: 'Instagram' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.8rem',
                    color: '#93c5fd',
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input className="form-input" placeholder="Your name" />
              <input className="form-input" placeholder="Email address" type="email" />
              <textarea className="form-input form-textarea" placeholder="Your message" />
              <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
