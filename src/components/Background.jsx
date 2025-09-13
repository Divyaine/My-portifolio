import React, { useMemo, useEffect, useState } from "react";

// Visual background with multiple modes: rain, stars, aurora, composite
export default function Background({ mode = "composite", density = 80, opacity = 0.12 }) {
  const items = useMemo(() => Array.from({ length: density }, (_, i) => i), [density]);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      setMouse({ x: (e.clientX / w) * 100, y: (e.clientY / h) * 100 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const showRain = mode === 'rain' || mode === 'composite';
  const showStars = mode === 'stars' || mode === 'composite';
  const showAurora = mode === 'aurora' || mode === 'composite';

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {showAurora && (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25),_transparent_60%)] blur-3xl animate-aurora" />
          <div className="absolute top-1/3 -right-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.2),_transparent_60%)] blur-3xl animate-aurora-delayed" />
          <div className="absolute bottom-0 left-1/3 w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.16),_transparent_60%)] blur-3xl animate-aurora-slower" />
        </div>
      )}

      {showStars && (
        <div className="absolute inset-0">
          {items.map((i) => (
            <div
              key={`s-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                opacity: opacity * (0.6 + Math.random() * 0.8),
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {showRain && (
        <div className="absolute inset-0">
          {items.slice(0, Math.max(10, Math.floor(density * 0.6))).map((i) => (
            <div
              key={`r-${i}`}
              className="absolute w-px bg-white/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 100}%`,
                height: `${20 + Math.random() * 60}vh`,
                opacity,
                animation: `rain-fall ${2 + Math.random() * 2}s linear ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(400px_300px_at_${mouse.x}%_${mouse.y}%, rgba(255,255,255,0.06), transparent 60%)`,
          transition: 'background-position 80ms linear',
        }}
      />

      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(120vh); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes auroraMove {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(10px, -10px, 0) scale(1.05); }
        }
        .animate-aurora { animation: auroraMove 14s ease-in-out infinite; }
        .animate-aurora-delayed { animation: auroraMove 18s ease-in-out infinite; animation-delay: 2s; }
        .animate-aurora-slower { animation: auroraMove 22s ease-in-out infinite; animation-delay: 4s; }
      `}</style>
    </div>
  );
}


