'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('backend');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const skillCategories: Record<string, SkillCategory> = {
    backend: {
      title: 'Backend Technologies',
      skills: [
        'Java',
        'Spring Boot',
        'Node.js',
        'Express',
        'C#',
        'ASP.NET',
        'RESTful APIs',
        'GraphQL',
        'Hibernate',
        'JPA'
      ],
      icon: '<svg class="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
    },
    frontend: {
      title: 'Frontend Development',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vue',
        'Nuxt',
        'Tailwind CSS',
        'Redux',
        'Webpack'
      ],
      icon: '<svg class="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    },
    cloud: {
      title: 'Cloud Services',
      skills: [
        'AWS (EC2, S3, Lambda)',
        'Azure',
        'Google Cloud',
        'Serverless',
        'Kubernetes',
        'Docker Swarm'
      ],
      icon: '<svg class="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" /></svg>'
    },
    devops: {
      title: 'DevOps & Infrastructure',
      skills: [
        'GitLab CI/CD',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Ansible',
        'Prometheus',
        'Grafana'
      ],
      icon: '<svg class="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>'
    },
    testing: {
      title: 'Testing & Automation',
      skills: [
        'Jest',
        'Cypress',
        'Selenium',
        'JUnit',
        'OpenText',
        'SonarQube'
      ],
      icon: '<svg class="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300 neon-text">Technical Skills</h1>
        
        {/* Category Navigation */}
        {/* Category Navigation with enhanced visual feedback */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 transition-all text-lg font-medium duration-300 ${
                activeCategory === category
                  ? 'bg-cyan-900 text-yellow-300 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50'
                  : 'bg-black text-yellow-300 border border-cyan-400 hover:bg-cyan-900'
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="cyber-card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-400/20"
            >
              <div className="w-16 h-16 bg-black rounded-full border border-cyan-400 flex items-center justify-center mx-auto mb-6">
                <div dangerouslySetInnerHTML={{ __html: skillCategories[activeCategory].icon }} />
              </div>
              <h3 className="text-xl font-semibold text-center text-yellow-300">{skill}</h3>
            </div>
          ))}
        </div>

        {/* Career Link and Go to Top Button */}
        <div className="mt-12 text-center space-x-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-base font-medium rounded-none text-yellow-300 bg-transparent hover:bg-cyan-900 transition-colors duration-200"
            aria-label="Go to top"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to Top
          </button>
          <Link
            href="/career"
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-base font-medium rounded-none text-yellow-300 bg-transparent hover:bg-cyan-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View My Career Journey
          </Link>
        </div>
      </div>
    </div>
  );
} 