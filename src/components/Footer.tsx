export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-white py-24 px-6 overflow-hidden relative">
      {/* Decorative Line Art */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/5 -mr-32 -mt-32 rotate-45" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Guestbook */}
        <div>
          <h2 className="text-3xl font-serif mb-8">안부 전하기</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="이름" 
              className="w-full bg-white/5 border border-white/10 rounded-none p-4 font-sans text-sm focus:outline-none focus:border-white/40 transition-colors"
            />
            <textarea 
              rows={4} 
              placeholder="도초도에 남기고 싶은 이야기를 적어주세요." 
              className="w-full bg-white/5 border border-white/10 rounded-none p-4 font-sans text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
            <button className="w-full py-4 bg-white text-ocean-deep font-sans font-bold text-sm tracking-widest uppercase hover:bg-zinc-100 transition-colors">
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
              Issue Digital ID
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif">도초바다</span>
              <span className="text-white/30 text-xs font-sans tracking-widest">© 2026 SHINAN DOCHO</span>
            </div>
            <div className="flex gap-6 text-white/40 text-xs font-sans">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
