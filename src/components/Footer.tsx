"use client";

import { useState } from "react";
import LogoComma from "./LogoComma";
import BottleSea, { Message } from "./BottleSea";
import PostcardModal from "./PostcardModal";

const INITIAL_MESSAGES: Message[] = [
  { id: 1, author: "서울에서 온 안부", content: "도초도의 파란 지붕이 그립네요.", x: 15, y: 40, delay: 0, size: 4 },
  { id: 2, author: "바람의 여행자", content: "도초의 바람 소리가 여기까지 들리는 것 같아요.", x: 35, y: 60, delay: 1, size: 3 },
  { id: 3, author: "수국 연가", content: "수국이 필 무렵 꼭 다시 가고 싶습니다.", x: 55, y: 30, delay: 2, size: 5 },
  { id: 4, author: "해변의 기억", content: "시목 해변의 노을은 제 인생 최고의 선물이었어요.", x: 75, y: 50, delay: 0.5, size: 4 },
  { id: 5, author: "그리운 손맛", content: "엄마의 손맛이 담긴 김치가 생각나는 밤입니다.", x: 25, y: 20, delay: 1.5, size: 3 },
  { id: 6, author: "푸른 꿈", content: "작은 배를 타고 섬 한 바퀴 돌던 기억이 생생해요.", x: 45, y: 70, delay: 3, size: 6 },
  { id: 7, author: "별 헤는 밤", content: "도초도의 별밤은 서울의 밤보다 훨씬 따뜻했습니다.", x: 65, y: 15, delay: 2.5, size: 4 },
  { id: 8, author: "섬 살이", content: "언젠가 그곳에서 한 달 살기를 꿈꾸고 있어요.", x: 85, y: 35, delay: 1.2, size: 3 },
  { id: 9, author: "연서의 조각", content: "푸른 연서 속의 문장들이 마음을 울립니다.", x: 10, y: 80, delay: 4, size: 5 },
  { id: 10, author: "윤슬의 소망", content: "도초바다의 윤슬처럼 매일이 반짝이길 바랍니다.", x: 90, y: 75, delay: 0.8, size: 4 },
];

export default function Footer() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isPostcardOpen, setIsPostcardOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    const newMessage: Message = {
      id: Date.now(),
      author: name,
      content: content,
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 60 + 20, // 20% to 80%
      delay: Math.random() * 5,
      size: Math.random() * 4 + 3, // 3 to 7px
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setContent("");
  };

  return (
    <footer className="bg-ocean-deep text-white overflow-hidden relative">
      {/* Digital Message in a Bottle: Sea Area */}
      <div className="relative">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <h2 className="text-sm font-serif tracking-[0.2em] text-white/40 uppercase">바다 위의 편지</h2>
          <div className="h-px w-12 bg-white/20 mx-auto mt-2" />
        </div>
        <BottleSea messages={messages} />
      </div>

      <div className="py-24 px-6 relative">
        {/* Decorative Line Art */}
        <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/5 -mr-32 -mt-32 rotate-45" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {/* Guestbook */}
          <div>
            <h2 className="text-3xl font-serif mb-2">안부 전하기</h2>
            <p className="text-white/40 text-sm font-sans mb-8 leading-relaxed">
              남겨주신 안부는 위쪽 바다에 작은 유리병이 되어 유영합니다. <br />
              다른 방문자들의 안부에도 마우스를 올려 이야기를 들어보세요.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="이름" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-none p-4 font-sans text-sm focus:outline-none focus:border-white/40 transition-colors"
              />
              <textarea 
                rows={4} 
                placeholder="도초도에 남기고 싶은 이야기를 적어주세요." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-none p-4 font-sans text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-white text-ocean-deep font-sans font-bold text-sm tracking-widest uppercase hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                남기기
              </button>
            </form>
          </div>

          {/* CTA & Info */}
          <div className="flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="text-xl font-serif mb-4 text-ocean-shallow">디지털 주민증 발급받기</h3>
              <p className="text-white/60 font-sans text-sm mb-8 leading-relaxed max-w-sm">
                도초도의 가상 주민이 되어보세요. <br />
                새로운 소식과 한정판 아카이브 굿즈 소식을 <br />
                가장 먼저 전달해 드립니다.
              </p>
              <button className="inline-flex items-center gap-4 text-white font-serif text-2xl group">
                디지털 주민증 발급
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="pt-12 border-t border-white/10 space-y-8">
              {/* Logo & Copyright */}
              <div className="flex items-center">
                <span className="text-xl font-logo text-white">도초</span>
                <LogoComma className="mt-1 text-white" />
                <span className="text-xl font-logo text-white ml-1.5">바다</span>
                <span className="text-white/30 text-xs font-sans tracking-widest ml-4">© 2026 SHINAN DOCHO</span>
              </div>

              {/* Info & Links */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="text-white/60 text-xs font-sans flex items-center gap-2">
                  <span className="opacity-40">오늘의 도초:</span>
                  <span className="bg-white/5 px-2 py-1 rounded">☀️ 24°C</span>
                  <span className="opacity-20">|</span>
                  <span className="bg-white/5 px-2 py-1 rounded">🌊 만조 14:20</span>
                </div>

                <div className="flex gap-8 text-white/40 text-xs font-sans items-center">
                  <div className="relative group">
                    <a 
                      href="https://www.ilovegohyang.go.kr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors border-b border-white/10 pb-0.5"
                    >
                      고향사랑기부
                    </a>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
                      <div className="bg-white text-ocean-deep px-3 py-1.5 text-[10px] font-bold shadow-2xl relative">
                        신안의 작은 섬들을 지키는 힘이 됩니다
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <button 
                      onClick={() => setIsPostcardOpen(true)}
                      className="hover:text-white transition-colors border-b border-white/10 pb-0.5 cursor-pointer"
                    >
                      섬으로 보내는 편지
                    </button>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
                      <div className="bg-white text-ocean-deep px-3 py-1.5 text-[10px] font-bold shadow-2xl relative">
                        당신의 도초를 들려주세요
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostcardModal 
        isOpen={isPostcardOpen} 
        onClose={() => setIsPostcardOpen(false)} 
      />
    </footer>
  );
}

