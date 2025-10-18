import React, { useState, useEffect } from "react";
import { X, MapPin, Calendar } from "lucide-react";


import wall1 from './assets/uploaded/1000319095.jpg';

// ============================================
// 📸 DEFINE YOUR IMAGES WITH DETAILS HERE
// ============================================
const imageList = [
  {
    id: 1,
    image: "https://iili.io/KvpHIMQ.jpg",
    title: "Cognizant Drive",
    caption: "Successfully cleared 6 rounds and secured a position in the GenC Next category at Cognizant.",
    date: "Oct 9, 2025",
    location: "MREC, Hyderabad",
  },
  {
    id: 2,
    image: "https://iili.io/KvmyqfS.jpg",
    title: "Vishesh Core Team",
    caption: "Core organizing member for the annual tech fest at MREC, handling multiple aspects of event management.",
    date: "Sept 25, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 3,
    image: "https://iili.io/KvmyIbj.jpg",
    title: "CTS Hackathon",
    caption: "Presented and pitched my innovative project alongside my team at the CTS Hackathon.",
    date: "Sept 17, 2025",
    location: "MRU, Hyderabad",
  },
  {
    id: 5,
    image: "https://iili.io/KvpHODG.jpg",
    title: "Just wanted to show",
    caption: "A candid photo of me taken on a random day.",
    date: "Oct 2, 2025",
    location: "Khammam, TG",
  },
  {
    id: 4,
    image: "https://iili.io/Kvmpgl1.jpg",
    title: "Tech Event",
    caption: "Collaborating with my department team during a tech event at MRU.",
    date: "Sept 25, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 6,
    image: "https://iili.io/Kvmp5Sn.jpg",
    title: "Vishesh 2k25",
    caption: "Managing backstage operations and handling stage-related activities at a college event.",
    date: "Sept 24, 2025",
    location: "MREC, Hyderabad",
  },
  {
    id: 7,
    image: "https://iili.io/Kvmp8iB.jpg",
    title: "Artist",
    caption: "Created a captivating piece of digital art using my own photos.",
    date: "Dec 21, 2024",
    location: "Hyderabad",
  },
  {
    id: 8,
    image: "https://iili.io/KvmyAWQ.jpg",
    title: "IDE Bootcamp",
    caption: "Participated in an AICTE Bootcamp focusing on Idea Development and Entrepreneurship.",
    date: "Feb 21, 2025",
    location: "Guntur, AP",
  },
  {
    id: 9,
    image: "https://iili.io/Kvp9nBp.jpg",
    title: "Atharva Team",
    caption: "Atharva team and interns in a tech event together.",
    date: "Sept 25, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 11,
    image: "https://iili.io/Kvp2AKl.jpg",
    title: "Seminar Day",
    caption: "Delivered a seminar on Design Thinking and career opportunities in design fields.",
    date: "Aug 31, 2024",
    location: "MREC, Hyderabad",
  },
  {
    id: 12,
    image: "https://iili.io/Kvp3kk7.jpg",
    title: "Tech Event",
    caption: "Collaboration with my department team at a major tech event.",
    date: "Sept 25, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 13,
    image: "https://iili.io/KvpFuvS.jpg",
    title: "Encode 24Hrs Hackathon",
    caption: "Built and pitched an amazing project during a 24-hour hackathon.",
    date: "Apr 26, 2025",
    location: "MREC, Hyderabad",
  },
  {
    id: 14,
    image: "https://iili.io/Kvp3vp9.jpg",
    title: "Internship Offer",
    caption: "Secured an internship offer at Atharva DSC.",
    date: "Feb 28, 2024",
    location: "MREC, Hyderabad",
  },
  {
    id: 15,
    image: "https://iili.io/Kvp3s2V.jpg",
    title: "T Hub Workshop",
    caption: "Joined a Blockchain meetup organized by Aleph Zero at T Hub.",
    date: "Oct 19, 2024",
    location: "T Hub, Hyderabad",
  },
  {
    id: 16,
    image: "https://iili.io/KvpKAKv.jpg",
    title: "RBI90 QUIZ",
    caption: "Represented MREC in the state-level round of the RBI90 QUIZ.",
    date: "Nov 18, 2024",
    location: "Novotel, Hyderabad",
  },
  {
    id: 17,
    image: "https://iili.io/KvpfDT7.jpg",
    title: "Core Member",
    caption: "Promoted to the core team member of my team at MREC.",
    date: "June 21, 2024",
    location: "MREC",
  },
  {
    id: 18,
    image: "https://iili.io/KvpfCg4.jpg",
    title: "Microsoft Campus",
    caption: "Attended an insightful workshop at Microsoft’s Hyderabad office representing my team.",
    date: "Dec 21, 2024",
    location: "MS office, Hyderabad",
  },
  {
    id: 19,
    image: "https://iili.io/KvpfmQe.jpg",
    title: "Student Association",
    caption: "Collaborated with the Student Committee at MR Deemed To Be University for a successful event.",
    date: "Sept 21, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 20,
    image: "https://iili.io/Kvpfarx.jpg",
    title: "Atlassian Meetup",
    caption: "Attended an engaging meetup by Atlassian about their JIRA services.",
    date: "Apr 15, 2024",
    location: "IBIS, Hyderabad",
  },
  {
    id: 21,
    image: "https://iili.io/KvpfgQn.jpg",
    title: "Interns and Team",
    caption: "The current team along with interns at a tech event.",
    date: "Sept 26, 2025",
    location: "MR Deemed To Be University, Hyderabad",
  },
  {
    id: 22,
    image: wall1,
    title: "Salesforce Office",
    caption: "Participated in a Cybersecurity workshop organized by Salesforce India.",
    date: "Dec 21, 2024",
    location: "Salesforce, Hyderabad",
  }
];


