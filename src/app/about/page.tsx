'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: number;
  email: string;
  name: string;
}

export default function About() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

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

  return (
    <div className="min-h-screen bg-black text-yellow-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-300 mb-8 neon-text">About Me</h1>
          
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-yellow-300 leading-relaxed mb-8">
              I am a passionate software developer with expertise in building modern web applications.
              My journey in technology began with a curiosity about how things work, which led me to
              explore various programming languages and frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Education</h3>
                <p className="text-yellow-300">
                  Bachelor's Degree in Computer Science<br />
                  Hong Kong Baptist University<br />
                  2015 - 2019
                </p>
              </div>

              <div className="cyber-card p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-4">Location</h3>
                <p className="text-yellow-300">
                  Based in Hong Kong<br />
                  Open to remote opportunities
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Expertise</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Plug and Play Developer</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Fast Learner</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Good Communicator</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Backend Development</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Java</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Spring Framework</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Microservices</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">Database Design</span>
                <span className="px-4 py-2 bg-black text-yellow-300 rounded-none border border-cyan-400">API Development</span>
              </div>
            </div>

            <div className="cyber-card p-6 mt-12">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">Contact</h3>
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="mailto:mail@kwunlam.com"
                  className="inline-flex items-center text-lg text-yellow-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  mail@kwunlam.com
                </a>
                <a
                  href="https://github.com/etklam/portfolio-2025-apr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg text-yellow-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/kwun-lam-chan-43775120a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-lg text-yellow-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/skills"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-base font-medium rounded-none text-yellow-300 bg-transparent hover:bg-cyan-900 hover:text-yellow-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View My Skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 