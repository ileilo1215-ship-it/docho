import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/IMG_2137.JPG"
          alt="Docho Island Landscape"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-gowun text-white leading-tight mb-8 drop-shadow-lg">
          엄마의 일기가 안내하는 <br className="hidden md:block" /> 길을 따라 걷다
        </h1>
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-white/60 animate-pulse" />
          <p className="text-white/80 font-sans tracking-[0.2em] text-sm uppercase">Scroll to explore</p>
        </div>
      </div>

      {/* Line Art Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10" />
    </section>
  );
}
