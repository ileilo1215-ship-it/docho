"use client";

import React, { useState, useEffect } from "react";

export interface Message {
  id: number;
  author: string;
  content: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  delay: number;
  size: number;
}

interface BottleSeaProps {
  messages: Message[];
}

export default function BottleSea({ messages }: BottleSeaProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-64 bg-ocean-deep/50" />;

  return (
    <div className="relative w-full h-80 bg-gradient-to-b from-ocean-deep to-ocean-shallow overflow-hidden group">
      {/* Wave Layers */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 w-[200%] h-32 text-white/5 animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-0 w-[200%] h-24 text-white/10 animate-wave-medium"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C400,80 800,80 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-0 w-[200%] h-16 text-white/20 animate-wave-fast"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,40 900,40 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Messages (Dots) */}
      <div className="absolute inset-0 z-10">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="absolute transition-all duration-1000"
            style={{
              left: `${msg.x}%`,
              top: `${msg.y}%`,
            }}
          >
            <div
              className="relative group/dot cursor-pointer"
              style={{
                animation: `float ${3 + msg.delay}s ease-in-out infinite alternate`,
                animationDelay: `${msg.delay}s`,
              }}
            >
              {/* The Dot / Bottle Icon */}
              <div 
                className="bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:scale-150 transition-transform duration-300 animate-sparkle"
                style={{
                  width: `${msg.size}px`,
                  height: `${msg.size}px`,
                  animationDelay: `${msg.delay * 0.5}s`,
                }}
              />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/dot:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-white/95 backdrop-blur-sm text-ocean-deep p-4 rounded-2xl shadow-2xl min-w-[200px] relative">
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-40 mb-1">{msg.author}</p>
                  <p className="text-sm font-serif leading-relaxed whitespace-nowrap">
                    "{msg.content}"
                  </p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/95" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay for better depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ocean-deep/40 to-transparent" />

      {/* Mobile Messages Marquee (Mobile Only) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 bg-black/20 backdrop-blur-sm py-3 border-t border-white/10">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee-mobile">
            {messages.map((msg) => (
              <span key={`mobile-${msg.id}`} className="mx-8 text-white/90 text-[11px] font-sans italic">
                <span className="font-bold text-ocean-shallow not-italic">{msg.author}</span> — "{msg.content}"
              </span>
            ))}
            {/* Repeat for seamless animation */}
            {messages.map((msg) => (
              <span key={`mobile-dup-${msg.id}`} className="mx-8 text-white/90 text-[11px] font-sans italic">
                <span className="font-bold text-ocean-shallow not-italic">{msg.author}</span> — "{msg.content}"
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-mobile {
          display: inline-block;
          animation: marquee-mobile 30s linear infinite;
        }
        @keyframes wave-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-medium {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(-75%); }
        }
        @keyframes wave-fast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(10px, 15px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-wave-slow { animation: wave-slow 20s linear infinite; }
        .animate-wave-medium { animation: wave-medium 15s linear infinite; }
        .animate-wave-fast { animation: wave-fast 10s linear infinite; }
        .animate-sparkle { animation: sparkle 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
