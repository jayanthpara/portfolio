import React from "react";

const Hero = () => {
  return (
    <header className="bg-blue-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to TechNova Solutions
      </h1>
      <p className="text-lg md:text-xl">
        Empowering your business with cutting-edge IT solutions
      </p>
      <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100">
        Get Started
      </button>
    </header>
    
  );
};

export default Hero;
