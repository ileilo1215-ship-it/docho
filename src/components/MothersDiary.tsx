"use client";

import { useState } from "react";
import Image from "next/image";

const diaryEntries = [
  {
    id: 12,
    date: "1978. 06. 15",
    motherContent: "오늘도 파도는 마당 끝까지 들어왔다. 남편이 잡아온 조기 몇 마리를 말리며 막내의 웃음소리를 들었다. 바다는 무섭지만, 때론 참 따뜻하다.",
    fatherContent: "목포에서 부치는 편지. 도초 바다는 여전히 푸른가요. 아이들이 보고 싶어 밤잠을 설칩니다. 조기 말리는 냄새가 여기까지 나는 것 같소.",
    tags: ["#파도소리", "#첫수확", "#섬집아기"],
    image: "/diary_mockup.png",
    prevTitle: "",
    nextTitle: "비 내리는 수국길에서",
  },
  {
    id: 13,
    date: "1978. 07. 02",
    motherContent: "비가 내린다. 수국이 지천에 피었다. 당신이 없는 마당은 꽃들만 무성하다. 언제쯤 돌아오려나.",
    fatherContent: "비 오는 날은 배가 뜨지 않아 마음이 더 조급하구려. 수국 꽃잎 하나 편지에 담아 보내주오.",
    tags: ["#수국길", "#그리움", "#장마"],
    image: "/diary_mockup.png",
    prevTitle: "바다의 첫 인사",
    nextTitle: "가을 걷이의 노래",
  }
];

export default function MothersDiary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const entry = diaryEntries[currentIndex];

  return (
    <section id="diary" className="py-24 bg-neutral-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-ocean-deep mb-4 italic">푸른 연서(戀書)</h2>
            <p className="text-zinc-500 font-sans">엄마의 일기와 아빠의 편지가 만나는 시간</p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-8 font-sans text-sm">
             <button 
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="group flex flex-col items-end disabled:opacity-20 transition-all cursor-pointer disabled:cursor-default"
             >
                <span className="text-zinc-400 text-[10px] uppercase tracking-widest mb-1">Previous</span>
                <span className="text-zinc-900 group-hover:text-ocean-shallow transition-colors font-medium">
                   {entry.prevTitle || "시작"}
                </span>
             </button>
             <div className="w-px h-8 bg-zinc-300" />
             <button 
                onClick={() => setCurrentIndex(Math.min(diaryEntries.length - 1, currentIndex + 1))}
                disabled={currentIndex === diaryEntries.length - 1}
                className="group flex flex-col items-start disabled:opacity-20 transition-all cursor-pointer disabled:cursor-default"
             >
                <span className="text-zinc-400 text-[10px] uppercase tracking-widest mb-1">Next</span>
                <span className="text-zinc-900 group-hover:text-ocean-shallow transition-colors font-medium">
                   {entry.nextTitle || "마지막"}
                </span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Visual */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-white p-4 md:p-8 shadow-2xl line-art-border transform hover:-rotate-1 transition-transform duration-500">
               <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={entry.image}
                    alt="Diary Page"
                    fill
                    className="object-contain"
                  />
                  {/* Floating Date Badge */}
                  <div className="absolute top-0 right-0 bg-ocean-deep text-white p-3 font-serif text-sm vertical-text">
                    {entry.date}
                  </div>
               </div>
            </div>
            {/* Quote Card Overlay */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white/95 p-6 shadow-xl line-art-border max-w-[280px] hidden md:block">
               <p className="font-serif text-ocean-deep italic text-lg leading-relaxed">
                 "{entry.motherContent.slice(0, 40)}..."
               </p>
            </div>
          </div>

          {/* Right: Comparative Content */}
          <div className="lg:col-span-7 space-y-12 py-8">
            {/* Mother's Side */}
            <div className="relative pl-8 border-l-2 border-ocean-shallow/20">
               <span className="absolute -left-[9px] top-0 w-4 h-4 bg-ocean-shallow rounded-full" />
               <span className="text-[10px] font-bold text-ocean-shallow uppercase tracking-[0.2em] mb-4 block">엄마의 기록</span>
               <p className="text-2xl md:text-3xl font-serif text-zinc-800 leading-relaxed text-balance">
                 "{entry.motherContent}"
               </p>
            </div>

            {/* Connecting Line Art */}
            <div className="flex justify-center py-4">
               <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="text-zinc-300">
                  <path d="M0 20C30 20 30 0 60 0C90 0 90 20 120 20" stroke="currentColor" strokeDasharray="4 4" />
                  <path d="M0 20C30 20 30 40 60 40C90 40 90 20 120 20" stroke="currentColor" strokeDasharray="4 4" />
               </svg>
            </div>

            {/* Father's Side */}
            <div className="relative pl-8 border-l-2 border-zinc-200">
               <span className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-300 rounded-full" />
               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4 block">아빠의 답장</span>
               <p className="text-xl md:text-2xl font-serif text-zinc-500 leading-relaxed italic">
                 "{entry.fatherContent}"
               </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-8">
               {entry.tags.map((tag) => (
                 <span key={tag} className="text-sm font-sans text-zinc-400 px-3 py-1 border border-zinc-200 rounded-full">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
