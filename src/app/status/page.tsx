'use client';

import { useEffect, useRef } from 'react';

export default function Status() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Function to resize iframe based on content
    const resizeIframe = () => {
      try {
        if (iframe.contentWindow) {
          const height = iframe.contentWindow.document.documentElement.scrollHeight;
          iframe.style.height = `${height}px`;
        }
      } catch (e) {
        // Handle cross-origin restrictions
        iframe.style.height = '1200px'; // Fallback height
      }
    };

    // Add load event listener
    iframe.addEventListener('load', resizeIframe);

    // Create a resize observer
    const observer = new ResizeObserver(() => {
      resizeIframe();
    });

    // Observe iframe
    observer.observe(iframe);

    // Cleanup
    return () => {
      iframe.removeEventListener('load', resizeIframe);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
          <p className="text-lg text-gray-600">Real-time monitoring of our service uptime and performance.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <iframe 
              ref={iframeRef}
              src="https://wl.hetrixtools.com/r/85ad0b88d63b009d40c2a43ebaf2590d/"
              style={{ 
                width: '100%',
                minHeight: '600px',
                border: 'none',
                overflow: 'hidden'
              }}
              scrolling="no"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>

          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-500">
              Status monitoring powered by{' '}
              <a 
                href="https://hetrixtools.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                HetrixTools
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 