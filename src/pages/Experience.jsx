import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const timeline = [

  { 
    year: "2020-2024", 
    role: "BSc Software Engineering", 
    place: "AUCA",
    type: "education",
    description: "Comprehensive study of software engineering principles, algorithms, data structures, and modern development practices. Graduated with honors.",
    skills: ["Data Structures", "Algorithms", "Software Design", "Computer Science"],
    icon: "🎓",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  }
];

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      timeline.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 300);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              My Journey
            </h2>
            <div className="h-1 w-28 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in-delayed">
            From student to professional developer - here's my path of continuous learning and growth in software engineering
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/10 animate-float">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-gray-600 font-medium">Years of Study</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/10 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-600 font-medium">Years Professional</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/10 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full shadow-lg"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isVisible={visibleItems.includes(index)}
                isActive={activeItem === index}
                onHover={setActiveItem}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl border border-white/10 animate-float">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What's Next?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              I'm always looking for new challenges and opportunities to grow. Let's build something amazing together!
            </p>
            <button onClick={() => navigate('/contact')} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Let's Connect
            </button>
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
          to { width: 7rem; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
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

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out both;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function TimelineItem({ item, index, isVisible, isActive, onHover }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${
        isVisible 
          ? isLeft 
            ? 'animate-slide-in-left' 
            : 'animate-slide-in-right'
          : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.3}s` }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-white rounded-full border-4 border-purple-500 transform md:-translate-x-1/2 z-10 shadow-lg">
        <div className={`absolute inset-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-300 ${isActive ? 'animate-pulse-glow' : ''}`}></div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
        <div className={`group relative bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${isActive ? 'ring-4 ring-purple-300' : ''}`}>
          
          {/* Year Badge */}
          <div className="absolute -top-4 left-6">
            <div className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white font-bold rounded-full shadow-lg text-sm`}>
              {item.year}
            </div>
          </div>

          {/* Type Badge */}
          <div className="absolute -top-4 right-6">
            <div className={`px-3 py-1 ${item.type === 'work' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'} rounded-full text-xs font-semibold border ${item.type === 'work' ? 'border-blue-200' : 'border-green-200'}`}>
              {item.type === 'work' ? '💼 Work' : '🎓 Education'}
            </div>
          </div>

          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:animate-bounce`}>
            {item.icon}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {item.role}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-lg">📍</span>
              <span className="font-medium">{item.place}</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {item.description}
            </p>

            {/* Skills */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-lg">🛠️</span>
                Key Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 bg-white/60 text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gradient-to-r ${item.color} hover:text-white transition-all duration-300 cursor-default`}
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Indicator */}
            <div className="pt-4 border-t border-white/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Duration</span>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full animate-pulse`}></div>
                  <span className="font-medium text-gray-700">
                    {item.year === '2020-2024' ? '4 years' : item.year === '2024' ? '1 year' : 'Current'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
        </div>
      </div>
    </div>
  );
}