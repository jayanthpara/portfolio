import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';



import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";


import profileImg from './assets/wall/img.png';

import wall1 from './assets/wall/1.jpg';
import wall2 from './assets/wall/2.jpg';
import wall3 from './assets/wall/3.jpg';
import wall4 from './assets/wall/4.png';
import wall5 from './assets/wall/5.jpg';
import wall6 from './assets/wall/6.jpg';
import wall7 from './assets/wall/7.jpg';
import wall8 from './assets/wall/8.jpg';
import wall9 from './assets/wall/9.png';
import wall10 from './assets/wall/10.jpg';

import cert1 from './assets/wall/c1.png';
import cert2 from './assets/wall/c2.png';
import cert3 from './assets/wall/c3.png';
import cert4 from './assets/wall/c4.png';



import giphy from './assets//wall/contact.gif';

import { User, MapPin, Calendar, Briefcase, Code, Mail, Phone, MessageSquare, Menu, X, Award, Camera, ExternalLink } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';




const Portfoli = () => {





const navigate = useNavigate();










const wallRef = useRef(null);
const isDragging = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);


const desktopSpeed = 0.8; // Must be >= 0.5 to be visible
const mobileSpeed = 0.5;  // Slower for smaller screens

  

const [isMobile, setIsMobile] = useState(false);

const isMobileDevice = () => {
  return typeof window !== "undefined" && window.innerWidth <= 768;
};


useEffect(() => {
  const scrollContainer = wallRef.current;
  if (!scrollContainer) return;

  let scrollSpeed = isMobile ? mobileSpeed : desktopSpeed;

  const autoScroll = () => {
    scrollContainer.scrollLeft += scrollSpeed;

    // Reset scroll for infinite loop effect
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }
  };

  const interval = setInterval(autoScroll, 24); // ~60FPS

  return () => clearInterval(interval);
}, [isMobile]); // Re-run if device type changes






  // Inside Portfolio component
const skillsRef = useRef(null);
const experienceRef = useRef(null);
const workRef = useRef(null);
const technologiesRef = useRef(null);
const meRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [timelineOffset, setTimelineOffset] = useState(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState(false);

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "Apache Kafka",
      issuer: "Infosys",
      date: "2025",
      description: "Learned to build real-time data pipelines and stream processing systems using Apache Kafka",
      image: cert1,
      skills: ["Java", "OOP", "Async Programming"],
      credentialId: "PY-ADV-2024-001"
    },
    {
      id: 2,
      title: "Power BI",
      issuer: "OfficeMaster",
      date: "2024",
      description: "Gained hands-on experience in data visualization, dashboards, and business analytics using Power BI",
      image: cert2,
      skills: ["Power BI", "R Lang"],
      credentialId: "REACT-2024-002"
    },
    {
      id: 3,
      title: "SQL Advanced",
      issuer: "Hackerrank",
      date: "2023",
      description: "Mastered advanced SQL techniques including complex joins, subqueries, window functions, and performance optimization  ",
      image: cert3,
      skills: ["RDBMS", "MySQL", "MongoDB"],
      credentialId: "FS-2023-003"
    },
    {
      id: 4,
      title: "DBMS",
      issuer: "IIT Kharagpur",
      date: "2023",
      description: "Gained in-depth knowledge of relational database design, normalization, and SQL querying using MySQL",
      image: cert4,
      skills: ["RDBMS", "MySQL", "ER"],
      credentialId: "DS-2023-004"
    }
  ];

  // My Wall photos data
  const wallPhotos = [
    {
      id: 1,
      title: "AICTE Bootcamp",
      description: "Bootcamp on Idea, Development and Enterpenuership",
      date: "Febrauary 2025",
      image: wall1,
      category: "Attnedee"
    },
    {
      id: 2,
      title: "NPTEL top 5%",
      description: "Secure top All India 5% in NPTEL DBMS course ",
      date: "March 2024",
      image: wall2,
      category: "Award"
    },
    {
      id: 3,
      title: "Conference Speaker",
      description: "3 Hour seminar on Design thinking and guidance",
      date: "August 2024",
      image: wall3,
      category: "Speaking"
    },
    {
      id: 4,
      title: "Hackathon",
      description: "Successfully Participated in 24 hours intesive coding competition",
      date: "June 2025",
      image: wall4,
      category: "Project"
    },
    {
      id: 5,
      title: "Internship",
      description: "Secured 6 months internship oppurtunity ",
      date: "February 2024",
      image: wall5,
      category: "Acheivement"
    },
    {
      id: 6,
      title: "T hub",
      description: "Visited T-hub meeting foudners and startup owners",
      date: "October 2023",
      image: wall6,
      category: "Work"
    },
    {
      id: 7,
      title: "RBI90 QUIZ",
      description: "State level (second level) participant in RBI quiz",
      date: "November 2024",
      image: wall7,
      category: "Team"
    },
    {
      id: 8,
      title: "Appreciation",
      description: "Received appreciation from college management on securing top in RDBMS",
      date: "June 2024",
      image: wall8,
      category: "Achivement"
    },
    {
      id: 9,
      title: "Promotion",
      description: "Promoted to team lead after working as intern",
      date: "July 2024",
      image: wall9,
      category: "Work"
    }
    ,
    {
      id: 10,
      title: "MS Campus",
      description: "Visited Microsft Campus Hyderabad to connect with real time experts",
      date: "October 2023",
      image: wall10,
      category: "Work"
    }
  ];










  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };





  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



