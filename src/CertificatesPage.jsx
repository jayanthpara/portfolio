import React, { useState, useMemo } from "react";
import { Filter, X, Check } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    image: "https://i.ibb.co/gMTsbVPx/Data-Analytics-Accenture-page-0001.jpg  ",
    title: "Data Analytics",
    issuer: "Accenture",
    category: "Data Science",
    description: "Data analytics and understanding",
    date: "June 2024",
    skills: ["MySQL", "Power BI"],
    link: "https://i.ibb.co/gMTsbVPx/Data-Analytics-Accenture-page-0001.jpg",
  },
  {
    id: 2,
    image: "https://i.ibb.co/S7G65H3p/Data-Base-Management-System-page-0001.jpg",
    title: "RDBMS",
    issuer: "NPTEL",
    category: "Data Science",
    description: "Relational Database Management system with ER and SQL",
    date: "June 2024",
    skills: ["SQL", "MySQL", "ER"],
    link: "https://i.ibb.co/S7G65H3p/Data-Base-Management-System-page-0001.jpg",
  },
  {
    id: 3,
    image: "https://i.ibb.co/7tQf1njD/sql-advanced-certificate-1-page-0001.jpg",
    title: "SQL Advanced",
    issuer: "Hackerrank",
    category: "Data Science",
    description: "Complex queries and joins in handling data",
    date: "August 2024",
    skills: ["SQL", "MySQL", "Databases"],
    link: "https://i.ibb.co/7tQf1njD/sql-advanced-certificate-1-page-0001.jpg",
  },
  {
    id: 4,
    image: "https://i.ibb.co/rfNSntDt/sql-intermediate-certificate-1-page-0001.jpg",
    title: "SQL Intermediate",
    issuer: "Hackerrank",
    category: "Data Science",
    description: "Complex queries and joins in handling data",
    date: "August 2024",
    skills: ["SQL", "MySQL", "Databases"],
    link: "https://i.ibb.co/rfNSntDt/sql-intermediate-certificate-1-page-0001.jpg",
  },
  {
    id: 5,
    image: "https://i.ibb.co/Tq0SmsYH/Python-for-Data-Science-1-1-page-0001.jpg",
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "Data Science",
    description: "Statistical analysis and data visualization using python",
    date: "August 2024",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    link: "https://i.ibb.co/Tq0SmsYH/Python-for-Data-Science-1-1-page-0001.jpg",
  },
  {
    id: 6,
    image: "https://i.ibb.co/4nFqP2rj/Certificate-Of-Completion-Introduction-to-Career-Skills-in-Data-Analytics-page-0001.jpg",
    title: "Skills in Data Science",
    issuer: "Linkedin Learning",
    category: "Data Science",
    description: "Career oppurtunities and skills in Data Science",
    date: "August 2024",
    skills: ["Problem Solving", "Data", "Visualization"],
    link: "https://i.ibb.co/4nFqP2rj/Certificate-Of-Completion-Introduction-to-Career-Skills-in-Data-Analytics-page-0001.jpg",
  },
  {
    id: 7,
    image: "https://i.ibb.co/G4JYdtBP/Delloit-certificate-2-page-0001.jpg",
    title: "Data Analytics",
    issuer: "Delloit",
    category: "Data Science",
    description: "Data analytics job simulation",
    date: "March 2025",
    skills: ["Analytics"],
    link: "https://i.ibb.co/G4JYdtBP/Delloit-certificate-2-page-0001.jpg",
  },
  {
    id: 8,
    image: "https://i.ibb.co/Qv4TzCVr/certificate-1-2-page-0001.jpg",
    title: "PowerBI",
    issuer: "Officemaster",
    category: "Data Science",
    description: "BI tool with visualizations and dashboards",
    date: "November 2024",
    skills: ["power BI", "R lang"],
    link: "https://i.ibb.co/Qv4TzCVr/certificate-1-2-page-0001.jpg",
  },
  {
    id: 9,
    image: "https://i.ibb.co/gLqbNKt6/Springboard-Kafka-certificate-1-page-0001.jpg",
    title: "Kafka",
    issuer: "Infosys",
    category: "Data Science",
    description: "Clusters and nodes in kafka and data streaming",
    date: "june 2025",
    skills: ["Apache", "Kafka", "Spark"],
    link: "https://i.ibb.co/gLqbNKt6/Springboard-Kafka-certificate-1-page-0001.jpg",
  },
  {
    id: 19,
    image: "https://i.ibb.co/0yhKrc64/NPTEL-Introduction-to-Machine-Learning-1-page-0001.jpg",
    title: "Machine Learning",
    issuer: "NPTEL",
    category: "Backend",
    description: "Machine learning and algorithms",
    date: "April 2025",
    skills: ["ML", "Python", "Scikit"],
    link: "https://i.ibb.co/0yhKrc64/NPTEL-Introduction-to-Machine-Learning-1-page-0001.jpg",
  },
  {
    id: 20,
    image: "https://i.ibb.co/mC2gxmT0/Introduction-to-Data-Science-Simplilearn-page-0001.jpg",
    title: "Introduction to Data",
    issuer: "Simplilearn",
    category: "Data Science",
    description: "Brief understandig of data and data science",
    date: "June 2024",
    skills: ["Data", "Data Science"],
    link: "https://i.ibb.co/mC2gxmT0/Introduction-to-Data-Science-Simplilearn-page-0001.jpg",
  },
  {
    id: 10,
    image: "https://i.ibb.co/bRqqCd8r/Introduction-to-Ethereum-Blockchain-Springboard-1-page-0001.jpg",
    title: "Blockchain",
    issuer: "Springboard",
    category: "Backend",
    description: "Understanding of blockchain",
    date: "June 2025",
    skills: ["Blockchain"],
    link: "https://i.ibb.co/bRqqCd8r/Introduction-to-Ethereum-Blockchain-Springboard-1-page-0001.jpg",
  },
  {
    id: 11,
    image: "https://i.ibb.co/LzB3DcvY/GDSC-2024-jams-1.png",
    title: "Google cloud",
    issuer: "Google",
    category: "Backend",
    description: "Cloud infrastructure and APIs",
    date: "April 2024",
    skills: ["Cloud", "Google Cloud", "API"],
    link: "https://i.ibb.co/LzB3DcvY/GDSC-2024-jams-1.png",
  },
  {
    id: 12,
    image: "https://i.ibb.co/v6cCSyMq/Solidity-Smart-Contract-Programming-for-Ethereum-Blockchain-springboard-1-page-0001.jpg",
    title: "Ethereum Blockchain",
    issuer: "Springboard",
    category: "Fullstack",
    description: "Blockchain development",
    date: "June 2025",
    skills: ["Blockchain", "Ethereum"],
    link: "https://i.ibb.co/v6cCSyMq/Solidity-Smart-Contract-Programming-for-Ethereum-Blockchain-springboard-1-page-0001.jpg",
  },
  {
    id: 13,
    image: "https://i.ibb.co/nNm84FDC/Screenshot-2025-06-26-191815.png",
    title: "Data Analysis with Python",
    issuer: "Coursera",
    category: "Data Science",
    description: "Statistical analysis and data visualization",
    date: "February 2024",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    link: "https://certificate-link.com/5",
  },
  {
    id: 14,
    image: "https://i.ibb.co/Rp0dx8cK/Whats-App-Image-2025-05-26-at-10-56-21-3159c4e1-1.jpg",
    title: "Vibathon",
    issuer: "GeekRoom",
    category: "Competitions",
    description: "A wonderful collaborative work",
    date: "May 2025",
    skills: ["Problem Solving", "Team Work", "Innovation"],
    link: "https://i.ibb.co/Rp0dx8cK/Whats-App-Image-2025-05-26-at-10-56-21-3159c4e1-1.jpg",
  },
  {
    id: 15,
    image: "https://i.ibb.co/qYfMP5W1/IDE-bootcamp-2-page-0001.jpg",
    title: "AICTE Bootcamp",
    issuer: "AICTE",
    category: "Participation",
    description: "Idea Development and enterpenuership Bootcamp",
    date: "February 2025",
    skills: ["Idea", "Startup", "Bootcamp"],
    link: "https://i.ibb.co/qYfMP5W1/IDE-bootcamp-2-page-0001.jpg",
  },
  {
    id: 16,
    image: "https://i.ibb.co/qYdZgsYz/IC-coordinator-certificate-1-page-0001.jpg",
    title: "International Conferences",
    issuer: "MREC",
    category: "Competitions",
    description: "Worked as coordinator for two International Conferences",
    date: "February 2025",
    skills: ["Team work", "Collaboration"],
    link: "https://i.ibb.co/qYdZgsYz/IC-coordinator-certificate-1-page-0001.jpg",
  },
  {
    id: 17,
    image: "https://i.ibb.co/5gMmWFQw/quiz-winner-pj-page-0001.jpg",
    title: "QUIZ winner",
    issuer: "MREC",
    category: "Competitions",
    description: "Placed first in international physics day QUIZ",
    date: "December 2023",
    skills: ["Physics", "Laws"],
    link: "https://i.ibb.co/5gMmWFQw/quiz-winner-pj-page-0001.jpg",
  },
  {
    id: 18,
    image: "https://i.ibb.co/rGNymv9d/python-workshop-pj-page-0001.jpg",
    title: "Python Workshop",
    issuer: "Skiltimate",
    category: "Frontend",
    description: "GUI using python",
    date: "September 2024",
    skills: ["Python", "GUI", "Bootstrap"],
    link: "https://i.ibb.co/rGNymv9d/python-workshop-pj-page-0001.jpg",
  },
  {
    id: 21,
    image: "https://i.ibb.co/k6P2kgnq/c-lang-workshop-pj-page-0001.jpg",
    title: "C lang Workshop",
    issuer: "Skiltimate",
    category: "Backend",
    description: "C language with pointers",
    date: "Jne 2023",
    skills: ["C lang", "Programming"],
    link: "https://i.ibb.co/k6P2kgnq/c-lang-workshop-pj-page-0001.jpg",
  },
  {
    id: 22,
    image: "https://i.ibb.co/yBPNZC24/TEDx-MREC-1.png",
    title: "Tedx",
    issuer: "Mrec",
    category: "Participation",
    description: "Ted talks from industry experts",
    date: "April 2024",
    skills: ["Talks", "Motivation"],
    link: "https://i.ibb.co/yBPNZC24/TEDx-MREC-1.png",
  },
  {
    id: 23,
    image: "https://i.ibb.co/prdFK6Wr/Stratum24-organizer-certificate-1-1-page-0001.jpg",
    title: "Stratum24",
    issuer: "Atharva",
    category: "Competitions",
    description: "Hosted 24 hours hackthon",
    date: "December 2024",
    skills: ["competition", "Team Work", "Innovation"],
    link: "https://i.ibb.co/prdFK6Wr/Stratum24-organizer-certificate-1-1-page-0001.jpg",
  },
  {
    id: 34,
    image: "https://i.ibb.co/qYQqTWYc/Nation-Building-1-page-0001.jpg",
    title: "Nationa Building",
    issuer: "Naukari",
    category: "Participation",
    description: "Idea Development problem solving",
    date: "February 2025",
    skills: ["Idea", "Startup", "Bootcamp"],
    link: "https://i.ibb.co/qYQqTWYc/Nation-Building-1-page-0001.jpg",
  },
  {
    id: 25,
    image: "https://i.ibb.co/1fR2rSPW/RBI-participation-1-page-0001.jpg",
    title: "RBI90 QUIZ",
    issuer: "RBI",
    category: "participation",
    description: "Made it to second level in state quiz",
    date: "February 2025",
    skills: ["Team work", "Collaboration"],
    link: "https://i.ibb.co/1fR2rSPW/RBI-participation-1-page-0001.jpg",
  },
  {
    id: 26,
    image: "https://i.ibb.co/5gMmWFQw/quiz-winner-pj-page-0001.jpg",
    title: "QUIZ winner",
    issuer: "MREC",
    category: "Competitions",
    description: "Placed first in international physics day QUIZ",
    date: "December 2023",
    skills: ["Physics", "Laws"],
    link: "https://i.ibb.co/5gMmWFQw/quiz-winner-pj-page-0001.jpg",
  },
  {
    id: 27,
    image: "https://i.ibb.co/rGNymv9d/python-workshop-pj-page-0001.jpg",
    title: "Python Workshop",
    issuer: "Skiltimate",
    category: "Frontend",
    description: "GUI using python",
    date: "September 2024",
    skills: ["Python", "GUI", "Bootstrap"],
    link: "https://i.ibb.co/rGNymv9d/python-workshop-pj-page-0001.jpg",
  },
];

