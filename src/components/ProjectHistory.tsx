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

// DESIGN.md 팔레트(인디고·크림·네이비·루비)를 번갈아 써서 카드 줄에 리듬을 준다.
const BADGE_TONES = [
  "bg-primary-subdued/45 text-primary-deep",
  "bg-canvas-cream text-lemon",
  "bg-brand-dark-900 text-primary-subdued",
  "bg-ruby/10 text-ruby",
]

export default function ProjectHistory() {
  return (
    <section id="project-history" className="scroll-mt-20 bg-canvas-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-12">
          <div>
            <span className="eyebrow">TRACK RECORD</span>
            <h2 className="mt-4 break-keep text-display-md font-light text-ink sm:text-display-lg lg:text-display-xl">
              시공 이력
            </h2>
          </div>
          <p className="max-w-xl break-keep text-base leading-[1.75] font-light text-ink-secondary sm:text-body-lg lg:justify-self-end">
            다양한 산업·의료·복지 현장에서 광통신·네트워크·CCTV 인프라를 구축해왔습니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {CLIENTS.map((client, index) => (
            <div key={client.name} className="card card-hover p-5 sm:p-7">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-md text-[12px] font-normal tracking-[-0.1px] ${
                  BADGE_TONES[index % BADGE_TONES.length]
                }`}
              >
                {client.initials}
              </div>
              <p className="mt-5 break-keep text-body-md font-light text-ink">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
