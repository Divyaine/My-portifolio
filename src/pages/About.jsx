import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '@/images/WhatsApp Image 2025-08-21 at 10.43.29_3076b9ab.jpg';


const EnhancedAbout = () => {
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');
  const sectionRef = useRef(null);

  // Simulate Framer Motion animations with CSS and React state
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "javascript", "Tailwind CSS", "Next.js"], icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { category: "Backend", items: ["java", "PostgreSQL", "REST APIs"], icon: "⚙️", color: "from-green-500 to-emerald-500" },
    { category: "Tools & Cloud", items: ["AWS", "Git", "VS Code"], icon: "☁️", color: "from-purple-500 to-pink-500" },
    { category: "Languages", items: ["C++", "JavaScript", "Python", "SQL","java"], icon: "💻", color: "from-orange-500 to-red-500" }
  ];

  const achievements = [
    { icon: "🚀", title: "5+ Projects", description: "Successfully delivered full-stack applications" },
    { icon: "👥", title: "Team Leader", description: "Led development teams in university projects" }
  ];

  const personalInfo = [
    { icon: "🎓", label: "Education", value: "AUCA – Adventist University of Central Africa" },
    { icon: "📍", label: "Location", value: "Kigali, Rwanda" },
    { icon: "🌍", label: "Languages", value: "English, Kinyarwanda, French" },
    { icon: "💼", label: "Experience", value: "2+ Years in Web Development" }
  ];

  const tabContent = {
    bio: {
      title: "My Story",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Hi there! I'm <span className="font-bold text-blue-600">Muhayimana Divine</span>, 
            a passionate Software Engineer from the beautiful hills of Kigali, Rwanda. 
            My journey in technology began with curiosity and has evolved into a deep passion 
            for creating digital solutions that make a real impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I specialize in building full-stack applications that seamlessly blend robust 
            functionality with exceptional user experiences. My approach combines technical 
            excellence with creative problem-solving, always keeping the end user at the 
            center of every decision.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing knowledge with the developer community. I believe 
            in the power of technology to transform lives and am committed to being part of 
            that transformation.
          </p>
        </div>
      )
    },
    skills: {
      title: "Technical Expertise",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`p-6 rounded-2xl bg-gradient-to-br ${skillGroup.color} bg-opacity-10 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              style={{
                animation: isInView ? `slideInUp 0.6s ease-out forwards ${index * 0.1}s` : 'none',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skillGroup.icon}</span>
                <h4 className="text-lg font-bold text-gray-800">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${skillGroup.color} text-white shadow-md hover:shadow-lg transition-shadow`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    achievements: {
      title: "Achievements & Milestones",
      content: (
        <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
                className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
              style={{
                animation: isInView ? `fadeInScale 0.6s ease-out forwards ${index * 0.1}s` : 'none',
                opacity: isInView ? 1 : 0
              }}
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <h4 className="font-bold text-gray-800">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
          </div>

          {/* Certificates */}
          
        </div>
      )
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`max-w-6xl mx-auto p-8 transition-all duration-1000 bg-gradient-to-b from-black via-slate-950 to-black text-white ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 
          className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          About Me
        </h2>
        <p 
          className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div 
            className={`sticky top-8 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {/* Profile Image */}
            <div className="relative mb-8 group">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '6s' }}></div>
                <div className="absolute inset-2 rounded-full bg-slate-900"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img src={profilePhoto} alt="Muhayimana Divine" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-start space-x-4 p-4 bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-800"
                  style={{
                    animation: isInView ? `slideInLeft 0.6s ease-out forwards ${index * 0.1}s` : 'none',
                    opacity: isInView ? 1 : 0
                  }}
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-100">{info.label}</p>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          <div 
            className={`flex flex-wrap gap-2 mb-8 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-800">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                {tabContent[activeTab].title}
              </h3>
              <div className={`transition-all duration-500 ${activeTab ? 'opacity-100' : 'opacity-0'}`}>
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className={`mt-12 text-center transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Build Something Amazing Together!</h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => navigate('/projects')}
                  className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hover\\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default EnhancedAbout;