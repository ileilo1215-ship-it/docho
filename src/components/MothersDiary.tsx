import Image from "next/image";

const tags = ["#파도소리", "#첫수확", "#고란평야", "#섬집아기", "#저녁노을"];

export default function MothersDiary() {
  return (
    <section id="diary" className="py-24 bg-neutral-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-ocean-deep mb-6 italic">푸른 연서(戀書)</h2>
          <div className="w-24 h-px bg-ocean-shallow mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Diary Image */}
          <div className="relative aspect-[3/4] md:aspect-square bg-white p-4 md:p-8 shadow-2xl line-art-border rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full">
              <Image
                src="/diary_mockup.png"
                alt="푸른 연서(戀書)"
                fill
                className="object-contain"
              />
            </div>
            {/* Overlay Date */}
            <div className="absolute top-12 right-12 text-zinc-400 font-serif text-lg tracking-tighter">
              1978. 06. 15
            </div>
          </div>

          {/* Right: Typed Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-xs font-sans tracking-widest text-ocean-shallow uppercase font-bold mb-4 block">Archive Record #12</span>
              <p className="text-2xl md:text-3xl font-serif text-zinc-800 leading-relaxed mb-6">
                "오늘도 파도는 마당 끝까지 들어왔다. <br />
                남편이 잡아온 조기 몇 마리를 말리며 <br />
                막내의 웃음소리를 들었다. <br />
                바다는 무섭지만, 때론 참 따뜻하다."
              </p>
              <div className="w-12 h-px bg-zinc-300" />
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) => (
                <button 
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-500 text-sm font-sans hover:border-ocean-shallow hover:text-ocean-shallow transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
