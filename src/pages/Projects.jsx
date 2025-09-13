import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: "UC-STORE",
    description: "An e-commerce platform with login & checkout features.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/uc-store",
    live: "#",
    category: "E-commerce",
    image: "🛍️"
  },
  {
    title: "Courtside Dreams",
    description: "Animated African love story built with AI visuals.",
    stack: ["React", "Stable Diffusion", "Video Editing"],
    github: "#",
    live: "#",
    category: "Creative",
    image: "🎬"
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with smooth animations.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    live: "#",
    category: "Web Design",
    image: "💼"
  },
  {
    title: "Task Manager Pro",
    description: "Collaborative task management with real-time updates.",
    stack: ["Next.js", "Prisma", "WebSocket"],
    github: "#",
    live: "#",
    category: "Productivity",
    image: "📋"
  }
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projects.map((_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto animate-fade-in-delayed">
            Discover my latest work showcasing modern web technologies and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/80 backdrop-blur-sm p-1 rounded-2xl shadow-lg border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isVisible={visibleProjects.includes(index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 animate-float">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's collaborate and bring your ideas to life
            </p>
            <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.3s both;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
        
        {/* Project Icon/Image */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 text-2xl shadow-lg">
          {project.image}
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 right-6">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full border border-gray-300 hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 hover:border-blue-300 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
            
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>

        {/* Animated Background Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Glow Effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      </div>
    </div>
  );
}