const handleViewCertifications = () => {
  navigate("/certificates");
};

  const handleViewGallery = () => {
    // This would navigate to a gallery page in a real app
    console.log('Navigate to gallery page');
  };






  


const handleMouseDown = (e) => {
  isDragging.current = true;
  startX.current = e.pageX - wallRef.current.offsetLeft;
  scrollLeft.current = wallRef.current.scrollLeft;
};

const handleMouseMove = (e) => {
  if (!isDragging.current) return;
  const x = e.pageX - wallRef.current.offsetLeft;
  const walk = (x - startX.current) * 1.5; // scroll-fastness factor
  wallRef.current.scrollLeft = scrollLeft.current - walk;
};

const handleMouseUp = () => {
  isDragging.current = false;
};











  return (
    










    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}




      <div className="relative min-h-screen flex flex-col lg:flex-row">

        
        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute top-6 right-6 z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 bg-purple-600 bg-opacity-50 rounded-lg backdrop-blur-sm"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Left Side - Main Content */}
        <div className="text-white text-xl font-bold tracking-wide ml-6 mt-6">
  Jayanth Para
</div>


        <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 xl:px-20 pt-20 lg:pt-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight text-center lg:text-left">
              PORTFOLIO
            </h1>
            
            <div className="space-y-4 mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                <span className="text-sm sm:text-base">Welcome, Visitors</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300">
                <span className="text-sm sm:text-base">Building elegant digital experiences</span>
              </div>
            </div>
<div className="mt-6 mb-10 flex justify-center lg:justify-start">
  <a
    href="https://drive.google.com/file/d/1-fz1Rsl0BKTSK1wtDjXDRJFaO7vxtGTg/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transition duration-300"
  >
    Resume
  </a>
</div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold">2+</div>
                <div className="text-gray-400 text-xs lg:text-sm">Years of experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold">50+</div>
                <div className="text-gray-400 text-xs lg:text-sm">Projects completed</div>
              </div>
            </div>
          </div>
        </div>
{/* Right Side Image */}
<div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 p-6">
  <img
    src={profileImg}
    alt="Hero Visual"
    className="max-w-full h-96 rounded-xl "
  />
