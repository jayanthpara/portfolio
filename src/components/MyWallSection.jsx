import React from 'react';

const MyWallSection = () => {
  return (
    <section id="wall" className="py-16 bg-black bg-opacity-30 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">My Wall</h2>
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl text-center">
        <p className="text-lg text-gray-300">
          “Success is not final, failure is not fatal: It is the courage to continue that counts.” <br />
          <span className="text-sm text-gray-500">– Winston Churchill</span>
        </p>
        <div className="mt-8 text-sm text-gray-400">
          Here I share my journey, thoughts, and reflections. <br />
          Stay tuned for blogs, tutorials, and creative experiments.
        </div>
      </div>
    </section>
  );
};

export default MyWallSection;
