import GreetingVisual from "../components/GreetingVisual"
import PageHeader from "../components/PageHeader"

const GREETING_PARAGRAPHS = [
  "발빠르게 변화를 추구하는 한누리광통신을 방문해 주신 고객 여러분들께 진심으로 감사드립니다.",
  "저희는 깊은 현장 경험과 기술력, 노하우를 바탕으로 항상 고객과 함께한다는 이념으로 정진하고 있습니다.",
  "창조적인 역량으로 가득한 젊은 기업으로서 모든 임직원이 자유롭게 소통하고, 열정적인 마인드로 항상 새로운 가치를 만들어가고자 합니다.",
  "성실하고 건강한 마인드를 가진 인재들이 모여, 다양한 경험을 바탕으로 실패를 두려워하지 않는 도전정신으로 산업의 새로운 기준을 만들어가겠습니다.",
  "앞으로도 지속가능한 성장과 발전을 이루어 고객 여러분의 가장 신뢰할 수 있는 사업 파트너가 되기 위해 항상 노력하겠습니다.",
]

const COMPANY_INFO = [
  { label: "상호명", value: "한누리광통신" },
  { label: "대표", value: "문상필" },
  { label: "전화", value: "043-878-8888" },
  { label: "주소", value: "충북 음성군 음성읍 반기문로 45-15 상가동1층 101호" },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="ABOUT US"
        title="회사소개"
        description="한누리광통신은 광통신·네트워크·CCTV 통합 인프라 구축을 전문으로 하는 기업입니다. 공장·병원·학교 등 다양한 현장에서 축적한 시공 경험을 바탕으로 안정적인 통신 환경을 제공합니다."
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="grid gap-10 overflow-hidden rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)] lg:grid-cols-[1fr_320px] lg:gap-14 lg:p-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
              GREETING · CEO MESSAGE
            </span>
            <h2 className="mt-5 break-keep text-[26px] font-light leading-[1.15] tracking-[-0.26px] text-ink sm:text-[32px] sm:tracking-[-0.64px]">
              안녕하십니까, 한누리광통신입니다.
            </h2>
            <div className="mt-6 space-y-4">
              {GREETING_PARAGRAPHS.map((paragraph) => (
                <p
                  key={paragraph}
                  className="break-keep text-[15px] font-light leading-[1.4] text-ink-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 text-[15px] font-light text-ink">감사합니다.</p>
          </div>

          <div className="aspect-square overflow-hidden rounded-lg">
            <GreetingVisual />
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-hairline bg-canvas-soft p-8">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_INFO.map((item) => (
              <div key={item.label}>
                <dt className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                  {item.label}
                </dt>
                <dd className="mt-1 break-keep text-[15px] font-light leading-[1.4] text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
          회사 연혁, 보유 인증 등 추가 콘텐츠는 준비 중입니다.
        </p>
      </section>
    </div>
  )
}
