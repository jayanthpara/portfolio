import React from 'react';

const SkillsSection = () => {
  const skills = ['Python', 'MySQL', 'MongoDB', 'Kafka', 'Flask', 'Flutter'];

  return (
    <section id="skills" className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center hover:bg-purple-600 hover:bg-opacity-30 transition-colors"
          >
            <span className="font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
