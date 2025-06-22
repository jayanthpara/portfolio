import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 lg:px-20 bg-black bg-opacity-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold">Athanya DSC – Web Developer</h3>
          <p className="text-gray-400">Designed visual frameworks and contributed to front-end development.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Athanya DSC – Lead Developer</h3>
          <p className="text-gray-400">Led a team of designers and developers across multiple projects.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Nirvaha – Content Creator</h3>
          <p className="text-gray-400">Developed educational content on technical and soft skills.</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
