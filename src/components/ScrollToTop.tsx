"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-ocean-deep shadow-2xl transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      } hover:scale-110 active:scale-95 group`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 text-white transition-transform group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-ocean-deep text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        위로 가기
      </span>
    </button>
  );
}
