// Solution 1: Import only what you need
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Background from "./components/Background";

const MotionDiv = motion.div;

function AnimatedRoutes() {
  const location = useLocation();
  
  // Enhanced page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.95,
      y: 20,
      filter: "blur(4px)"
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing curve
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      y: -10,
      filter: "blur(2px)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper variants={pageVariants}><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper variants={pageVariants}><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper variants={pageVariants}><Projects /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper variants={pageVariants}><Skills /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper variants={pageVariants}><Experience /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper variants={pageVariants}><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children, variants }) {
  return (
    <MotionDiv
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-[80vh] relative overflow-hidden"
    >
      {/* Background elements */}
      <MotionDiv 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
      </MotionDiv>

      {/* Content container */}
      <MotionDiv 
        className="relative z-10 container mx-auto px-4 py-8"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.5,
              staggerChildren: 0.1
            }
          }
        }}
      >
        {children}
      </MotionDiv>

      {/* Decorative top border */}
      <MotionDiv 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </MotionDiv>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white relative">
        {/* Background modes per route for distinct visuals */}
        {location.pathname === '/' && <Background mode="composite" density={100} opacity={0.12} />}
        {location.pathname === '/projects' && <Background mode="stars" density={120} opacity={0.1} />}
        {location.pathname === '/skills' && <Background mode="aurora" density={80} opacity={0.12} />}
        {['/about', '/experience', '/contact'].includes(location.pathname) && (
          <Background mode="rain" density={60} opacity={0.08} />
        )}
        
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        
        {location.pathname !== '/' && <Footer />}
        
        {/* Enhanced animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-20px) rotate(5deg); 
              opacity: 0.5;
            }
          }
          
          @keyframes float-delayed {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg) scale(1); 
              opacity: 0.2;
            }
            33% { 
              transform: translateY(-15px) rotate(-3deg) scale(1.05); 
              opacity: 0.4;
            }
            66% { 
              transform: translateY(-25px) rotate(3deg) scale(0.95); 
              opacity: 0.3;
            }
          }
          
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -10px); }
            50% { transform: translate(-5px, -20px); }
            75% { transform: translate(-10px, 5px); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 12s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </Router>
  );
}

// Alternative Solution 2: Use ESLint disable comment
/*
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
*/

// Alternative Solution 3: Destructure import
/*
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
*/