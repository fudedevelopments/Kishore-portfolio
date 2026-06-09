"use client";
import React, { useState } from 'react';
import { projects } from '@/config/projects';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }}>
              <Card className="cursor-pointer" onClick={() => setActive(p.id)}>
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-24 rounded overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image src={p.image} alt={p.title} width={96} height={96} />
                  </div>
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-gray-400">{p.description}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <a href={p.github} className="text-sm text-blue-400">GitHub</a>
                  <a href={p.demo} className="text-sm text-blue-400">Live Demo</a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
            <div className="relative z-10 max-w-3xl w-full">
              <Card>
                <button className="absolute top-4 right-4" onClick={() => setActive(null)}>
                  Close
                </button>
                <div>Preview for {active}</div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
