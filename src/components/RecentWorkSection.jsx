import React from 'react';
import { Code, User } from 'lucide-react';

const recentProjects = [
  {
    title: 'Spent analyzer',
    description: 'A dashboard to visualize your expenditure and get comprehensive data and insights',
    tech: 'React',
    icon: <Code size={40} className="text-gray-400" />
  },
  {
    title: 'Chess Modal',
    description: 'A model for chess games that can predict the next move with comprehensive data analysis',
    tech: 'Python',
    icon: (
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
        <span className="text-2xl">♚</span>
      </div>
    )
  },
  {
    title: 'Interviewer',
    description: 'An AI-powered interview assistant that helps conduct technical interviews',
    tech: 'AI/ML',
    icon: <User size={40} className="text-blue-400" />
  }
];

const RecentWorkSection = () => {
  return (
    <section id="work" className="py-16 bg-black bg-opacity-20 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Recent Work</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recentProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-purple-900 bg-opacity-30 rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              {project.icon}
            </div>
            <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-sm inline-block">{project.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorkSection;

