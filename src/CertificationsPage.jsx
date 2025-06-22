import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const certificates = [
    {
      id: 1,
      title: "Python Advanced",
      issuer: "Tech Institute",
      date: "2024",
      description: "Advanced Python programming concepts including OOP, decorators, and async programming",
      skills: ["Python", "OOP", "Async Programming"],
      credentialId: "PY-ADV-2024-001"
    },
    {
      id: 2,
      title: "React Development",
      issuer: "Web Academy",
      date: "2024",
      description: "Complete React ecosystem including hooks, context, and modern development patterns",
      skills: ["React", "JavaScript", "Hooks"],
      credentialId: "REACT-2024-002"
    },
    {
      id: 3,
      title: "Full Stack Development",
      issuer: "Code Institute",
      date: "2023",
      description: "End-to-end web development covering frontend, backend, and database technologies",
      skills: ["Full Stack", "Node.js", "MongoDB"],
      credentialId: "FS-2023-003"
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      issuer: "Data Academy",
      date: "2023",
      description: "Statistical analysis, machine learning basics, and data visualization techniques",
      skills: ["Python", "ML", "Statistics"],
      credentialId: "DS-2023-004"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCert(cert.id)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="w-full h-40 bg-gray-800 bg-opacity-50 rounded-lg mb-4 flex items-center justify-center">
              <Award size={50} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
            {hoveredCert === cert.id && (
              <div className="mt-4 space-y-3 animate-fade-in">
                <p className="text-sm text-gray-300">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="bg-purple-600 bg-opacity-30 text-xs px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => console.log('Navigate to certifications')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>View More</span>
          <ExternalLink size={18} />
        </button>
      </div>
    </section>
  );
};

export default CertificationsSection;
