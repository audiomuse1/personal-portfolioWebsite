'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageHeading from '../../components/PageHeading'


export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <PageHeading>My Resume</PageHeading>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div 
            className="w-full overflow-hidden"
            style={{ 
              height: isMobile ? '70vh' : '85vh',
              maxHeight: '1000px' 
            }}
          >
            <iframe
              src="/documents/Andrew Hartford - Resume (2025).pdf"
              className="w-full h-full"
              style={{
                border: 'none',
                transform: isMobile ? 'scale(1)' : 'none',
                transformOrigin: 'top left'
              }}
            />
          </div>
          
          <div className="mt-4 flex justify-center">
            <a
              href="/documents/Andrew Hartford - Resume (2025).pdf"
              download
              className="bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}