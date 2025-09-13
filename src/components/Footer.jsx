import React from "react";
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      href: "https://github.com/Divyaine",
      icon: Github,
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      href: "https://www.linkedin.com/in/muhayimana-divine/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-500/10"
    },
    {
      href: "mailto:hntaganira06@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-green-400 hover:bg-green-500/10"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-slate-900 to-black text-gray-400 mt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-indigo-500/50 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Brand section with animation */}
          <div className="group">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 transform group-hover:scale-105 transition-transform duration-300">
              Muhayimana Divine
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee size={14} className="text-amber-500" />
              <span>using</span>
              <Code size={14} className="text-blue-400" />
            </div>
          </div>

          {/* Social links with enhanced animations */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative p-3 rounded-2xl border border-gray-700/50 ${link.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-current/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon container with rotation effect */}
                <div className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300">
                  <link.icon size={20} />
                </div>
                
                {/* Animated background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-current/10 to-current/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-current opacity-0 group-hover:opacity-30 animate-ping"></div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  {link.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Copyright with animation */}
          <div className="space-y-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <p className="flex items-center gap-2">
                <span>© {currentYear}</span>
                <span className="hidden sm:inline">•</span>
                <span>Muhayimana Divine</span>
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <span>All Rights Reserved</span>
                <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                <span>Crafted with passion</span>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="flex justify-center items-center gap-2 text-xs text-gray-600">
            <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Animated wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-0 animate-pulse"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* Custom gradient animation */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .bg-gradient-animated {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>
    </footer>
  );
}