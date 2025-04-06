'use client';

export default function About() {
  const aboutContent = {
    title: 'About Me',
    description: 'I am a proactive programmer with years of experience in government and banking projects, delivering robust solutions for transport and core banking systems. With a strong foundation in multiple programming languages and technologies, I excel at modernizing legacy systems, developing new modules, and ensuring operational efficiency. My positive work attitude fuels my ability to tackle challenges, implement innovative solutions, and collaborate effectively to achieve project goals.',
    skills: {
      title: 'Skills & Expertise',
      items: [
        'Full-stack Development',
        'Legacy System Modernization',
        'Core Banking Systems',
        'Transport Systems',
        'Government Projects',
        'Team Collaboration'
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        'Government projects',
        'Banking system development',
        'Transport system solutions',
        'Legacy system modernization'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{aboutContent.title}</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {aboutContent.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{aboutContent.skills.title}</h2>
            <ul className="space-y-4">
              {aboutContent.skills.items.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{aboutContent.experience.title}</h2>
            <ul className="space-y-4">
              {aboutContent.experience.items.map((exp, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 