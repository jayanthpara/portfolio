import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-[#12043C] text-white px-6 md:px-16 py-16 flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-12">ME</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl items-center mb-20">
        {/* Left Text Block */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Jayanth Para</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a versatile developer and data science enthusiast with a strong foundation in UI/UX design.
            Combining technical expertise in coding and data analysis with a keen eye for user-centered design,
            I create solutions that are both functional and visually engaging. Passionate about transforming
            complex data into actionable insights and intuitive interfaces, I continuously seek to innovate
            and deliver impactful projects that drive meaningful results.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-64 h-72 bg-gray-300 -top-5 -right-5 rounded-md z-0" />
          <img
            src="/your-photo.png"
            alt="Jayanth Para"
            className="relative z-10 w-64 h-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Work Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        {/* Stats Left */}
        <div className="flex flex-col gap-5">
          <div className="bg-[#5c5a70] p-5 rounded-xl flex items-center gap-5">
            <img src="/icons/web-icon.png" alt="Websites" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold text-white">Websites delivered</h3>
              <p className="text-sm text-gray-200">12 Fullstack web projects from development to deployment</p>
            </div>
          </div>

          <div className="bg-[#5c5a70] p-5 rounded-xl flex items-center gap-5">
            <img src="/icons/mobile-icon.png" alt="Mobile apps" className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold text-white">Mobile apps</h3>
              <p className="text-sm text-gray-200">4 Mobile apps for Android and iOS with version control</p>
            </div>
          </div>

          <div className="bg-[#5c5a70] p-5 rounded-xl flex items-center gap-5">
            <img src="/icons/project-icon.png" alt="Projects" className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold text-white">Projects addressed</h3>
              <p className="text-sm text-gray-200">9 Web and Mobile projects addressed with expert experience</p>
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-4">My track record</h3>
          <p className="text-md text-gray-300 mb-6">
            Just like the pilots having fight hours I too got some measure of my work as
            working hours and also another accurate measure as productive hours
          </p>
          <div className="flex gap-10 text-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-400">820+</h2>
              <p className="text-sm text-gray-300">Work hours</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-400">420+</h2>
              <p className="text-sm text-gray-300">Productive time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
