"use client";
import React from 'react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

import { certifications } from '@/config/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <motion.div key={c} whileHover={{ y: -6 }}>
              <Card>
                <div className="font-semibold">{c}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
