'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const mainNavLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/skills', text: 'Skills' },
    { href: '/career', text: 'Career' },
    { href: 'https://elliot.pages.dev', text: 'Blog' },
  ];

  const linkClasses = 'px-3 py-2 rounded-md text-sm font-mono tracking-wider transition-all duration-300 hover:text-accent-primary border border-transparent hover:border-accent-primary relative overflow-hidden group';
  const activeClasses = 'border-accent-secondary text-accent-secondary';
  const isExternal = (href: string) => /^https?:\/\//.test(href);

  return (
    <nav className="bg-dark-bg border-b border-accent-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-mono text-accent-primary text-xl font-bold tracking-wider glitch" data-text="KLAM">
            KLAM
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 ml-8">
            {/* Left side links */}
            <div className="flex space-x-4">
              {mainNavLinks.map((link) => (
                isExternal(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses}`}
                  >
                    <span className="z-10 relative">{link.text}</span>
                    <span className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${linkClasses} ${pathname === link.href ? activeClasses : ''}`}
                  >
                    <span className="z-10 relative">{link.text}</span>
                    <span className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Link>
                )
              ))}
            </div>

            {/* Right side status link */}
            <div>
              <Link
                href="/status"
                className={`${linkClasses} ${pathname === '/status' ? activeClasses : ''} flex items-center`}
              >
                <span className="z-10 relative flex items-center">
                  <svg 
                    className="w-4 h-4 mr-1 text-accent-secondary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  Status
                </span>
                <span className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent-secondary border border-accent-secondary hover:text-accent-primary hover:border-accent-primary focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border border-accent-secondary bg-dark-bg/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mainNavLinks.map((link) => (
                isExternal(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-3 py-2 rounded-md text-base font-mono tracking-wider text-accent-secondary hover:text-accent-primary hover:bg-dark-bg/50 transition-all duration-300`}
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-mono tracking-wider text-accent-secondary hover:text-accent-primary hover:bg-dark-bg/50 transition-all duration-300 ${pathname === link.href ? 'border-l-2 border-accent-primary pl-2' : ''}`}
                  >
                    {link.text}
                  </Link>
                )
              ))}
              <Link
                href="/status"
                className={`block px-3 py-2 rounded-md text-base font-mono tracking-wider text-accent-secondary hover:text-accent-primary hover:bg-dark-bg/50 transition-all duration-300 ${pathname === '/status' ? 'border-l-2 border-accent-primary pl-2' : ''}`}
              >
                <span className="flex items-center">
                  <svg 
                    className="w-4 h-4 mr-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  Status
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-grid-pattern"></div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
    </nav>
  );
}