</div>

        {/* Right Side - Navigation */}
       <div className={`${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-full sm:w-80 lg:w-80 h-full bg-black bg-opacity-90 backdrop-blur-sm p-6 lg:p-8 flex flex-col transition-transform duration-300 ease-in-out z-40`}>
   <div className="space-y-6 mt-16 lg:mt-0">
            <div className="flex items-center space-x-3 p-4 bg-purple-600 bg-opacity-50 rounded-lg">
              <User size={20} />
              <span>ME</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 hover:bg-purple-600 hover:bg-opacity-30 rounded-lg transition-colors cursor-pointer">
                <div className="font-medium">Limits</div>
                <div className="text-sm text-gray-400">There are no limits for coding</div>
              </div>
              
<button
  onClick={() => scrollToSection('experience')}
  className="w-full text-left p-4 hover:bg-purple-600 hover:bg-opacity-30 rounded-lg transition-colors"
>
  <div className="font-medium">Experience</div>
  <div className="text-sm text-gray-400">2+ years of experience</div>
</button>



              <div className="p-4 hover:bg-purple-600 hover:bg-opacity-30 rounded-lg transition-colors cursor-pointer">
                <div className="font-medium">Work</div>
                <div className="text-sm text-gray-400">Recent projects</div>
              </div>
              
              <div className="p-4 hover:bg-purple-600 hover:bg-opacity-30 rounded-lg transition-colors cursor-pointer">
                <div className="font-medium">Skills</div>
                <div className="text-sm text-gray-400">Technologies I use</div>
              </div>
              
              <div className="p-4 hover:bg-purple-600 hover:bg-opacity-30 rounded-lg transition-colors cursor-pointer">
                <div className="font-medium">Technologies</div>
                <div className="text-sm text-gray-400">Tech stack overview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

<section ref={meRef} className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">

      {/* About Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">ME</h2>
          </div>
          



<div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-start lg:items-center space-y-8 lg:space-y-0">

  {/* 👤 Image + Track Record — First on mobile, right on desktop */}
  <div className="order-1 lg:order-2 flex flex-col items-center ">
    
        <img
          src={profileImg}
          alt="Profile"
          className="w-80 h-80 object-cover mb-8"
        />
     

    {/* 📊 My Track Record */}
    <div className="text-center">
      <h4 className="text-xl lg:text-2xl font-bold mb-4">My track record</h4>
      <p className="text-gray-400 mb-6 text-sm lg:text-base px-4 lg:px-0">
        Just like the pilots having flight hours I too got some numbers of my work as
        working hours and also another number mentioned as productive hours
      </p>
      <div className="grid grid-cols-2 gap-6 lg:gap-8">
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-blue-400">620+</div>
          <div className="text-gray-400 text-sm">Working hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-purple-400">420+</div>
          <div className="text-gray-400 text-sm">Productive hours</div>
        </div>
      </div>
    </div>
  </div>

  {/* 🧑‍💻 Jayanth Para Details — Second on mobile, left on desktop */}
  <div className="order-2 lg:order-1">
    <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center lg:text-left">Jayanth Para</h3>
    <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base text-center lg:text-left px-4 lg:px-0">
      I am a versatile developer and data science enthusiast with a strong
      foundation in full-stack development, backend systems,
      and modern web technologies. My expertise centers around creating
      solutions that are both functional and visually engaging.
      Passionate about transforming concepts into reality, I bring a
      unique perspective to every project. My goal is to leverage
      cutting-edge technology that drive meaningful results.
    </p>

    <div className="space-y-4 px-4 lg:px-0">
      {/* Websites Delivered */}
      <div className="flex items-center space-x-4 p-3 lg:p-4 bg-blue-600 bg-opacity-20 rounded-lg">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Code size={20} />
        </div>
        <div>
          <div className="font-medium text-sm lg:text-base">Websites delivered</div>
          <div className="text-xs lg:text-sm text-gray-400">7+ professional websites</div>
        </div>
      </div>

      {/* Mobile Apps */}
      <div className="flex items-center space-x-4 p-3 lg:p-4 bg-green-600 bg-opacity-20 rounded-lg">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <MessageSquare size={20} />
        </div>
        <div>
          <div className="font-medium text-sm lg:text-base">Mobile apps</div>
          <div className="text-xs lg:text-sm text-gray-400">3+ mobile applications</div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex items-center space-x-4 p-3 lg:p-4 bg-orange-600 bg-opacity-20 rounded-lg">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Briefcase size={20} />
        </div>
        <div>
          <div className="font-medium text-sm lg:text-base">Projects addressed</div>
          <div className="text-xs lg:text-sm text-gray-400">15+ successful projects</div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

