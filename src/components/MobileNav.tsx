"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-emerald-800 z-40"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                Home
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                About
              </Link>
              <Link 
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                Projects
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                Contact
              </Link>
              <Link 
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                Resume
              </Link>
              <Link 
                href="/skills"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-emerald-200"
              >
                Skills & Services
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}