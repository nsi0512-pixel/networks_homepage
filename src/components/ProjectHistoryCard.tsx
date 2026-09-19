import { Link } from "react-router-dom"
import ServiceVisual from "./ServiceVisual"

const TAGS = ["정기 점검", "24시간 출동", "설비 개선/이설", "장애 복구"]

const STATS = [
  { label: "긴급출동", value: "24시간" },
  { label: "평균 출동", value: "30분" },
  { label: "정기점검", value: "월 1회" },
]

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
          <ServiceVisual variant="maintenance" />
          <span className="absolute right-3 top-3 rounded-full bg-canvas/15 px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-on-primary backdrop-blur">
            유지보수 전문업체
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-3 pt-8">
            <p className="text-[13px] font-normal tracking-[-0.39px] text-primary-subdued">
              정기 점검 · 24시간 긴급 출동
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-[22px] font-light leading-[1.1] tracking-[-0.22px] text-ink">
            정보통신설비 유지보수 전문업체
          </h3>
          <p className="mt-2 text-[15px] font-light leading-[1.4] text-ink-mute">
            광케이블·네트워크·CCTV 설비를 정기적으로 점검하고 24시간 장애 출동 체계로
            신속하게 복구하여 안정적인 통신 환경을 지속적으로 유지관리합니다.
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

          <Link
            to="/business"
            className="group mt-3 flex min-h-11 w-full items-center justify-center gap-1 text-[15px] font-light text-primary transition-colors hover:text-primary-deep"
          >
            유지보수 서비스 보기
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
          </Link>
        </div>
      </div>
    </div>
  )
}
