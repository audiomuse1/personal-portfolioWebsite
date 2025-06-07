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

  // PDF viewer parameters to control initial display
  const pdfViewerParams = new URLSearchParams({
    view: 'FitH',    // Fit to window height
    pagemode: 'none', // Hide left menu
    toolbar: '0',     // Hide toolbar
    navpanes: '0',    // Hide navigation panes
  }).toString();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeading>My Resume</PageHeading>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div 
            className="w-full"
            style={{ 
              height: isMobile ? 'calc(100vh - 200px)' : '85vh',
              maxHeight: isMobile ? 'none' : '1000px'
            }}
          >
            <iframe
              src={`/documents/Andrew Hartford - Resume (2025).pdf?${pdfViewerParams}`}
              className="w-full h-full"
              style={{
                border: 'none',
                backgroundColor: 'white'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}