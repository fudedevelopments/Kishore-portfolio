"use client";
import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Props = HTMLMotionProps<'button'> & { href?: string };

export const Button: React.FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium glass ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
