import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '@/images/WhatsApp Image 2025-08-21 at 10.43.29_3076b9ab.jpg';

const EnhancedHome = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const roles = [
    "Software Engineer",
    // "Full-Stack Developer", 
    "UI/UX Designer",
    "Problem Solver",
    "Creative Innovator",
    // "Digital Architect"
  ];

  const skills = [
    //{ name: "React", level: 95, color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Node.js", level: 90, color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600", icon: "⚡" },
   // { name: "Python", level: 85, color: "from-purple-400 to-purple-600", icon: "🐍" },
    { name: "UI/UX", level: 88, color: "from-pink-400 to-pink-600", icon: "🎨" },
   // { name: "MongoDB", level: 87, color: "from-emerald-400 to-emerald-600", icon: "🍃" }
  ];

  const navigate = useNavigate();

  // Enhanced intersection observer for progressive reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Enhanced mouse tracking with smooth interpolation
  useEffect(() => {
    let animationId;
    const targetPosition = { x: 0, y: 0 };
    const currentPosition = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        targetPosition.x = (e.clientX - rect.width / 2) / 40;
        targetPosition.y = (e.clientY - rect.height / 2) / 40;
      }
    };

    const smoothUpdate = () => {
      currentPosition.x += (targetPosition.x - currentPosition.x) * 0.1;
      currentPosition.y += (targetPosition.y - currentPosition.y) * 0.1;
      
      setMousePosition({ ...currentPosition });
      animationId = requestAnimationFrame(smoothUpdate);
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    smoothUpdate();

    setTimeout(() => setIsLoaded(true), 100);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(roleInterval);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [roles.length]);

  // Enhanced floating particles with physics
  const FloatingParticles = () => {
    return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
        <div
          key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-300' : 
              i % 4 === 1 ? 'w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-300' :
              'w-1 h-1 bg-white'
            } opacity-60 shadow-lg`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
  };

  // Morphing background with better gradients
  const MorphingBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-morph1" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-morph2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl animate-morph3" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-transparent rounded-full blur-3xl animate-morph1" 
             style={{ animationDelay: '2s' }} />
      </div>
    );
  };

  // Enhanced skill cards with better animations
  const SkillCards = () => {
    return (
      <div 
        data-animate="skills" 
        id="skills"
        className={`transition-all duration-1200 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Technical Expertise</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-full mx-auto"></div>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div 
              key={skill.name}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/25 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`} />
              
              {/* Skill level badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center text-sm font-bold text-black shadow-xl animate-pulse">
                {Math.floor(skill.level / 10)}
              </div>
              
              {/* Skill icon with enhanced animation */}
              <div className="text-4xl mb-4 text-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {skill.icon}
              </div>
              
              {/* Skill name with gradient text */}
              <h4 className="text-white font-bold text-center mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 text-lg">
                {skill.name}
              </h4>
              
              {/* Enhanced progress visualization */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm font-medium">Mastery</span>
                  <span className="text-white/90 text-sm font-bold">{skill.level}%</span>
                </div>
                
                {/* Circular progress */}
                <div className="relative w-16 h-16 mx-auto">
                  <svg className="transform -rotate-90 w-16 h-16">
                    <circle
                      cx="32" cy="32" r="28"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <circle
                      cx="32" cy="32" r="28"
                      stroke={`url(#gradient-${i})`}
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.level / 100)}`}
                      className="transition-all duration-2000 ease-out"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white/80">{skill.level}%</span>
                  </div>
                </div>
                
                {/* SVG gradients */}
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Navigation helpers
  const goToProjects = () => navigate('/projects');
  const goToContact = () => navigate('/contact');
  const goToAbout = () => navigate('/about');

  const stats = [
    { label: 'Projects', value: '25+', icon: '🚀', color: 'from-blue-500 to-purple-500' },
    { label: 'Years Exp', value: '4+', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
    { label: 'Happy Clients', value: '15+', icon: '🎯', color: 'from-pink-500 to-red-500' },
    { label: 'Code Commits', value: '2K+', icon: '💻', color: 'from-green-500 to-emerald-500' }
  ];

  const features = [
    { 
      title: 'Pixel Perfect Design', 
      desc: 'Crafting beautiful, responsive interfaces that work flawlessly across all devices and screen sizes.',
      icon: '🎨',
      color: 'from-pink-500/20 to-rose-500/20',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      title: 'Lightning Fast Performance', 
      desc: 'Optimized code, smart caching, and efficient algorithms for blazing speed and smooth user experience.',
      icon: '⚡',
      color: 'from-yellow-500/20 to-orange-500/20',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      title: 'Scalable Architecture', 
      desc: 'Building robust, maintainable systems that grow with your business needs and requirements.',
      icon: '🏗️',
      color: 'from-blue-500/20 to-cyan-500/20',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Modern Tech Stack', 
      desc: 'Using cutting-edge technologies and industry best practices for optimal results and future-proofing.',
      icon: '🔥',
      color: 'from-purple-500/20 to-indigo-500/20',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Enhanced dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1.02)`
        }}
      />

      <MorphingBackground />
      <FloatingParticles />

      {/* Main Content Container */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 space-y-12">
        
        {/* Enhanced Avatar with 3D effect */}
        <div 
          data-animate="avatar"
          id="avatar"
          className={`mb-8 transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}
          style={{ 
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)` 
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Enhanced outer glow rings */}
            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-300/40 via-pink-300/40 via-purple-300/40 to-cyan-300/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-1000 animate-pulse" />
            <div className="absolute -inset-6 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-700" />
            
            {/* Main avatar with glass morphism */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/40 shadow-2xl group-hover:scale-110 group-hover:border-white/60 transition-all duration-700">
              <img src={profilePhoto} alt="Muhayimana Divine" className="w-full h-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Enhanced animated orbit rings */}
            <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-yellow-300/30 via-pink-300/30 to-purple-300/30 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="absolute inset-3 rounded-full border border-cyan-300/25 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            <div className="absolute inset-6 rounded-full border border-emerald-300/20 animate-spin" style={{ animationDuration: '30s' }} />
          </div>
        </div>

        {/* Enhanced Main Heading with better typography */}
        <div 
          data-animate="heading"
          id="heading"
          className={`transition-all duration-1200 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            <span className="block text-white/95 mb-4">
            {"Hi, I'm ".split('').map((char, i) => (
              <span 
                key={i}
                  className="inline-block transition-all duration-700 hover:scale-125 hover:text-yellow-300 hover:-translate-y-3 hover:rotate-12 cursor-default hover:drop-shadow-lg"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                    animation: isLoaded ? 'slideInUp 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
              Muhayimana Divine
            </span>
          </h1>
        </div>

        {/* Enhanced Animated Role Display */}
        <div 
          data-animate="role"
          id="role"
          className={`mb-8 transition-all duration-1200 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white/8 backdrop-blur-2xl border border-white/20 rounded-3xl px-10 py-6 inline-block shadow-2xl">
            <p className="text-2xl md:text-4xl font-bold">
              <span className="text-white/80">I'm a </span>
              <span className="inline-block transition-all duration-1000">
              {roles[currentRole].split('').map((char, i) => (
                <span
                  key={`${currentRole}-${i}`}
                    className="inline-block text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text font-black"
                  style={{
                      animation: `charReveal 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
                      animationDelay: `${i * 0.08}s`,
                    opacity: 0
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
              <span className="ml-4 text-yellow-300 animate-pulse text-5xl font-light">|</span>
          </p>
          </div>
        </div>

        {/* Enhanced Description */}
        <div 
          data-animate="description"
          id="description"
          className={`max-w-4xl mb-10 transition-all duration-1200 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light tracking-wide">
            Passionate about creating 
            <span className="font-bold text-yellow-300 hover:scale-105 inline-block transition-transform duration-300"> extraordinary digital experiences</span> that 
            <span className="font-bold text-pink-300 hover:scale-105 inline-block transition-transform duration-300"> inspire</span>, 
            <span className="font-bold text-purple-300 hover:scale-105 inline-block transition-transform duration-300"> innovate</span>, and 
            <span className="font-bold text-cyan-300 hover:scale-105 inline-block transition-transform duration-300"> transform</span> businesses. 
            Let's build something amazing together.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div 
          data-animate="buttons"
          id="buttons"
          className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1200 delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <button
            onClick={goToProjects}
            className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-black rounded-3xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          </button>

          <button
            onClick={goToAbout}
            className="group relative px-10 py-5 border-2 border-white/30 text-white rounded-3xl font-bold text-lg backdrop-blur-xl hover:border-purple-300/60 hover:bg-purple-500/20 transform transition-all duration-500 hover:scale-110 hover:-translate-y-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About Me
            </span>
          </button>

          <button
            onClick={goToContact}
            className="group relative px-10 py-5 bg-white/10 border-2 border-white/25 text-white rounded-3xl font-bold text-lg backdrop-blur-xl hover:bg-white/20 hover:border-white/50 transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
            </div>
          </button>
        </div>

        {/* Enhanced Stats Grid */}
        <div 
          data-animate="stats"
          id="stats"
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 transition-all duration-1200 delay-900 ${
            visibleElements.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="group relative bg-white/8 border border-white/20 rounded-3xl p-6 backdrop-blur-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`} />
              <div className="relative z-10">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{stat.value}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Cards */}
        <SkillCards />

        {/* Enhanced Feature Highlights */}
        <div 
          data-animate="features"
          id="features"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16 transition-all duration-1200 delay-1000 ${
            visibleElements.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, i) => (
            <div 
              key={feature.title} 
              className={`group relative bg-gradient-to-br ${feature.color} border border-white/20 rounded-3xl p-8 backdrop-blur-xl hover:border-white/40 transition-all duration-700 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{feature.icon}</div>
                <h3 className="text-white font-bold mb-3 text-xl group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
              </div>
              
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Social Links */}
        <div 
          data-animate="social"
          id="social"
          className={`flex gap-6 mb-12 transition-all duration-1200 delay-1200 ${
            visibleElements.has('social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { name: 'GitHub', icon: '👨‍💻', url: 'https://github.com/hntag', color: 'hover:bg-gray-600/20', gradient: 'from-gray-400 to-gray-600' },
            { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/divine-muhayimana-102b3237a/', color: 'hover:bg-blue-600/20', gradient: 'from-blue-400 to-blue-600' },
            { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-600/20', gradient: 'from-sky-400 to-sky-600' },
            { name: 'Email', icon: '✉️', url: 'mailto:divyaine086@gmail.com', color: 'hover:bg-red-600/20', gradient: 'from-red-400 to-red-600' }
          ].map((social, i) => (
            <a
              key={social.name}
              href={social.url}
              className={`group relative w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-white/25 hover:border-white/60 ${social.color} transition-all duration-700 hover:scale-125 hover:-translate-y-3 overflow-hidden`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="relative z-10 text-3xl group-hover:scale-125 transition-transform duration-500">
                {social.icon}
              </span>
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Enhanced tooltip */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 px-4 py-3 bg-black/90 backdrop-blur-xl text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none border border-white/20 shadow-2xl">
                <span className="font-semibold">{social.name}</span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-black/90"></div>
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-ping" />
              </div>
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          data-animate="scroll"
          id="scroll"
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ opacity: scrollY > 100 ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-4 text-white/70 group cursor-pointer">
            <span className="text-sm font-semibold group-hover:text-white transition-colors duration-300 tracking-wide">
              Scroll to explore more
            </span>
            <div className="relative">
              <div className="w-10 h-16 border-3 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-all duration-500 backdrop-blur-sm">
                <div className="w-1.5 h-6 bg-gradient-to-b from-yellow-300 via-pink-300 to-purple-300 rounded-full mt-3 animate-bounce shadow-lg" />
              </div>
              <div className="absolute inset-0 border-3 border-white/10 rounded-full animate-pulse" />
              <div className="absolute inset-0 border-3 border-white/5 rounded-full animate-ping" />
            </div>
          </div>
        </div>

      </section>

      {/* Enhanced Custom CSS animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes charReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(0px) translateX(-5px) rotate(180deg) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translateY(15px) translateX(-10px) rotate(270deg) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes morph1 {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.05;
          }
        }

        @keyframes morph2 {
          0%, 100% {
            transform: scale(1) rotate(0deg) translateX(0px);
            opacity: 0.12;
          }
          33% {
            transform: scale(0.8) rotate(120deg) translateX(20px);
            opacity: 0.08;
          }
          66% {
            transform: scale(1.3) rotate(240deg) translateX(-15px);
            opacity: 0.15;
          }
        }

        @keyframes morph3 {
          0%, 100% {
            transform: scale(1) rotate(0deg) translateY(0px);
            opacity: 0.1;
          }
          25% {
            transform: scale(1.1) rotate(90deg) translateY(-10px);
            opacity: 0.05;
          }
          50% {
            transform: scale(0.9) rotate(180deg) translateY(10px);
            opacity: 0.12;
          }
          75% {
            transform: scale(1.2) rotate(270deg) translateY(-5px);
            opacity: 0.08;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-morph1 {
          animation: morph1 8s ease-in-out infinite;
        }

        .animate-morph2 {
          animation: morph2 12s ease-in-out infinite;
        }

        .animate-morph3 {
          animation: morph3 10s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 6s ease infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced glassmorphism */
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }

        /* Custom border gradients */
        .border-3 {
          border-width: 3px;
        }

        /* Improved hover effects */
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 80px -15px rgba(0, 0, 0, 0.4);
        }

        /* Performance optimizations */
        * {
          will-change: transform;
        }

        .group:hover * {
          will-change: transform, opacity;
        }

        /* Responsive text scaling */
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2.5rem;
          }
        }

        /* Enhanced focus states for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 4px;
        }

        /* Improved reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #ec4899);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #db2777);
        }
      `}</style>
    </div>
  );
};

export default EnhancedHome;