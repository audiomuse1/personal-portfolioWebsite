'use client';

import { motion } from 'framer-motion';

interface PageHeadingProps {
  children: React.ReactNode;
}

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <motion.h1 
      className="text-4xl font-bold mb-8 md:mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
}