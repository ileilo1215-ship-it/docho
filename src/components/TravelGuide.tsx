export default function TravelGuide() {
  const schedule = [
    { from: "목포 연안여객선터미널", to: "도초항", time: "07:50", type: "쾌속선" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "13:00", type: "쾌속선" },
    { from: "목포 연안여객선터미널", to: "도초항", time: "16:00", type: "쾌속선" },
    { from: "암태 남강선착장", to: "비금 가산항", time: "매시 정각", type: "차도선" },
  ];

  return (
    <section id="travel" className="py-24 bg-white border-y border-line">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-serif text-ocean-deep">Travel Guide</h2>
          <div className="flex-1 h-px bg-line" />
        </div>

        <div className="bg-white line-art-border p-8 md:p-12">
          <h3 className="text-xl font-serif mb-8 text-zinc-900 flex items-center gap-3">
            <svg className="w-5 h-5 text-ocean-shallow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            배 시간표 정보
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-zinc-400 text-xs uppercase tracking-widest">
                  <th className="pb-4 font-medium">From</th>
                  <th className="pb-4 font-medium">To</th>
                  <th className="pb-4 font-medium">Departure</th>
                  <th className="pb-4 font-medium text-right">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {schedule.map((item, index) => (
                  <tr key={index} className="text-zinc-700 font-sans group hover:bg-neutral-grey transition-colors">
                    <td className="py-5 text-sm md:text-base">{item.from}</td>
                    <td className="py-5 text-sm md:text-base">{item.to}</td>
                    <td className="py-5 font-bold text-ocean-deep">{item.time}</td>
                    <td className="py-5 text-right text-zinc-400 text-sm">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 p-6 bg-neutral-grey/50 rounded-lg border border-dashed border-zinc-300">
            <p className="text-xs text-zinc-500 font-sans leading-relaxed">
              * 기상 상황에 따라 운항 일정이 변경될 수 있으니 출발 전 반드시 선사에 확인하시기 바랍니다. <br />
              * 도초도는 비금도와 다리로 연결되어 있어 가산항(비금)을 통해서도 접근이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
