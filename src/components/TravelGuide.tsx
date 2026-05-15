export default function TravelGuide() {
  const mokpoSchedule = [
    { from: "목포 연안여객선터미널", to: "도초항", time: "07:50 / 08:10", type: "쾌속선", duration: "약 1시간" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "13:00 / 16:00", type: "쾌속선", duration: "약 1시간" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "07:00 / 15:00", type: "차도선", duration: "약 2시간 30분" },
  ];

  const amtaeSchedule = [
    { from: "암태 남강선착장", to: "비금 가산항", time: "06:00 ~ 22:00", type: "차도선", duration: "약 40분", note: "매시 정각 부근 40분~1시간 간격 수시 운항" },
  ];

  return (
    <section id="travel" className="py-24 bg-white border-y border-line">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-serif text-ocean-deep">섬으로 가는 길</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        {/* Option 1 */}
        <div className="mb-20">
          <h3 className="text-xl font-serif mb-6 text-zinc-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ocean-deep text-white text-sm font-sans">1</span>
            목포 연안여객선터미널 출발 (직행 노선)
          </h3>
          <p className="text-zinc-500 mb-8 ml-11 font-sans text-sm">목포항에서 도초항으로 바로 들어오는 가장 빠른 방법입니다.</p>
          
          <div className="bg-white line-art-border p-6 md:p-10 ml-0 md:ml-11">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line text-zinc-400 text-[10px] uppercase tracking-widest">
                    <th className="pb-4 font-medium">From/To</th>
                    <th className="pb-4 font-medium">Departure</th>
                    <th className="pb-4 font-medium">Type</th>
                    <th className="pb-4 font-medium text-right">Duration</th>
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
        <div className="mb-20">
          <h3 className="text-xl font-serif mb-6 text-zinc-900 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-ocean-shallow text-white text-sm font-sans">2</span>
            암태 남강선착장 출발 (천사대교 경유 노선)
          </h3>
          <p className="text-zinc-500 mb-8 ml-11 font-sans text-sm">천사대교를 건너는 즐거움이 있는 루트입니다. 자가용이나 버스를 이용해 남강항까지 이동 후 배를 탑승합니다.</p>
          
          <div className="ml-0 md:ml-11 space-y-8">
            {/* Bus Info */}
            <div className="p-6 bg-neutral-grey/30 border border-line rounded-lg">
              <h4 className="text-sm font-bold text-zinc-700 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-ocean-shallow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                버스 이동: 목포 → 남강선착장
              </h4>
              <ul className="text-sm text-zinc-600 space-y-2 font-sans">
                <li><span className="text-zinc-400 mr-2">탑승처</span> 목포종합버스터미널 (1004번, 2004번 신안 공영버스)</li>
                <li><span className="text-zinc-400 mr-2">소요시간</span> 약 1시간 10분 (천사대교 경유)</li>
              </ul>
            </div>

            {/* Ferry Info */}
            <div className="bg-white line-art-border p-6 md:p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-line text-zinc-400 text-[10px] uppercase tracking-widest">
                      <th className="pb-4 font-medium">From/To</th>
                      <th className="pb-4 font-medium">Departure</th>
                      <th className="pb-4 font-medium">Type</th>
                      <th className="pb-4 font-medium text-right">Duration</th>
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
              <p className="mt-4 text-[11px] text-zinc-400 font-sans italic">* {amtaeSchedule[0].note}</p>
            </div>
          </div>
        </div>

        {/* Tips Box */}
        <div className="bg-ocean-deep/5 border border-ocean-deep/10 p-8 md:p-10 rounded-2xl">
          <h3 className="text-lg font-serif text-ocean-deep mb-6 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            여행자 확인 사항
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">실시간 일정 확인</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                여객선 시간은 계절 및 기상 상황에 따라 수시로 변동됩니다. 출발 전 반드시 '가보고 싶은 섬' 웹사이트나 해당 선사로 확인해 주세요.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">여객선 탑승 준비</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                모든 승객은 신분증을 반드시 지참해야 하며, 출항 10~20분 전까지는 매표를 마치셔야 합니다.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-zinc-800">뚜벅이 팁</h4>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                목포에서 버스로 남강항에 오실 경우, 도로 상황을 고려하여 배 시간보다 30분 정도 여유 있게 도착하는 버스를 타시는 것이 안전합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

