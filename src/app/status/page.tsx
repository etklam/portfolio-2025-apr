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
    <div className="min-h-screen bg-black text-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent-primary mb-4">System Status</h1>
          <p className="text-lg text-accent-secondary">Real-time monitoring of our service uptime and performance.</p>
        </div>

        <div className="bg-dark-bg border border-accent-secondary overflow-hidden">
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

          <div className="bg-black px-6 py-4 text-center border-t border-accent-secondary">
            <p className="text-sm text-accent-secondary">
              Status monitoring powered by{' '}
              <a 
                href="https://hetrixtools.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-secondary hover:text-accent-primary"
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