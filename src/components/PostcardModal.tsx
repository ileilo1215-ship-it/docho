"use client";

import { useState, useRef, useEffect } from "react";

interface PostcardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostcardModal({ isOpen, onClose }: PostcardModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sender, setSender] = useState("");
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setSender("");
          setContent("");
          setFileName("");
          setAgreed(false);
        }, 300);
      }
    }
  }, [isOpen, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sender || !content || !agreed) {
      alert("모든 필수 항목을 입력하고 동의해 주세요.");
      return;
    }

    // Construct mailto link as a reliable fallback
    const subject = encodeURIComponent(`[도초바다] 새로운 편지가 도착했습니다 - ${sender}`);
    const body = encodeURIComponent(`보낸 사람: ${sender}\n\n내용:\n${content}\n\n(참고: 첨부하신 사진은 메일 앱에서 별도로 첨부해 주세요.)`);
    const mailtoLink = `mailto:ileilo1215@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ocean-deep/40 backdrop-blur-sm transition-opacity duration-500 ease-out"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className={`relative w-full max-w-[400px] bg-[#FCFBF8] shadow-2xl transition-all duration-500 ease-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Postcard Border Decorative */}
        <div className="absolute inset-0 border-[10px] border-white/50 pointer-events-none" />
        <div className="absolute inset-2.5 border border-zinc-200 pointer-events-none" />

        <div className="relative p-6 md:p-8">
          {/* Close Button */}
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-zinc-400 hover:text-ocean-deep transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <div className="space-y-5">
              {/* Header */}
              <div className="text-center space-y-2.5">
                <div className="flex justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-9 h-9 text-ocean-deep opacity-40"
                  >
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-serif text-ocean-deep tracking-tight">섬으로 보내는 편지</h2>
                  <div className="h-px w-5 bg-ocean-shallow/30 mx-auto" />
                </div>
                <p className="text-zinc-500 text-[11px] font-sans leading-relaxed px-2">
                  당신의 기억 한 조각을 나누어 주세요. <br />
                  소중한 기록은 '도초의 조각들' 메뉴에 기록됩니다.
                </p>
              </div>

              {/* Form */}
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                {/* Sender Input */}
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">보내는 사람</label>
                  <input 
                    type="text"
                    name="보낸사람"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    placeholder="이름 또는 닉네임"
                    className="w-full bg-white border border-zinc-200 p-2 px-3 text-[12px] font-sans text-zinc-800 focus:outline-none focus:border-ocean-shallow transition-colors placeholder:text-zinc-300"
                    required
                  />
                </div>

                {/* Content Textarea */}
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">편지 내용</label>
                  <textarea 
                    rows={4}
                    name="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="그곳에서의 기억이나 전하고 싶은 말을 적어주세요."
                    className="w-full bg-white border border-zinc-200 p-2 px-3 text-[12px] font-sans text-zinc-800 focus:outline-none focus:border-ocean-shallow transition-colors resize-none placeholder:text-zinc-300 leading-relaxed"
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">사진 조각 더하기</label>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-[10px] font-bold transition-colors border border-zinc-200"
                    >
                      파일 선택
                    </button>
                    <span className="text-[10px] text-zinc-400 truncate max-w-[130px]">
                      {fileName || "선택된 파일 없음"}
                    </span>
                    <input 
                      type="file"
                      name="사진"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 pt-0.5">
                  <input 
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-3 h-3 accent-ocean-deep border-zinc-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="text-[10px] text-zinc-500 leading-normal cursor-pointer select-none">
                    보내주신 사진과 글은 '도초의 조각들'에 소개될 수 있음에 동의합니다.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-3 bg-ocean-deep text-white font-sans font-bold text-[10px] tracking-widest uppercase hover:bg-ocean-shallow transition-all duration-300 shadow-lg shadow-ocean-deep/10"
                >
                  편지 보내기
                </button>
              </form>
            </div>
          ) : (
            <div className="py-10 text-center space-y-4 flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="w-14 h-14 bg-ocean-shallow/10 rounded-full flex items-center justify-center mb-1">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-base font-serif text-ocean-deep leading-relaxed">
                당신의 편지가 도초도 바다에 <br />
                무사히 띄워졌습니다
              </h3>
              <p className="text-zinc-400 text-[10px] font-sans px-4">
                소중한 기억을 나눠주셔서 감사합니다.
              </p>
              <button 
                type="button"
                onClick={onClose}
                className="mt-3 px-5 py-2 border border-zinc-200 text-zinc-500 hover:text-ocean-deep hover:border-ocean-deep transition-all text-[9px] font-bold tracking-widest uppercase"
              >
                닫기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
