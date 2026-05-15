"use client";

import Link from "next/link";
import LogoComma from "./LogoComma";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-ocean-deep fill-current">
              <path d="M10,70 Q20,30 50,20 T90,70 L85,75 Q80,65 70,70 T50,75 T30,70 T15,75 Z" />
              <circle cx="35" cy="50" r="2" className="text-white fill-current" />
            </svg>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-logo text-ocean-deep">도초</span>
            <LogoComma className="mt-1 text-ocean-deep" />
            <span className="text-xl font-logo text-ocean-deep ml-1.5">바다</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-ocean-deep transition-colors">Home</Link>
          <Link href="#archive" className="hover:text-ocean-deep transition-colors">Archive</Link>
          <Link href="#diary" className="hover:text-ocean-deep transition-colors">Mother's Diary</Link>
          <Link href="#travel" className="hover:text-ocean-deep transition-colors">Travel</Link>
        </div>
        
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
