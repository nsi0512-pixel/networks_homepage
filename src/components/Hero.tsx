import { Link } from "react-router-dom"
import GradientMesh from "./GradientMesh"
import ProjectHistoryCard from "./ProjectHistoryCard"

const TRUST_STATS = [
  { value: "17", suffix: "년+", label: "시공 경력" },
  { value: "1,200", suffix: "+", label: "누적 시공 실적" },
  { value: "24", suffix: "시간", label: "긴급 A/S 대응" },
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-canvas">
      <GradientMesh />

      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pb-28 lg:pt-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-canvas/70 px-3 py-1.5 text-micro-cap font-normal text-primary-deep ring-1 ring-primary-subdued/70 backdrop-blur">
            광통신 · 네트워크 · CCTV 통합 인프라
          </span>

          <h1 className="mt-7 break-keep text-[34px] leading-[1.2] font-light tracking-[-0.8px] text-ink sm:text-[44px] sm:leading-[1.16] sm:tracking-[-1px] lg:text-display-xl xl:text-display-xxl">
            산업·공공시설을 위한{" "}
            <span className="text-primary">광통신·네트워크·CCTV</span> 통합 인프라 구축
            전문기업
          </h1>

          <p className="mt-7 max-w-xl break-keep text-base leading-[1.75] font-light text-ink-secondary sm:text-body-lg">
            공장·병원·학교 등 다양한 현장에 최적화된 통신 및 보안 인프라를 구축합니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to="/about" className="btn-primary">
              회사소개
            </Link>
            <Link to="/quote" className="btn-secondary">
              무료 견적문의
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd
                  className="text-display-md font-light text-ink sm:text-display-lg"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </dd>
                <dd className="mt-1.5 text-caption font-normal text-ink-mute">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pl-4">
          <ProjectHistoryCard />
        </div>
      </div>
    </section>
  )
}
