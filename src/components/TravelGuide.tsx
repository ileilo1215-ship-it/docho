export default function TravelGuide() {
  const mokpoSchedule = [
    { from: "목포 연안여객선터미널", to: "도초항", time: "07:50 / 08:10", type: "쾌속선", duration: "약 1시간" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "13:00 / 16:00", type: "쾌속선", duration: "약 1시간" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "07:00 / 15:00", type: "차도선", duration: "약 2시간 30분" },
  ];

  const amtaeSchedule = [
    { from: "암태 남강선착장", to: "비금 가산항", time: "06:00 ~ 22:00", type: "차도선", duration: "약 40분", note: "매시 정각 부근 40분~1시간 간격 수시 운항" },
  ];

  const themedRoutes = [
    {
      title: "엄마의 일기 코스",
      description: "일기에 등장한 장소들을 따라 걷는 감성 산책로",
      spots: ["도초항", "팽나무 10리길", "고란평야", "시목해변"],
      color: "bg-ocean-deep"
    },
    {
      title: "인생샷 포토 스팟",
      description: "2030 여행자를 위한 도초도의 가장 아름다운 순간들",
      spots: ["수국공원", "시목해변 데크길", "비금-도초 연도교"],
      color: "bg-ocean-shallow"
    }
  ];

  return (
    <section id="travel" className="py-24 bg-white border-y border-line">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-ocean-deep">섬으로 가는 길</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        {/* Real-time Vibe Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <a 
            href="https://www.badatime.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-ocean-deep/5 p-8 rounded-2xl line-art-border flex items-center justify-between hover:bg-ocean-deep/10 transition-colors group"
          >
            <div>
               <span className="text-[10px] uppercase tracking-widest text-ocean-deep/60 block mb-2 font-bold">현재 물때</span>
               <h4 className="text-xl font-serif text-ocean-deep">지금 도초도는 물이 들어오고 있어요.</h4>
               <p className="text-sm text-zinc-500 mt-2 font-sans">만조의 바다를 보러 오기에 가장 좋은 시간입니다.</p>
               <span className="text-[10px] text-ocean-deep mt-4 inline-block border-b border-ocean-deep opacity-0 group-hover:opacity-100 transition-opacity">실시간 물때 확인하기 →</span>
            </div>
            <div className="hidden sm:block">
               <svg className="w-12 h-12 text-ocean-deep/20 group-hover:text-ocean-deep/40 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
               </svg>
            </div>
          </a>
          <a 
            href="https://search.naver.com/search.naver?query=도초면+날씨" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-grey p-8 rounded-2xl line-art-border flex items-center justify-between hover:bg-zinc-100 transition-colors group"
          >
            <div>
               <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2 font-bold">오늘의 날씨</span>
               <h4 className="text-xl font-serif text-zinc-800">맑음, 22°C</h4>
               <p className="text-sm text-zinc-500 mt-2 font-sans">선선한 바닷바람이 불어 산책하기 좋습니다.</p>
               <span className="text-[10px] text-zinc-400 mt-4 inline-block border-b border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">기상 예보 확인하기 →</span>
            </div>
            <div className="hidden sm:block">
               <svg className="w-12 h-12 text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41z" />
               </svg>
            </div>
          </a>
        </div>

        {/* Themed Routes */}
        <div className="mb-20">
          <h3 className="text-xl font-serif mb-8 text-zinc-900 border-l-4 border-ocean-shallow pl-4">추천 테마 루트</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {themedRoutes.map((route, i) => (
              <div key={i} className="line-art-border p-8 hover:shadow-lg transition-shadow bg-white">
                <div className={`w-10 h-10 ${route.color} rounded-full mb-6 flex items-center justify-center text-white`}>
                  {i === 0 ? "♥" : "📷"}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 mb-2">{route.title}</h4>
                <p className="text-sm text-zinc-500 mb-6 font-sans leading-relaxed">{route.description}</p>
                <div className="flex flex-wrap gap-2">
                  {route.spots.map((spot, j) => (
                    <span key={j} className="text-[11px] bg-neutral-grey px-2 py-1 rounded text-zinc-600 font-sans">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Options (Existing content but refined) */}
        <div className="mb-20 space-y-16">
          {/* Option 1 */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-zinc-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ocean-deep text-white text-sm font-sans">1</span>
              목포 연안여객선터미널 출발 (직행 노선)
            </h3>
            <div className="bg-white line-art-border p-6 md:p-10 ml-0 md:ml-11">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line text-zinc-400 text-[10px] uppercase tracking-widest">
                      <th className="pb-4 font-medium">출발/도착</th>
                      <th className="pb-4 font-medium">출발 시각</th>
                      <th className="pb-4 font-medium">선박 종류</th>
                      <th className="pb-4 font-medium text-right">소요 시간</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {mokpoSchedule.map((item, index) => (
                      <tr key={index} className="text-zinc-700 font-sans group hover:bg-neutral-grey transition-colors">
                        <td className="py-5">
                          <div className="text-sm font-medium">{item.from}</div>
                          <div className="text-xs text-zinc-400">→ {item.to}</div>
                        </td>
                        <td className="py-5 font-bold text-ocean-deep">{item.time}</td>
                        <td className="py-5 text-zinc-400 text-xs">{item.type}</td>
                        <td className="py-5 text-right text-zinc-500 text-sm">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-zinc-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ocean-shallow text-white text-sm font-sans">2</span>
              암태 남강선착장 출발 (천사대교 경유)
            </h3>
            <div className="ml-0 md:ml-11 bg-white line-art-border p-6 md:p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line text-zinc-400 text-[10px] uppercase tracking-widest">
                      <th className="pb-4 font-medium">출발/도착</th>
                      <th className="pb-4 font-medium">출발 시각</th>
                      <th className="pb-4 font-medium">선박 종류</th>
                      <th className="pb-4 font-medium text-right">소요 시간</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {amtaeSchedule.map((item, index) => (
                      <tr key={index} className="text-zinc-700 font-sans group hover:bg-neutral-grey transition-colors">
                        <td className="py-5">
                          <div className="text-sm font-medium">{item.from}</div>
                          <div className="text-xs text-zinc-400">→ {item.to}</div>
                        </td>
                        <td className="py-5 font-bold text-ocean-deep">{item.time}</td>
                        <td className="py-5 text-zinc-400 text-xs">{item.type}</td>
                        <td className="py-5 text-right text-zinc-500 text-sm">{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Tips & Etiquette Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-line">
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-ocean-deep flex items-center gap-2">
               <span className="text-xl">🧳</span> 여행자 체크리스트
            </h3>
            <ul className="space-y-4 font-sans text-sm text-zinc-600">
               <li className="flex items-start gap-3">
                  <span className="text-ocean-shallow">✓</span>
                  <div><strong>신분증 필히 지참</strong><p className="text-xs text-zinc-400">선박 탑승 시 모든 인원의 신분증이 필요합니다.</p></div>
               </li>
               <li className="flex items-start gap-3">
                  <span className="text-ocean-shallow">✓</span>
                  <div><strong>편한 신발</strong><p className="text-xs text-zinc-400">팽나무 길과 해변 산책을 위해 걷기 편한 신발을 권장합니다.</p></div>
               </li>
               <li className="flex items-start gap-3">
                  <span className="text-ocean-shallow">✓</span>
                  <div><strong>실시간 시간표 확인</strong><p className="text-xs text-zinc-400">기상 상황에 따라 선박 운항이 중단될 수 있습니다.</p></div>
               </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-ocean-deep flex items-center gap-2">
               <span className="text-xl">🤫</span> 로컬 에티켓
            </h3>
            <div className="bg-neutral-grey/50 p-6 rounded-xl space-y-4 font-sans text-sm text-zinc-600 border border-line">
               <p>"도초도는 조용한 섬입니다. 주민들의 평화로운 일상과 <strong>낮잠 시간</strong>을 지켜주세요."</p>
               <p>"우리가 가져온 쓰레기는 다시 육지로 가져가는 <strong>머문 자리 흔적 없는 여행</strong>을 부탁드립니다."</p>
               <p>"마을 어르신들을 만나면 따뜻한 <strong>목인사</strong>를 건네보세요. 더 풍성한 이야기가 돌아올지도 모릅니다."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