</section>



<section id="experience" ref={experienceRef} className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20 bg-black bg-opacity-20">

      {/* Experience Section */}
      

      <section className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Experience</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
            
            <div className="space-y-8 lg:space-y-16">
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
                <div className="flex-1 lg:text-right lg:pr-8">
                  <h3 className="text-xl lg:text-2xl font-bold">Atharva DSC</h3>
                  <p className="text-gray-400 text-sm lg:text-base">Web Developer</p>
                </div>
                <div className="hidden lg:block w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="flex-1 lg:pl-8">
                  <h4 className="text-lg lg:text-xl font-semibold">Frontend and UI/UX</h4>
                  <p className="text-gray-400 text-sm lg:text-base">Worked on designing the overall identity and visual interaction frameworks</p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
                <div className="flex-1 lg:text-right lg:pr-8">
                  <h3 className="text-xl lg:text-2xl font-bold">Atharva DSC</h3>
                  <p className="text-gray-400 text-sm lg:text-base">Lead </p>
                </div>
                <div className="hidden lg:block w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
                <div className="flex-1 lg:pl-8">
                  <h4 className="text-lg lg:text-xl font-semibold">Design Lead</h4>
                  <p className="text-gray-400 text-sm lg:text-base">Lead the team of designers worked together on numerous projects which neatly represented the brand of the company</p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
                <div className="flex-1 lg:text-right lg:pr-8">
                  <h3 className="text-xl lg:text-2xl font-bold">Nirvaha</h3>
                  <p className="text-gray-400 text-sm lg:text-base">Content creation</p>
                </div>
                <div className="hidden lg:block w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="flex-1 lg:pl-8">
                  <h4 className="text-lg lg:text-xl font-semibold">Content lead</h4>
                  <p className="text-gray-400 text-sm lg:text-base">Managed and designed content created comprehensive courses on mixed and technical skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


</section>
<section ref={skillsRef} className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">


      {/* Skills Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {['Python', 'Java', 'MySQL', 'MongoDB', 'Flask','React','Tailwind','Selenium','OpenCV','Nodejs','Nextjs','Git'].map((skill, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 lg:p-4 text-center hover:bg-purple-600 hover:bg-opacity-30 transition-colors">
                <span className="font-medium text-sm lg:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


</section>

      {/* Recent Work Section */}
      <section className="py-12 lg:py-20 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 px-6 lg:px-12 xl:px-20">Recent work</h2>
          
          <div className="lg:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4 px-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
     <a
  href="https://eventer-pj.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  
>          
              <div className="h-72 bg-purple-900 bg-opacity-30 rounded-lg p-4 hover:transform hover:scale-105 transition-transform min-w-[280px] flex-shrink-0">
                <h3 className="text-lg font-bold mb-2">Event Page</h3>
                <p className="w-64 text-gray-400 mb-4 text-sm">A webpage which enables to show all the event details and registration features</p>
                <div className="w-64 h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <img
    src="https://i.ibb.co/s9xCPQ0g/Screenshot-2025-07-01-011826.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-xs inline-block">React</div>
              </div>
    </a>   
    
     <a
  href="https://salesboard-pj.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  
