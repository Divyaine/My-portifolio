import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver", "Tech Innovator"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-500/20 animate-pulse" />
      </div>

      {/* Floating orbs with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 animate-float-${i % 3}`}
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#6366f1, #8b5cf6' : 
                i % 3 === 1 ? '#8b5cf6, #ec4899' : 
                '#ec4899, #f97316'
              })`,
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
              transform: `translate(${mousePosition.x * (0.02 + i * 0.01)}px, ${mousePosition.y * (0.02 + i * 0.01)}px)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Animated name with glitch effect */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="relative text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
            <span className="relative inline-block">
                Muhayimana Divine
              {/* Glitch overlay */}
              <span className="absolute inset-0 text-cyan-400 opacity-0 animate-glitch-1">
                Muhayimana Divine
              </span>
              <span className="absolute inset-0 text-pink-400 opacity-0 animate-glitch-2">
                Muhayimana Divine
              </span>
            </span>
          </h1>
        </div>

        {/* Animated role with typing effect */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative h-16 flex items-center justify-center mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-blue-200">
              <span className="inline-block min-w-[300px] text-left">
                {roles[currentRole]}
                <span className="animate-blink text-purple-400">|</span>
              </span>
            </p>
          </div>
        </div>

        {/* CTA Buttons with advanced hover effects */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Button onClick={() => navigate('/projects')} className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>

          <Button onClick={() => navigate('/contact')} className="group relative px-8 py-4 text-lg font-semibold bg-transparent text-white border-2 border-white/30 rounded-full backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-2xl hover:shadow-white/10">
            <span className="relative z-10 flex items-center gap-2">
              Hire Me
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        @keyframes glitch-1 {
          0%, 100% { opacity: 0; transform: translateX(0); }
          2% { opacity: 0.8; transform: translateX(-2px); }
          4% { opacity: 0; transform: translateX(0); }
        }
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translateX(0); }
          3% { opacity: 0.6; transform: translateX(2px); }
          6% { opacity: 0; transform: translateX(0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float-0 { animation: float-0 6s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 7s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-glitch-1 { animation: glitch-1 3s infinite; }
        .animate-glitch-2 { animation: glitch-2 3s infinite; }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </section>
  );
}