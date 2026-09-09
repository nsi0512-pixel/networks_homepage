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

      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
            광통신 · 네트워크 · CCTV 통합 인프라
          </span>

          <h1 className="mt-6 break-keep text-[26px] font-light leading-[1.15] tracking-[-0.26px] text-ink sm:text-[32px] sm:tracking-[-0.64px] lg:text-[48px] lg:leading-[1.15] lg:tracking-[-0.96px] xl:text-[56px] xl:leading-[1.03] xl:tracking-[-1.4px]">
            산업·공공시설을 위한{" "}
            <span className="text-primary">광통신·네트워크·CCTV</span> 통합 인프라 구축
            전문기업
          </h1>

          <p className="mt-6 max-w-xl break-keep text-base font-light leading-[1.4] text-ink-secondary">
            공장·병원·학교 등 다양한 현장에 최적화된 통신 및 보안 인프라를 구축합니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="rounded-full bg-primary px-4 py-2 text-base font-normal text-on-primary transition-colors hover:bg-primary-press"
            >
              회사소개
            </a>
            <a
              href="#quote"
              className="rounded-full border border-primary bg-canvas px-4 py-2 text-base font-normal text-primary transition-colors hover:bg-primary-subdued/30"
            >
              무료 견적문의
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-hairline pt-8">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd
                  className="text-[26px] font-light leading-[1.12] tracking-[-0.26px] text-ink"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </dd>
                <dd className="mt-1 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pl-6">
          <ProjectHistoryCard />
        </div>
      </div>
    </section>
  )
}
