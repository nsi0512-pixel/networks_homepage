import { Link } from "react-router-dom"

const PHONE = "043-878-8888"

const TODAY = new Date().toISOString().slice(0, 10)

const MANAGER_REQUIREMENTS = [
  {
    title: "기술계 정보통신기술자",
    detail: "「정보통신공사업법 시행령」 별표6에 따른 기술자 자격을 보유해야 합니다.",
  },
  {
    title: "인정교육 20시간 이상 이수",
    detail: "과학기술정보통신부장관이 고시한 유지보수·관리자 인정교육을 이수해야 합니다.",
  },
  {
    title: "30일 이내 선임신고",
    detail: "선임·해임·변경일로부터 30일 이내에 관할 시·군·구청에 신고해야 합니다.",
  },
]

const OVERVIEW = [
  {
    label: "대상 건축물",
    value: "연면적 5,000㎡ 이상",
    detail: "공동주택과 초·중·고등학교 및 특수학교는 제외됩니다.",
  },
  {
    label: "점검 의무",
    value: "반기 1회 이상",
    detail: "유지보수·관리 점검은 반기별 1회 이상, 성능점검은 매년 1회 이상 실시합니다.",
  },
  {
    label: "기록 보존",
    value: "5년간 보존",
    detail: "점검표를 작성해 5년간 보존하고, 지자체 요청 시 제출해야 합니다.",
  },
]

const SCHEDULE = [
  { area: "30,000㎡ 이상", effectiveOn: "2025-07-19", effective: "2025. 7. 19.", penalty: "2026. 7. 19.부터" },
  { area: "10,000㎡ ~ 30,000㎡", effectiveOn: "2026-07-19", effective: "2026. 7. 19.", penalty: "2027. 1. 19.부터" },
  { area: "5,000㎡ ~ 10,000㎡", effectiveOn: "2027-07-19", effective: "2027. 7. 19.", penalty: "2027. 7. 19.부터" },
]

const GRADES = [
  { area: "60,000㎡ 이상", grade: "특급기술자 1명" },
  { area: "30,000㎡ ~ 60,000㎡", grade: "고급기술자 이상 1명" },
  { area: "15,000㎡ ~ 30,000㎡", grade: "중급기술자 이상 1명" },
  { area: "5,000㎡ ~ 15,000㎡", grade: "초급기술자 이상 1명" },
]

const PENALTIES = [
  { amount: "300만원", reason: "유지보수·관리자 미선임, 유지보수·관리기준 미준수, 점검 미기록·거짓기록" },
  { amount: "150만원", reason: "점검기록 미보존" },
  { amount: "100만원", reason: "점검기록 미제출, 선임·해임 신고 미이행" },
]

