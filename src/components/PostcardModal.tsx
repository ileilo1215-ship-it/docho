"use client";

import { useState, useRef, useEffect } from "react";

interface PostcardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostcardModal({ isOpen, onClose }: PostcardModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recipient, setRecipient] = useState("도초도에게");
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
      // Reset state when closing after submission
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setRecipient("도초도에게");
          setSender("");
          setContent("");
          setFileName("");
          setAgreed(false);
        }, 300);
      }
    }
  }, [isOpen, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    // We'll let the form submit naturally to the iframe
    if (!sender || !content || !agreed) {
      e.preventDefault();
      alert("모든 필수 항목을 입력하고 동의해 주세요.");
      return;
    }
    
    // The success state will be shown immediately upon submission
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
      
      {/* Hidden Iframe for submission */}
      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" />

      {/* Modal Container */}
      <div className={`relative w-full max-w-[420px] bg-[#FCFBF8] shadow-2xl transition-all duration-500 ease-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        {/* Postcard Border Decorative */}
        <div className="absolute inset-0 border-[12px] border-white/50 pointer-events-none" />
        <div className="absolute inset-3 border border-zinc-200 pointer-events-none" />

        <div className="relative p-8 md:p-10">
          {/* Close Button */}
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-ocean-deep transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-10 h-10 text-ocean-deep opacity-40"
                  >
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-serif text-ocean-deep tracking-tight">섬으로 보내는 편지</h2>
                  <div className="h-px w-6 bg-ocean-shallow/30 mx-auto" />
                </div>
                <p className="text-zinc-500 text-[12px] font-sans leading-relaxed px-2">
                  당신의 기억 한 조각을 나누어 주세요. <br />
                  소중한 기록은 '도초의 조각들' 메뉴에 기록됩니다.
                </p>
              </div>

              {/* Form */}
              <form 
                action="https://formsubmit.co/ileilo1215@gmail.com" 
                method="POST" 
                target="hidden_iframe"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                {/* FormSubmit Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value={`[도초바다] 새로운 편지가 도착했습니다`} />

                {/* Recipient Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">받는 사람</label>
                  <div className="relative">
                    <select 
                      name="받는사람"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full bg-white border border-zinc-200 p-2.5 px-4 text-[13px] font-sans text-zinc-800 appearance-none focus:outline-none focus:border-ocean-shallow transition-colors cursor-pointer"
                    >
                      <option value="도초도에게" className="text-zinc-800">도초도에게 (섬의 추억/사진 공유)</option>
                      <option value="등대지기에게" className="text-zinc-800">등대지기에게 (건의/문의)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Sender Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">보내는 사람</label>
                  <input 
                    type="text"
                    name="보낸사람"
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    placeholder="이름 또는 닉네임"
                    className="w-full bg-white border border-zinc-200 p-2.5 px-4 text-[13px] font-sans text-zinc-800 focus:outline-none focus:border-ocean-shallow transition-colors placeholder:text-zinc-300"
                    required
                  />
                </div>

                {/* Content Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">편지 내용</label>
                  <textarea 
                    rows={4}
                    name="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="그곳에서의 기억이나 전하고 싶은 말을 적어주세요."
                    className="w-full bg-white border border-zinc-200 p-2.5 px-4 text-[13px] font-sans text-zinc-800 focus:outline-none focus:border-ocean-shallow transition-colors resize-none placeholder:text-zinc-300 leading-relaxed"
                    required
                  />
                </div>

                {/* File Upload (Note: File upload via FormSubmit might require special handling, but we'll include it) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">사진 조각 더하기</label>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-[11px] font-bold transition-colors border border-zinc-200"
                    >
                      파일 선택
                    </button>
                    <span className="text-[11px] text-zinc-400 truncate max-w-[150px]">
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
                <div className="flex items-start gap-2.5 pt-1">
                  <input 
                    type="checkbox"
                    id="consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 accent-ocean-deep border-zinc-300 rounded"
                    required
                  />
                  <label htmlFor="consent" className="text-[11px] text-zinc-500 leading-normal cursor-pointer select-none">
                    보내주신 사진과 글은 '도초의 조각들'에 소개될 수 있음에 동의합니다.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-ocean-deep text-white font-sans font-bold text-[11px] tracking-widest uppercase hover:bg-ocean-shallow transition-all duration-300 shadow-lg shadow-ocean-deep/10"
                >
                  편지 보내기
                </button>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-5 flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-ocean-shallow/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-lg font-serif text-ocean-deep leading-relaxed">
                당신의 편지가 도초도 바다에 <br />
                무사히 띄워졌습니다
              </h3>
              <p className="text-zinc-400 text-[11px] font-sans px-6">
                소중한 기억을 나눠주셔서 감사합니다.
              </p>
              <button 
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2 border border-zinc-200 text-zinc-500 hover:text-ocean-deep hover:border-ocean-deep transition-all text-[10px] font-bold tracking-widest uppercase"
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
