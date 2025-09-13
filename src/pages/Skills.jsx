import React, { useState, useEffect } from 'react';

const skills = {
  Frontend: {
    items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  Backend: {
    items: ["Node.js", "C++", "Python"],
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  Database: {
    items: ["PostgreSQL"],
    icon: "🗄️",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50"
  },
  Cloud: {
    items: ["AWS", "Vercel"],
    icon: "☁️",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  Tools: {
    items: ["Git", "VS Code", "Postman", "GitHub"],
    icon: "🛠️",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50"
  },
  Design: {
    items: ["UI/UX", "Responsive Design", "Prototyping", "Wireframing"],
    icon: "🎨",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50"
  }
};

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  // Track hover for subtle UI hint (state read in header aria-label)
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(Object.keys(skills));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const totalSkills = Object.values(skills).reduce((acc, category) => acc + category.items.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              Skills & Expertise
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in-delayed">
            A comprehensive toolkit of {totalSkills}+ technologies and skills I use to build amazing digital experiences
          </p>
        </div>

        {/* Skills Overview Stats */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/10">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {Object.keys(skills).length}
                </div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="w-px h-12 bg-gray-200" aria-label={hoveredCategory || undefined}></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {totalSkills}+
                </div>
                <div className="text-sm text-gray-300">Technologies</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], index) => (
            <SkillCategory
              key={category}
              category={category}
              data={data}
              index={index}
              isVisible={visibleSkills.includes(category)}
              onHover={setHoveredCategory}
              onClick={setSelectedCategory}
              isSelected={selectedCategory === category}
            />
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 animate-float">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuously Learning
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              I'm always exploring new technologies and improving my skills. Currently diving deep into AI/ML and Web3 development.
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold">
                🤖 Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-semibold">
                🌐 Web3 & Blockchain
              </span>
            </div>
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
          to { width: 8rem; }
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

        @keyframes skill-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
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

        .animate-skill-bounce {
          animation: skill-bounce 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}

function SkillCategory({ category, data, index, isVisible, onHover, onClick, isSelected }) {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        data.items.forEach((_, i) => {
          setTimeout(() => {
            setAnimatedSkills(prev => [...prev, i]);
          }, i * 100);
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, data.items]);

  return (
    <div
      className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => onHover(category)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(isSelected ? null : category)}
    >
      <div className={`relative bg-gradient-to-br ${data.bgColor} backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${isSelected ? 'ring-4 ring-purple-300 scale-105' : ''}`}>
        
        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${data.color} rounded-2xl flex items-center justify-center text-xl shadow-lg`}>
              {data.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {category}
            </h3>
          </div>
          <div className="text-sm font-semibold text-gray-500 bg-white/50 px-3 py-1 rounded-full">
            {data.items.length}
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          {data.items.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={`skill-item ${animatedSkills.includes(skillIndex) ? 'animate-skill-bounce' : 'opacity-0'}`}
              style={{ animationDelay: `${skillIndex * 0.1}s` }}
            >
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 group/skill">
                <span className="font-medium text-gray-700 group-hover/skill:text-purple-700 transition-colors duration-300">
                  {skill}
                </span>
                <div className={`w-3 h-3 bg-gradient-to-r ${data.color} rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 pt-4 border-t border-white/30">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Proficiency</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= 4 
                      ? `bg-gradient-to-r ${data.color}` 
                      : 'bg-gray-300'
                  } transition-all duration-300`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Selection Glow */}
        {isSelected && (
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
        )}
      </div>
    </div>
  );
}