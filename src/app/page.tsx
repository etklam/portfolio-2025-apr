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

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <div className="animated-text">
              <p className="text-base sm:text-lg">
                <span className="text-3xl sm:text-4xl">Welcome to My Personal Page</span>
              </p>
            </div>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
                I am Elliot, A Developer from Hong Kong.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
                Experienced Full Stack Developer with <span className="font-bold text-2xl text-indigo-600">{experience.years}</span> {experience.years === 1 ? 'year' : 'years'} and <span className="font-bold text-2xl text-indigo-600">{experience.months}</span> {experience.months === 1 ? 'month' : 'months'} of hands-on development experience
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
                As the point of start of my Geek lifestyle: Domain{' '}
                <a 
                  href="https://who.is/whois/kwunlam.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  kwunlam.com
                </a>{' '}
                registered on <span className="font-bold">June 8, 2018</span>, active for{' '}
                <span className="font-bold text-2xl text-indigo-600">{new Date().getFullYear() - 2018}</span>{' '}
                {new Date().getFullYear() - 2018 === 1 ? 'year' : 'years'} and{' '}
                <span className="font-bold text-2xl text-indigo-600">
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
              <p className="text-base sm:text-lg text-gray-500 italic mb-8 sm:mb-12">
                * This website is primarily designed for desktop viewing for the best experience, while maintaining full mobile responsiveness.
              </p>

              <div className="flex flex-col gap-4 justify-center">
                <Link 
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Learn More About Me
                </Link>
                <a
                  href="https://github.com/etklam/portfolio-2025-apr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Project Readme
                </a>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mail@kwunlam.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mail@kwunlam.com
                </a>
                <a
                  href="https://www.linkedin.com/in/kwun-lam-chan-43775120a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-blue-600 hover:text-blue-700 transition-colors"
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
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center">
          <div className="animated-text">
            <p className="text-base sm:text-lg">
              <span className="text-3xl sm:text-4xl">Welcome to My Personal Page</span>
            </p>
          </div>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              I am Elliot, A Developer from Hong Kong.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              Experienced Full Stack Developer with <span className="font-bold text-2xl text-indigo-600">{experience.years}</span> {experience.years === 1 ? 'year' : 'years'} and <span className="font-bold text-2xl text-indigo-600">{experience.months}</span> {experience.months === 1 ? 'month' : 'months'} of hands-on development experience
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12">
              As the point of start of my Geek lifestyle: Domain{' '}
              <a 
                href="https://who.is/whois/kwunlam.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                kwunlam.com
              </a>{' '}
              registered on <span className="font-bold">June 8, 2018</span>, active for{' '}
              <span className="font-bold text-2xl text-indigo-600">{new Date().getFullYear() - 2018}</span>{' '}
              {new Date().getFullYear() - 2018 === 1 ? 'year' : 'years'} and{' '}
              <span className="font-bold text-2xl text-indigo-600">
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
            <p className="text-base sm:text-lg text-gray-500 italic mb-8 sm:mb-12">
              * This website is primarily designed for desktop viewing for the best experience, while maintaining full mobile responsiveness.
            </p>

            <div className="flex flex-col gap-4 justify-center">
              <Link 
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Learn More About Me
              </Link>
              <a
                href="https://github.com/etklam/portfolio-2025-apr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Project Readme
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mail@kwunlam.com"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                mail@kwunlam.com
              </a>
              <a
                href="https://www.linkedin.com/in/kwun-lam-chan-43775120a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center text-lg text-blue-600 hover:text-blue-700 transition-colors"
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
}