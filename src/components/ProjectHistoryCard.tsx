const TAGS = ["광케이블 배선", "IP CCTV 210대", "네트워크 통합", "관제실 구축"]

const STATS = [
  { label: "공사기간", value: "45일" },
  { label: "설치 카메라", value: "210대" },
  { label: "배선거리", value: "12km" },
]

function NetworkVisual() {
  return (
    <svg viewBox="0 0 480 270" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1e54" />
          <stop offset="100%" stopColor="#0d253d" />
        </linearGradient>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#665efd" stopOpacity="0" />
          <stop offset="50%" stopColor="#665efd" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#665efd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill="url(#bg)" />
      {[40, 90, 140, 190, 230].map((y, i) => (
        <path
          key={y}
          d={`M -20 ${y} C 120 ${y - 20 * (i % 2 === 0 ? 1 : -1)}, 340 ${y + 20 * (i % 2 === 0 ? 1 : -1)}, 500 ${y}`}
          fill="none"
          stroke="url(#line)"
          strokeWidth="1.4"
        />
      ))}
      <g transform="translate(200,95)">
        <rect x="-46" y="-34" width="92" height="68" rx="14" fill="#273951" stroke="#533afd" strokeWidth="1.5" />
        <circle cx="0" cy="-4" r="16" fill="#1c1e54" stroke="#665efd" strokeWidth="1.5" />
        <circle cx="0" cy="-4" r="6.5" fill="#665efd" />
        <rect x="-14" y="18" width="28" height="7" rx="3.5" fill="#533afd" />
      </g>
      <g transform="translate(300,150) scale(0.9)" stroke="#b9b9f9" strokeWidth="1.6" fill="none">
        <path d="M-24 20c9-11 23-11 32 0" />
        <path d="M-16 12c5.5-6.5 13.5-6.5 19 0" />
        <circle cx="-2" cy="7" r="2.4" fill="#b9b9f9" stroke="none" />
      </g>
      <g>
        <circle cx="70" cy="60" r="2.6" fill="#ea2261" />
        <circle cx="410" cy="70" r="2.6" fill="#f96bee" />
        <circle cx="60" cy="210" r="2.6" fill="#f96bee" />
        <circle cx="420" cy="200" r="2.6" fill="#ea2261" />
      </g>
    </svg>
  )
}

export default function ProjectHistoryCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -top-3 left-6 z-10 flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep shadow-[0_1px_3px_rgba(0,55,112,0.08)] ring-4 ring-canvas">
        <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.6l2.47 5.38 5.93.62-4.42 4.05 1.24 5.83L10 14.5l-5.22 2.98 1.24-5.83L1.6 7.6l5.93-.62L10 1.6z" />
        </svg>
        대한민국 신지식인 선정
      </div>

      <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-level-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-level-2">
        <div className="relative aspect-video">
          <NetworkVisual />
          <span className="absolute right-3 top-3 rounded-full bg-canvas/15 px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-on-primary backdrop-blur">
            공사이력
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-3 pt-8">
            <p className="text-[13px] font-normal tracking-[-0.39px] text-primary-subdued">
              종합병원 · 충북 청주
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-[22px] font-light leading-[1.1] tracking-[-0.22px] text-ink">
            OO종합병원 통합 네트워크 · CCTV 구축 공사
          </h3>
          <p className="mt-2 text-[15px] font-light leading-[1.4] text-ink-mute">
            원내 전 병동 광케이블 백본망 신설과 지능형 IP CCTV 통합 관제 시스템을 구축하여
            안정적인 통신 환경과 보안 체계를 완성했습니다.
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 divide-x divide-hairline rounded-md bg-canvas-soft py-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-2 text-center">
                <span
                  className="text-[14px] font-light tracking-[-0.42px] text-ink"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[11px] font-light text-ink-mute">{stat.label}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              document.getElementById("project-history")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mt-3 flex min-h-11 w-full items-center justify-center gap-1 text-[15px] font-light text-primary transition-colors hover:text-primary-deep"
          >
            시공사례 더 보기
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
