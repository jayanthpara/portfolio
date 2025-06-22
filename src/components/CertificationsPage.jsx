import React from 'react';
import cert1 from './assets/wall/c1.png';
import cert2 from './assets/wall/c2.png';
import cert3 from './assets/wall/c3.png';
import cert4 from './assets/wall/c4.png';

const certifications = [
  {
    id: 1,
    title: "Apache Kafka",
    issuer: "Infosys",
    date: "2025",
    description: "Learned to build real-time data pipelines and stream processing systems using Apache Kafka",
    image: cert1,
    skills: ["Python", "OOP", "Async Programming"],
    credentialId: "PY-ADV-2024-001"
  },
  {
    id: 2,
    title: "Power BI",
    issuer: "OfficeMaster",
    date: "2024",
    description: "Hands-on experience in data visualization using Power BI",
    image: cert2,
    skills: ["Power BI", "Dashboards"],
    credentialId: "PB-2024-002"
  },
  {
    id: 3,
    title: "SQL Advanced",
    issuer: "Hackerrank",
    date: "2023",
    description: "Mastered advanced SQL including joins, subqueries, window functions",
    image: cert3,
    skills: ["SQL", "RDBMS"],
    credentialId: "SQL-2023-003"
  },
  {
    id: 4,
    title: "DBMS",
    issuer: "IIT Kharagpur",
    date: "2023",
    description: "Relational DB concepts, normalization, and query writing",
    image: cert4,
    skills: ["DBMS", "MySQL"],
    credentialId: "DB-2023-004"
  }
];

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-12 px-6 lg:px-20">
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-12">All Certifications</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map(cert => (
          <div key={cert.id} className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-xl hover:scale-105 transition-transform">
            <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{cert.title}</h2>
            <p className="text-sm text-gray-300 mb-2">{cert.issuer} • {cert.date}</p>
            <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="bg-purple-600 bg-opacity-30 px-2 py-1 rounded">{skill}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">ID: {cert.credentialId}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
