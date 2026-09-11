const CLIENTS = [
  { initials: "NST", name: "엔에스티바이오 음성공장" },
  { initials: "동원", name: "(주)동원에프앤비" },
  { initials: "MS", name: "엠에스바이오택(주)" },
  { initials: "꽃동", name: "꽃동네" },
  { initials: "요양", name: "음성요양병원" },
  { initials: "성심", name: "음성종합성심병원" },
  { initials: "시세", name: "(주)시세계푸드" },
  { initials: "에이", name: "에이푸드주식회사" },
]

export default function ProjectHistory() {
  return (
    <section id="project-history" className="scroll-mt-20 border-t border-hairline bg-canvas-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
          TRACK RECORD
        </span>
        <h2 className="mt-5 break-keep text-[26px] font-light leading-[1.15] tracking-[-0.26px] text-ink sm:text-[32px] sm:tracking-[-0.64px]">
          시공 이력
        </h2>
        <p className="mt-3 max-w-xl break-keep text-base font-light leading-[1.4] text-ink-secondary">
          다양한 산업·의료·복지 현장에서 광통신·네트워크·CCTV 인프라를 구축해왔습니다.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="rounded-lg border border-hairline bg-canvas p-5 shadow-level-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-subdued hover:shadow-level-2 sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-subdued text-[12px] font-normal tracking-[-0.1px] text-primary-deep">
                {client.initials}
              </div>
              <p className="mt-4 break-keep text-[15px] font-light leading-[1.4] text-ink">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
