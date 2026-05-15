"use client";

import { useState } from "react";
import Image from "next/image";

const stories = [
  {
    title: "팽나무 10리길",
    description: "수령 100년의 팽나무들이 만든 터널 아래에서 바람을 만납니다.",
    image: "/hero/IMG_2137.JPG",
    type: "place",
    related: "정점수 어르신",
    colSpan: "col-span-12 md:col-span-8",
  },
  {
    title: "정점수 어르신",
    description: "팽나무 길을 평생 지켜온 도초의 살아있는 역사.",
    image: "/archive_people.png",
    type: "person",
    related: "팽나무 10리길",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "시목해수욕장",
    description: "비단결 같은 모래사장이 끝없이 펼쳐지는 곳.",
    image: "/hero/IMG_2137.JPG",
    type: "place",
    related: "김철수 어부",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    title: "김철수 어부",
    description: "시목 바다에서 40년째 그물을 던지는 섬의 파수꾼.",
    image: "/archive_people.png",
    type: "person",
    related: "시목해수욕장",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    title: "자산어보의 흔적",
    description: "정약전 선생이 머물렀던 그 바다의 기록.",
    image: "/hero/IMG_2137.JPG",
    type: "place",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "고란평야",
    description: "섬 속의 너른 들녘, 도초의 풍요를 상징합니다.",
    image: "/hero/IMG_2137.JPG",
    type: "place",
    related: "이옥순 할머니",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "이옥순 할머니",
    description: "고란 들녘에서 평생을 일궈온 어머니의 손길.",
    image: "/archive_people.png",
    type: "person",
    related: "고란평야",
    colSpan: "col-span-12 md:col-span-4",
  },
];

export default function Archive() {
  const [filter, setFilter] = useState<"all" | "place" | "person">("all");
  const [displayCount, setDisplayCount] = useState(4);

  const filteredStories = stories.filter(
    (story) => filter === "all" || story.type === filter
  );

  const visibleStories = filteredStories.slice(0, displayCount);

  return (
    <section id="archive" className="py-24 bg-white px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-line pb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-ocean-deep mb-4">도초의 조각</h2>
          <p className="text-zinc-500 font-sans max-w-md">장소와 사람, 도초도의 숨겨진 이야기들을 기록합니다.</p>
        </div>
        
        {/* Filtering Tabs */}
        <div className="flex gap-6 mt-8 md:mt-0 font-sans text-sm">
          {(["all", "place", "person"] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setFilter(t);
                setDisplayCount(4); // Reset display count on filter change
              }}
              className={`pb-2 px-1 transition-all border-b-2 ${
                filter === t 
                  ? "text-ocean-deep border-ocean-deep font-bold" 
                  : "text-zinc-400 border-transparent hover:text-zinc-600"
              }`}
            >
              {t === "all" ? "전체" : t === "place" ? "장소" : "사람"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {visibleStories.map((story, index) => (
          <div key={index} className={`${story.colSpan} group cursor-pointer`}>
            <div className="relative aspect-[4/3] overflow-hidden line-art-border mb-4">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className={`object-cover transition-all duration-700 scale-100 group-hover:scale-105 ${
                  story.type === "person" ? "grayscale-0" : "grayscale hover:grayscale-0"
                }`}
              />
              {/* Type Badge */}
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-ocean-deep line-art-border">
                {story.type === "place" ? "Place" : "Person"}
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-serif text-zinc-900">{story.title}</h3>
              {story.related && (
                <span className="text-[10px] text-ocean-shallow font-sans border border-ocean-shallow/20 px-2 py-0.5 rounded">
                  연계: {story.related}
                </span>
              )}
            </div>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed">{story.description}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {displayCount < filteredStories.length && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 4)}
            className="group relative px-8 py-3 font-sans text-sm text-ocean-deep overflow-hidden"
          >
            <span className="relative z-10">더 보기 (Load More)</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ocean-deep/20 group-hover:h-full group-hover:bg-ocean-deep/5 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-ocean-deep group-hover:w-full transition-all duration-500" />
          </button>
        </div>
      )}
    </section>
  );
}