const categories = ["Data Science", "Frontend", "Backend", "Fullstack", "Competitions", "Participation"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CertificatesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
  };

  const filteredAndGroupedCertificates = useMemo(() => {
    if (selectedCategories.length === 0) {
      return [{ category: "All Certificates", certificates }];
    }

    return selectedCategories
      .map((category) => ({
        category,
        certificates: certificates.filter((cert) => cert.category === category),
      }))
      .filter((group) => group.certificates.length > 0);
  }, [selectedCategories]);

  const totalFilteredCount = filteredAndGroupedCertificates.reduce(
    (sum, group) => sum + group.certificates.length,
    0
  );

  return (
    <motion.div
      className="min-h-screen bg-slate-900 py-8 sm:py-16 px-4 sm:px-6 lg:px-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3">
          Certificates & Achievements
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          A showcase of my professional development and technical expertise
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="text-cyan-400" size={18} />
            <span className="text-white font-medium text-sm sm:text-base">Filter by Category:</span>
          </div>

          <div className="hidden sm:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategories.includes(category)
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {selectedCategories.includes(category) && <Check size={14} />}
                {category}
              </button>
            ))}
            {selectedCategories.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="px-3 py-2 rounded-full text-sm font-medium bg-slate-800 text-slate-400 hover:text-white transition-all duration-300 border border-slate-700"
              >
                Clear All
              </button>
            )}
          </div>

          <button
            className="sm:hidden flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-slate-300 border border-slate-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : "All Categories"}
          </button>
        </div>

        {showFilters && (
          <div className="sm:hidden mt-4 bg-slate-800 rounded-2xl p-4 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">Select Categories</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="text-slate-400" size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                    selectedCategories.includes(category)
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  <span>{category}</span>
                  {selectedCategories.includes(category) && <Check size={16} />}
                </button>
              ))}
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => {
                    clearAllFilters();
                    setShowFilters(false);
                  }}
                  className="w-full px-3 py-2 rounded-lg text-sm bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 mt-2"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>

      <motion.div className="mb-4 sm:mb-6" variants={itemVariants}>
        <p className="text-slate-400 text-sm">
          Showing {totalFilteredCount} certificate{totalFilteredCount !== 1 ? "s" : ""}
          {selectedCategories.length > 0 &&
            ` in ${selectedCategories.length} categor${selectedCategories.length !== 1 ? "ies" : "y"}`}
        </p>
      </motion.div>

      <motion.div className="space-y-8 sm:space-y-12" variants={containerVariants}>
        {filteredAndGroupedCertificates.map((group) => (
          <div key={group.category}>
            {selectedCategories.length > 1 && (
              <motion.div className="mb-6" variants={itemVariants}>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{group.category}</h2>
                <div className="h-1 w-20 bg-cyan-500 rounded-full mt-2"></div>
              </motion.div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {group.certificates.map((cert) => (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-[1.03]"
                  variants={itemVariants}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black bg-opacity-60 rounded-full text-[10px] sm:text-xs text-white font-medium">
                      {cert.category}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900 bg-opacity-80 text-white px-3 py-2 text-xs sm:text-sm">
                    <h3 className="font-semibold text-xs sm:text-sm mb-0.5 line-clamp-2">{cert.title}</h3>
                    <div className="hidden sm:block">
                      <p className="text-[10px] text-slate-400 mb-1">{cert.issuer}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500">{cert.date}</span>
                        <div className="px-2 py-1 bg-slate-800 rounded-full text-[10px] font-medium text-slate-200 border border-slate-600">
                          View Certificate →
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {totalFilteredCount === 0 && (
        <motion.div className="text-center py-16" variants={itemVariants}>
          <h3 className="text-lg font-bold text-white mb-2">No certificates found</h3>
          <p className="text-slate-400 mb-4">Try selecting different categories or reset filters</p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2 bg-slate-800 text-white rounded-full font-medium border border-slate-600 hover:bg-slate-700 transition-all duration-300"
          >
            Show All Certificates
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CertificatesPage;