>       
              <div className="h-72 bg-purple-900 bg-opacity-30 rounded-lg p-4 hover:transform hover:scale-105 transition-transform min-w-[280px] flex-shrink-0">
                <h3 className="text-lg font-bold mb-2">Sales Dashboard</h3>
                <p className="w-64 text-gray-400 mb-4 text-sm">A sales dashboard which gives comprehensive analysis on given data</p>
                <div className="w-64 h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <img
    src="https://i.ibb.co/TqmLGK98/Screenshot-2025-07-01-011937.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-xs inline-block">AI/ML</div>
              </div>
</a>
    <div className="h-72 bg-purple-900 bg-opacity-30 rounded-lg p-4 hover:transform hover:scale-105 transition-transform min-w-[280px] flex-shrink-0">
                <h3 className="text-lg font-bold mb-2">Spent analyzer</h3>
                <p className="w-64 text-gray-400 mb-4 text-sm">A dashboard to visualize your expenditure and get data and insights</p>
                <div className="w-64 h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <img
    src="https://i.ibb.co/Kgnk87c/Screenshot-2025-07-01-014150.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-xs inline-block">Python</div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-xs inline-block">Falsk</div>
              </div>
            </div>
          </div>


          <div className="hidden lg:block px-12 xl:px-20">
            <div className="grid md:grid-cols-3 gap-8">



             
              
        <a
  href="https://eventer-pj.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  
>      
              <div className="bg-purple-900 bg-opacity-30 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Event page</h3>
                <p className="text-gray-400 mb-4">A webpage for event landing page with all the details about event and registration</p>
                <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  
                   <img
    src="https://i.ibb.co/s9xCPQ0g/Screenshot-2025-07-01-011826.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                  
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-sm inline-block">React</div>
              </div>
      </a>   
       <a
  href="https://salesboard-pj.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  
>  
              <div className="bg-purple-900 bg-opacity-30 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Sales Dashboard</h3>
                <p className="text-gray-400 mb-4">A sales dashboard which gives comprehensive analysis on given data</p>
                <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <img
    src="https://i.ibb.co/TqmLGK98/Screenshot-2025-07-01-011937.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-sm inline-block">AI/ML</div>
              </div>
