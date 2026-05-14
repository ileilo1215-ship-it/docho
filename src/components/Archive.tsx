import Image from "next/image";

const stories = [
  {
    title: "팽나무 10리길",
    description: "수령 100년의 팽나무들이 만든 터널 아래에서 바람을 만납니다.",
    image: "/hero.png", // Reusing landscape for variety if needed, but I'll try to stick to theme
    colSpan: "col-span-12 md:col-span-8",
  },
  {
    title: "섬사람들의 미소",
    description: "바다를 닮은 깊은 눈매와 따뜻한 환대.",
    image: "/archive_people.png",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "시목해수욕장",
    description: "비단결 같은 모래사장이 끝없이 펼쳐지는 곳.",
    image: "/hero.png",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    title: "자산어보의 흔적",
    description: "정약전 선생이 머물렀던 그 바다의 기록.",
    image: "/hero.png",
    colSpan: "col-span-12 md:col-span-6",
  },
];

export default function Archive() {
  return (
    <section id="archive" className="py-24 bg-white px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-line pb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-ocean-deep mb-4">The Archive</h2>
          <p className="text-zinc-500 font-sans max-w-md">장소와 사람, 도초도의 모든 숨겨진 이야기들을 현대적인 시선으로 기록합니다.</p>
        </div>
        <span className="text-zinc-300 font-sans tracking-widest uppercase text-xs mt-4 md:mt-0">Vol. 01 — 2026</span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {stories.map((story, index) => (
          <div key={index} className={`${story.colSpan} group cursor-pointer`}>
            <div className="relative aspect-[4/3] overflow-hidden line-art-border mb-4">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-serif text-zinc-900 mb-2">{story.title}</h3>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
