"use client";
import React, { useState } from 'react';
import { navigation } from '@/config/navigation';
import { profile } from '@/config/profile';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass p-3 rounded-xl">
        <div className="text-sm font-semibold gradient-text">{profile.name}</div>
        <nav className="hidden md:flex gap-6">
          {navigation.map((n) => (
            <a key={n.href} href={n.href} className="text-sm hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="mt-2 md:hidden">
          <div className="glass p-4 rounded-lg flex flex-col gap-2">
            {navigation.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
