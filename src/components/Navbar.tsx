"use client";

import { useState } from "react";
import Link from "next/link";
import LogoComma from "./LogoComma";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "시작하기", href: "/" },
    { name: "도초의 조각", href: "#archive" },
    { name: "푸른 연서(戀書)", href: "#diary" },
    { name: "섬으로 가는 길", href: "#travel" },
  ];

  return (
    <>
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
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-ocean-deep transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden p-2 text-ocean-deep relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-50 w-[70%] bg-white shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-10 pt-24 gap-8 text-xl font-serif text-ocean-deep">
          {menuItems.map((item, index) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className={`transform transition-all duration-500 delay-${index * 100} ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              } hover:text-ocean-shallow`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
