import React from 'react';
import { Mail, User } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Black Box */}
      <div className="flex-1 bg-black text-white flex flex-col justify-between p-8">
        {/* Top Name */}
        <div className="text-lg font-medium">Jayanth Para</div>

        {/* Center Title */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-6xl font-bold">PORTFOLIO</h1>
        </div>

        {/* Bottom Details */}
        <div className="space-y-4">
          <p className="text-sm text-gray-300">Hyderabad, Telangana</p>

          <div className="flex items-center space-x-4 text-sm border-t border-gray-700 pt-4">
            <Mail size={16} />
            <span>jayanthpara21@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4 text-sm border-t border-gray-700 pt-4">
            <span role="img" aria-label="location">📍</span>
            <div>
              <div>Jayanth Para</div>
              <div className="text-gray-400 text-xs">Where ever you go it is same</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Navigation */}
      <div className="w-60 bg-purple-900 text-white p-4 space-y-4">
        {[
          { label: "ME", icon: <User size={20} /> },
          { label: "Limits" },
          { label: "Experience" },
          { label: "Work" },
          { label: "Skills" },
          { label: "Technologies" },
        ].map((item, idx) => (
          <div key={idx} className="bg-purple-600 bg-opacity-30 p-4 rounded-lg hover:bg-purple-700 transition-all">
            <div className="flex items-center space-x-2">
              {item.icon && <span>{item.icon}</span>}
              <div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-xs text-gray-300">Things that you should know about me</div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-purple-600 bg-opacity-20 p-4 rounded-lg text-center text-sm text-gray-300">
          more...
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
