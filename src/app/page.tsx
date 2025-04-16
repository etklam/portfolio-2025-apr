'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: number;
  email: string;
  name: string;
}

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [experience, setExperience] = useState({ years: 0, months: 0 });
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const fullText = 'I am Elliot, A Developer from Hong Kong.';

  useEffect(() => {
    const startDate = new Date(2022, 5); // June 2022 (month is 0-based)
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Add 4 months of internship experience
    const totalMonths = years * 12 + months + 4;
    const newYears = Math.floor(totalMonths / 12);
    const newMonths = totalMonths % 12;
    
    setExperience({ years: newYears, months: newMonths });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typewriterIndex < fullText.length) {
        setTypewriterText(prev => prev + fullText[typewriterIndex]);
        setTypewriterIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [typewriterIndex]);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const renderMainContent = () => (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 neon-text text-yellow-300" data-text="WELCOME">
              WELCOME
            </h1>
            <div className="h-1 w-48 mx-auto bg-cyan-400 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-300 opacity-50 animate-pulse"></div>
            </div>
            <p className="font-mono text-yellow-300 text-xl h-8">
              {typewriterText}<span className="animate-pulse">_</span>
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto px-4 font-mono">
            <div className="mb-12 cyber-card p-6 relative overflow-hidden group">
              <p className="relative z-10 text-base sm:text-lg text-yellow-300 leading-relaxed">
                Experienced Full Stack Developer with <span className="font-bold text-2xl text-yellow-300 animate-pulse">{experience.years}</span> {experience.years === 1 ? 'year' : 'years'} and <span className="font-bold text-2xl text-cyan-400 animate-pulse">{experience.months}</span> {experience.months === 1 ? 'month' : 'months'} of hands-on development experience
              </p>
            </div>
            
            <div className="mb-12 cyber-card p-6 relative overflow-hidden group">
              <p className="relative z-10 text-base sm:text-lg text-yellow-300 leading-relaxed">
                As the point of start of my Geek lifestyle: Domain{' '}
                <a 
                  href="https://who.is/whois/kwunlam.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-cyan-400 hover:text-yellow-300 transition-colors"
                >
                  kwunlam.com
                </a>{' '}
                registered on <span className="font-bold">June 8, 2018</span>, active for{' '}
                <span className="font-bold text-2xl text-yellow-300">
                  {new Date().getFullYear() - 2018}
                </span>{' '}
                {new Date().getFullYear() - 2018 === 1 ? 'year' : 'years'} and{' '}
                <span className="font-bold text-2xl text-cyan-400">
                  {(() => {
                    const currentMonth = new Date().getMonth();
                    const monthsSinceJune = currentMonth >= 5 ? currentMonth - 5 : currentMonth + 7;
                    return monthsSinceJune;
                  })()}
                </span>{' '}
                {(() => {
                  const currentMonth = new Date().getMonth();
                  const monthsSinceJune = currentMonth >= 5 ? currentMonth - 5 : currentMonth + 7;
                  return monthsSinceJune === 1 ? 'month' : 'months';
                })()}.
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-cyan-400 italic mb-12">
              * This website is optimized for the cybernetic interface experience.
            </p>

            <div className="flex flex-col gap-6 justify-center">
              <Link 
                href="/about"
                className="w-full sm:w-auto mx-auto inline-flex items-center justify-center px-8 py-4 border border-cyan-400 text-base font-mono rounded-none text-yellow-300 hover:text-black bg-transparent hover:bg-cyan-400 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">// ACCESS PROFILE DATA</span>
                <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              
              <a
                href="https://github.com/etklam/portfolio-2025-apr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto mx-auto inline-flex items-center justify-center px-8 py-4 border border-cyan-400 text-base font-mono rounded-none text-yellow-300 hover:text-black bg-transparent hover:bg-cyan-400 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  // ACCESS SOURCE CODE
                </span>
                <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:mail@kwunlam.com"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-yellow-300 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mail@kwunlam.com
              </a>
              <a
                href="https://elliot.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-green-600 hover:text-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-2.5 6a6 6 0 110-12 6 6 0 010 12zm0 2a8 8 0 100-16 8 8 0 000 16z"/>
                </svg>
                My Blog
              </a>
              <a
                href="https://www.linkedin.com/in/kwun-lam-chan-43775120a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-yellow-300 hover:text-cyan-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return renderMainContent();
  }

  return renderMainContent();
}