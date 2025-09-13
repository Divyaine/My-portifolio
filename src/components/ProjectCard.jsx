import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";

export default function ProjectCard({ title, description, tech, demoLink, codeLink }) {
  return (
    <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col overflow-hidden border border-gray-100/50 hover:border-indigo-200/50">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Title with enhanced typography */}
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Description with better spacing */}
        <p className="text-gray-600 flex-grow leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Enhanced tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full border border-indigo-200/50 hover:from-indigo-100 hover:to-indigo-200 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
              style={{
                animationDelay: `${i * 100}ms`
              }}
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* Enhanced action buttons */}
        <div className="flex gap-4 mt-auto">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="group/demo flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md hover:shadow-indigo-500/25"
            >
              <Play className="w-4 h-4 group-hover/demo:scale-110 transition-transform duration-200" />
              Live Demo
              <ExternalLink className="w-3 h-3 opacity-70 group-hover/demo:opacity-100 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 transition-all duration-200" />
            </a>
          )}
          
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="group/code flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md border border-gray-200 hover:border-gray-300"
            >
              <Github className="w-4 h-4 group-hover/code:rotate-12 transition-transform duration-300" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-70 group-hover/code:opacity-100 group-hover/code:translate-x-0.5 group-hover/code:-translate-y-0.5 transition-all duration-200" />
            </a>
          )}
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
      <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent group-hover:w-full transition-all duration-700" />
    </div>
  );
}