</a>
<div className="bg-purple-900 bg-opacity-30 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">Spent analyzer</h3>
                <p className="text-gray-400 mb-4">A dashboard to visualize your expenditure and get comprehensive data and insights</p>
                <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <img
    src="https://i.ibb.co/Kgnk87c/Screenshot-2025-07-01-014150.png"
    alt="Event Page"
    className="object-cover w-full h-full"
  />
                </div>
                <div className="bg-black bg-opacity-30 rounded px-3 py-1 text-sm inline-block">Flask</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16">Certifications</h2>
          
          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {certificates.map((cert) => (


<div
  key={cert.id}
  className="flex flex-col justify-between h-[340px] w-[260px] min-w-[260px] transform transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-50 rounded-xl p-6 cursor-pointer"


                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
  <img
    src={cert.image}
    alt={cert.title}
    className="w-full h-full object-cover"
  />
</div>

                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                  
                  {hoveredCert === cert.id && (
                    <div className="mt-4 space-y-2 animate-fade-in">
                      <p className="text-xs text-gray-300">{cert.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, index) => (
                          <span key={index} className="bg-purple-600 bg-opacity-30 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:block">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
  <img
    src={cert.image}
    alt={cert.title}
    className="w-full h-full object-cover"
  />
</div>

                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                  
                  {hoveredCert === cert.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-65 rounded-xl p-4 flex flex-col justify-center space-y-2 animate-fade-in z-10">
                      <p className="text-sm text-gray-300">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span key={index} className="bg-purple-600 bg-opacity-30 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>






<button
  onClick={handleViewCertifications}
  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center space-x-2 mx-auto"
>
  <span>View More</span>
  <ExternalLink size={18} />
</button>






          {/* View More Button */}
          
        </div>
      </section>

      {/* My Wall Section */}
      <section className="py-12 lg:py-20 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-16 px-6 lg:px-12 xl:px-20">My Wall</h2>
          
          {/* Timeline Container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsTimelinePaused(true)}
            onMouseLeave={() => setIsTimelinePaused(false)}
          >
      <div

  ref={wallRef}
  className="scroll-hide flex space-x-4 overflow-x-scroll cursor-grab"
  style={{ WebkitOverflowScrolling: 'touch' }}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
>






              
              {/* Duplicate the photos for seamless loop */}
              {[...wallPhotos, ...wallPhotos].map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  className="relative min-w-[300px] h-48 lg:h-64 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredPhoto(photo.id)}
                  onMouseLeave={() => setHoveredPhoto(null)}
                  style={{
                    transform: hoveredPhoto === photo.id ? 'scale(1.05)' : 'scale(1)',
                    zIndex: hoveredPhoto === photo.id ? 10 : 1
                  }}
                >
                  {/* Photo placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <img
  src={photo.image}
  alt={photo.title}
  className="w-full h-full object-cover"
/>
                  </div>
                  
                  {/* Overlay with details */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="text-white">
                      <h4 className="font-bold text-sm lg:text-base mb-1">{photo.title}</h4>
                      <p className="text-xs lg:text-sm text-gray-300 mb-2">{photo.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">{photo.date}</span>
                        <span className="bg-purple-600 bg-opacity-70 text-xs px-2 py-1 rounded">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          {/* <div className="text-center mt-8 px-6 lg:px-12 xl:px-20">
            <button
              onClick={handleViewGallery}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>View Gallery</span>
              <ExternalLink size={18} />
            </button>
          </div> */}
        </div>
          {/* Custom CSS to hide scrollbar */}

      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Get me here</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div>
  <form
    action="https://formspree.io/f/xblypvvq"
    method="POST"
    className="space-y-4 lg:space-y-6"
  >
    <div>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        className="w-full p-3 lg:p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none text-sm lg:text-base"
      />
    </div>

    <div>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="w-full p-3 lg:p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none text-sm lg:text-base"
      />
    </div>

    <div>
      <textarea
        name="message"
        placeholder="Your message"
        rows="4"
        required
        className="w-full p-3 lg:p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none resize-none text-sm lg:text-base"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 lg:py-4 px-4 lg:px-6 rounded-lg transition-colors text-sm lg:text-base"
    >
      Submit
    </button>
  </form>
</div>

            </div>
            
            <div className="flex items-center justify-center">
              
              <div 
              className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
<a href="mailto:jayanthpara21@gmail.com">

</a>

<div 
  className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center overflow-hidden">
  <img
    src={giphy}
    alt="Animated Mail GIF"
    className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
  />
</div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
<footer className="py-8 px-6 lg:px-12 xl:px-20 bg-black bg-opacity-30">
  <div className="max-w-6xl mx-auto text-center space-y-6">
    {/* Social Icons */}
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/jayanthpara"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="http://www.linkedin.com/in/jayanth-para-4a60aa25a"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-white transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/jayanth_para"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:text-white transition-colors"
      >
        <Instagram size={24} />
      </a>
    </div>

    {/* Contact Info */}
    <div className="space-y-2 text-sm text-gray-400">
      <div className="flex justify-center items-center space-x-2">
        <Mail size={16} />
        <a href="mailto:jayanthpara21@gmail.com">
        <span>jayanthpara21@gmail.com</span>
        </a>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Phone size={16} />
        <a href="tel:9346011959">
        <span>+91 93460 11959</span>
        </a>
      </div>
    </div>

    <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Jayanth Para. All rights reserved.</p>
  </div>
</footer>



      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* Hide scrollbars for horizontal scroll sections */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }



       .scroll-hide::-webkit-scrollbar {
  display: none;
}
.scroll-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

 


      `}</style>
    </div>
  );
};

export default Portfoli;