const OUTSOURCING_SCOPE = [
  "자격을 갖춘 정보통신기술자 배정 및 유지보수·관리자 선임 위탁",
  "위탁계약서·경력수첩 등 선임신고 서류 준비와 신고 절차 안내",
  "반기별 1회 이상 정기 점검 및 점검표 작성",
  "연 1회 이상 성능점검과 점검기록 5년 보존 관리",
  "광케이블·네트워크·CCTV 장애 발생 시 24시간 긴급 출동",
]

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mt-1 shrink-0"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function MaintenanceGuide() {
  return (
    <section id="maintenance-guide" className="scroll-mt-20 border-t border-hairline bg-canvas-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
          ICT MAINTENANCE
        </span>
        <h2 className="mt-5 break-keep text-[26px] font-light leading-[1.15] tracking-[-0.26px] text-ink sm:text-[32px] sm:tracking-[-0.64px]">
          정보통신설비 유지보수·관리 제도 안내
        </h2>
        <p className="mt-3 max-w-2xl break-keep text-base font-light leading-[1.4] text-ink-secondary">
          2025년 7월 19일부터 「정보통신공사업법」에 따라 연면적 5,000㎡ 이상 건축물의 관리주체는
          정보통신설비 유지보수·관리자를 선임해야 합니다. 직접 선임이 어렵다면 정보통신공사업자에게
          위탁하는 것으로 의무를 이행할 수 있습니다.
        </p>

        <div className="mt-10 rounded-lg border border-primary-subdued bg-canvas p-6 shadow-level-1 sm:p-8">
          <h3 className="break-keep text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink">
            정보통신설비 유지보수·관리자란?
          </h3>
          <p className="mt-3 max-w-3xl break-keep text-[15px] font-light leading-[1.6] text-ink-secondary">
            건축물에 설치된 구내통신선로설비·방송공동수신설비 등 정보통신설비가 고장나거나 방치되지
            않도록, 설비의 외관·기능·안전 상태를 주기적으로 점검하고 그 결과를 점검표에 기록·보존하는
            업무를 맡도록 법으로 정해진 책임자입니다. 건축물의 소유자 또는 관리주체가 아래 요건을 갖춘
            사람을 선임하거나, 정보통신공사업자에게 그 업무를 위탁해야 합니다.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {MANAGER_REQUIREMENTS.map((item) => (
              <div key={item.title} className="rounded-md bg-canvas-soft p-5">
                <p className="break-keep text-[15px] font-normal leading-[1.4] text-ink">
                  {item.title}
                </p>
                <p className="mt-2 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {OVERVIEW.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-hairline bg-canvas p-6 shadow-level-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-subdued hover:shadow-level-2"
            >
              <span className="inline-flex items-center rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
                {item.label}
              </span>
              <p
                className="mt-4 break-keep text-[22px] font-light leading-[1.2] tracking-[-0.22px] text-ink"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {item.value}
              </p>
              <p className="mt-2 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-level-1 sm:p-8">
            <h3 className="break-keep text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink">
              건축물 규모별 시행 일정
            </h3>
            <p className="mt-2 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
              기존 건축물은 규모에 따라 단계적으로 적용되며, 과태료 부과 시점도 다릅니다.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="pb-3 pr-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      연면적
                    </th>
                    <th className="pb-3 pr-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      제도 시행
                    </th>
                    <th className="pb-3 pr-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      과태료 부과
                    </th>
                    <th className="pb-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      상태
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontFeatureSettings: '"tnum"' }}>
                  {SCHEDULE.map((row) => {
                    const inForce = TODAY >= row.effectiveOn
                    return (
                      <tr key={row.area} className="border-b border-hairline last:border-0">
                        <td className="whitespace-nowrap py-3 pr-3 text-[15px] font-light text-ink">
                          {row.area}
                        </td>
                        <td className="whitespace-nowrap py-3 pr-3 text-[15px] font-light text-ink-secondary">
                          {row.effective}
                        </td>
                        <td className="whitespace-nowrap py-3 pr-3 text-[15px] font-light text-ink-secondary">
                          {row.penalty}
                        </td>
                        <td className="py-3">
                          <span
                            className={`inline-flex whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-normal tracking-[0.1px] ${
                              inForce
                                ? "bg-primary text-on-primary"
                                : "bg-canvas-soft text-ink-mute"
                            }`}
                          >
                            {inForce ? "시행 중" : "시행 예정"}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-level-1 sm:p-8">
            <h3 className="break-keep text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink">
              연면적별 선임 기술자 등급
            </h3>
            <p className="mt-2 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
              건축물 연면적에 따라 선임해야 하는 정보통신기술자의 등급이 달라집니다.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[320px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="pb-3 pr-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      연면적
                    </th>
                    <th className="pb-3 text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                      선임 기준
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontFeatureSettings: '"tnum"' }}>
                  {GRADES.map((row) => (
                    <tr key={row.area} className="border-b border-hairline last:border-0">
                      <td className="whitespace-nowrap py-3 pr-3 text-[15px] font-light text-ink">
                        {row.area}
                      </td>
                      <td className="whitespace-nowrap py-3 text-[15px] font-light text-ink-secondary">
                        {row.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
              위탁 요건을 충족하면 관리자 1명이 최대 5개 건축물까지 중복 선임될 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-hairline bg-canvas p-6 shadow-level-1 sm:p-8">
          <h3 className="break-keep text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink">
            미이행 시 과태료
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {PENALTIES.map((item) => (
              <div key={item.amount} className="rounded-md bg-canvas-soft p-5">
                <p
                  className="text-[22px] font-light leading-[1.2] tracking-[-0.22px] text-ruby"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  {item.amount}
                </p>
                <p className="mt-2 break-keep text-[13px] font-light leading-[1.5] text-ink-mute">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-lg bg-brand-dark-900 p-6 shadow-level-2 sm:p-8 lg:p-10">
          <span className="inline-flex items-center rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
            위탁으로 해결하세요
          </span>
          <h3 className="mt-5 max-w-2xl break-keep text-[22px] font-light leading-[1.2] tracking-[-0.22px] text-on-primary sm:text-[26px]">
            기술자를 직접 채용하지 않아도, 정보통신공사업자에게 위탁하면 선임한 것으로 인정됩니다
          </h3>
          <p className="mt-4 max-w-2xl break-keep text-[15px] font-light leading-[1.6] text-primary-subdued">
            「정보통신공사업법」은 관리주체가 유지보수·관리 업무를 정보통신공사업자에게 위탁한 경우
            유지보수·관리자를 선임한 것으로 보고 있습니다. 하누리광통신은 정보통신공사업 등록업체로서
            선임 위탁부터 정기 점검, 점검기록 관리, 장애 대응까지 한 번에 맡아 드립니다.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {OUTSOURCING_SCOPE.map((item) => (
              <li key={item} className="flex gap-2 break-keep text-[15px] font-light leading-[1.5] text-on-primary">
                <span className="text-primary-subdued">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-base font-normal text-on-primary shadow-level-1 transition-all duration-200 hover:-translate-y-px hover:bg-primary-deep hover:shadow-level-2 active:translate-y-0 active:bg-primary-press"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {PHONE}
            </a>
            <Link
              to="/quote"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-primary-subdued px-5 py-2.5 text-base font-normal text-on-primary transition-all duration-200 hover:-translate-y-px hover:bg-primary-subdued/15 active:translate-y-0"
            >
              무료 견적문의
            </Link>
            <p className="break-keep text-[13px] font-light leading-[1.5] text-primary-subdued">
              건축물 연면적만 알려주시면 대상 여부와 예상 비용을 안내해 드립니다.
            </p>
          </div>
        </div>

        <p className="mt-6 break-keep text-[13px] font-light leading-[1.6] text-ink-mute">
          근거: 「정보통신공사업법」 및 같은 법 시행령·시행규칙, 「정보통신설비 유지보수·관리기준」(과학기술정보통신부
          고시 제2025-48호). 본 안내는 이해를 돕기 위한 요약으로, 개별 건축물의 적용 여부와 신고 절차는 관할
          시·군·구청 정보통신 부서 확인이 필요합니다.
        </p>
      </div>
    </section>
  )
}
