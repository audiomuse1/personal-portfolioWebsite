'use client';

import { motion } from 'framer-motion';

export default function ResumePage() {
  // PDF viewer parameters for maximized view
  const pdfViewerParams = new URLSearchParams({
    view: 'FitH',    // Fit to window height
    pagemode: 'none', // Hide left menu
    toolbar: '0',     // Hide toolbar
    navpanes: '0',    // Hide navigation panes
  }).toString();

  return (
    <div className="container mx-auto px-6 py-12 mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">My Resume</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="aspect-[8.5/11] w-full">
            <iframe
              src={`/documents/Andrew Hartford - Resume (2025).pdf?${pdfViewerParams}`}
              className="w-full h-full rounded-lg shadow-sm"
              style={{ minHeight: '800px' }}
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <a
              href="/documents/Andrew Hartford - Resume (2025).pdf"
              download
              className="bg-emerald-800 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors flex items-center gap-2"
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