// Shimmer Loading Component
const ImageSkeleton = () => (
  <div className="absolute inset-0 bg-gray-800 overflow-hidden">
    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-[length:200%_100%]"></div>
  </div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [columnCount, setColumnCount] = useState(4);

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumnCount(1);
      else if (window.innerWidth < 768) setColumnCount(2);
      else if (window.innerWidth < 1024) setColumnCount(3);
      else setColumnCount(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute photos into columns for masonry layout
  const distributePhotos = () => {
    const columns = Array.from({ length: columnCount }, () => []);
    imageList.forEach((photo, idx) => {
      columns[idx % columnCount].push(photo);
    });
    return columns;
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const columns = distributePhotos();

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-8 md:py-16">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Explore my photo collection
            </p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Back 
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="flex gap-3 md:gap-4">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-3 md:gap-4">
              {column.map((photo) => {
                const isLoaded = loadedImages[photo.id];
                const isHovered = hoveredId === photo.id;

                return (
                  <div
                    key={photo.id}
                    className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg bg-gray-800"
                    style={{
                      transform: isHovered && isLoaded ? "scale(1.02)" : "scale(1)",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      zIndex: isHovered ? 10 : 1,
                    }}
                    onMouseEnter={() => setHoveredId(photo.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => isLoaded && setSelectedImage(photo)}
                  >
                    {!isLoaded && <ImageSkeleton />}

                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-auto object-cover transition-all duration-500"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        filter: isHovered && isLoaded ? "brightness(0.8)" : "brightness(1)",
                      }}
                      onLoad={() => handleImageLoad(photo.id)}
                      loading="lazy"
                    />

                    {isLoaded && (
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 pointer-events-none"
                        style={{ opacity: isHovered ? 1 : 0 }}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                          <p className="text-xs text-gray-300 flex items-center gap-1">
                            <MapPin size={14} />
                            {photo.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full transition-all hover:scale-110 z-10"
            >
              <X size={22} />
            </button>

            <div
              className="max-w-5xl w-full flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain"
                />
              </div>

              <div className="bg-gray-900/90 rounded-2xl p-6 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-1">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-400">{selectedImage.caption}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-800">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-blue-400 w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Date</p>
                      <p className="text-base font-medium">{selectedImage.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-green-400 w-5 h-5 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="text-base font-medium">{selectedImage.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
