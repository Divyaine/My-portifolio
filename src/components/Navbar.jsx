import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  // Removed unused mousePosition to satisfy linter
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: User },
    { to: "/projects", label: "Projects", icon: Briefcase },
    { to: "/skills", label: "Skills", icon: Code },
    { to: "/experience", label: "Experience", icon: Award },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // navigation handled via NavLink; close menu handled inline

  return (
    <>
      {/* Glassmorphism background with animated gradient */}
      <div className="fixed top-0 left-0 w-full h-20 pointer-events-none z-40">
        <div className={`absolute inset-0 transition-all duration-700 ${
          scrolled 
            ? 'bg-gradient-to-r from-slate-900/95 via-indigo-900/95 to-slate-900/95 backdrop-blur-2xl' 
            : 'bg-gradient-to-r from-slate-900/80 via-indigo-900/80 to-slate-900/80 backdrop-blur-xl'
        }`}>
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
          
          {/* Border glow effect */}
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-30'
          }`} />
        </div>
      </div>

      <nav className="sticky top-0 z-50 pointer-events-auto">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 relative">
          
          {/* Logo with holographic effect */}
          <NavLink 
            to="/"
            className="relative group transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <span className="font-black text-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-500 hover:to-cyan-400 transition-all duration-500 tracking-tight">
                Divine
              </span>
              {/* Holographic glow */}
              <div className={`absolute inset-0 font-black text-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm transition-opacity duration-300 ${
                isHovered ? 'opacity-50' : 'opacity-0'
              }`}>
                Divine
              </div>
              {/* Electric spark effect */}
              <Zap className={`absolute -top-1 -right-6 w-4 h-4 text-yellow-400 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-110 animate-pulse' : 'opacity-0 scale-50'
              }`} />
            </div>
          </NavLink>

          {/* Desktop Menu with floating cards */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <div
                key={link.to}
                className="relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  aria-current={activeLink === link.to ? 'page' : undefined}
                  className={`group relative px-5 py-3 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-2 transform hover:scale-105 hover:-translate-y-1 ${
                    activeLink === link.to
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl shadow-blue-500/30"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {/* Background glow for inactive items */}
                  {activeLink !== link.to && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
                  )}
                  
                  {/* Icon with rotation effect */}
                  <link.icon size={18} className={`transition-all duration-300 ${
                    activeLink === link.to 
                      ? 'scale-110 text-white' 
                      : 'group-hover:scale-110 group-hover:rotate-12 group-hover:text-cyan-400'
                  }`} />
                  
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Active indicator with pulse */}
                  {activeLink === link.to && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                  )}
                  
                  {/* Hover shimmer effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                </NavLink>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button with morphing animation */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden relative p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ${
              open ? 'rotate-45' : 'rotate-0'
            }`}
          >
            <div className={`transition-all duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
              {open ? (
                <X size={22} className="animate-spin-once" />
              ) : (
                <Menu size={22} />
              )}
            </div>
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Menu with slide and fade animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open 
            ? 'max-h-screen opacity-100 backdrop-blur-2xl bg-slate-900/95' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-6 space-y-3">
            {links.map((link, index) => (
              <div
                key={link.to}
                className={`transform transition-all duration-500 ${
                  open 
                    ? `translate-x-0 opacity-100` 
                    : '-translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: open ? `${index * 80}ms` : '0ms' 
                }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  aria-current={activeLink === link.to ? 'page' : undefined}
                  className={`group w-full flex items-center gap-4 p-4 rounded-2xl font-semibold transition-all duration-500 transform hover:translate-x-2 hover:scale-105 ${
                    activeLink === link.to
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl shadow-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
                  }`}
                >
                  <div className={`transition-all duration-300 ${
                    activeLink === link.to 
                      ? 'scale-110 rotate-6' 
                      : 'group-hover:scale-110 group-hover:rotate-12'
                  }`}>
                    <link.icon size={20} className={activeLink === link.to ? 'text-cyan-400' : 'group-hover:text-cyan-400'} />
                  </div>
                  
                  <span className="text-lg">{link.label}</span>
                  
                  {/* Active indicator */}
                  {activeLink === link.to && (
                    <div className="ml-auto flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    </div>
                  )}
                  
                  {/* Hover arrow */}
                  {activeLink !== link.to && (
                    <div className="ml-auto transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
          
          {/* Mobile menu footer with animated gradient */}
          <div className={`h-1 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-500 to-blue-600 bg-size-200 animate-gradient-x transition-all duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        @keyframes spin-once {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.7);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-once {
          animation: spin-once 0.3s ease-in-out;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        /* Webkit scrollbar styling for mobile menu */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}