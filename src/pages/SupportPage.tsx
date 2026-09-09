import PageHeader from "../components/PageHeader"

export default function SupportPage() {
  return (
    <div>
      <PageHeader
        eyebrow="CUSTOMER SUPPORT"
        title="고객지원"
        description="견적 문의, A/S 및 기타 문의사항은 아래 연락처로 연락해 주세요."
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">대표전화</dt>
              <dd className="mt-1 text-[20px] font-light tracking-[-0.2px] text-ink">
                <a href="tel:043-878-8888" className="hover:text-primary">
                  043-878-8888
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">운영시간</dt>
              <dd className="mt-1 text-[20px] font-light tracking-[-0.2px] text-ink">
                평일 09:00 - 18:00
              </dd>
            </div>
          </dl>
          <p className="mt-8 break-keep text-[15px] font-light leading-[1.4] text-ink-mute">
            온라인 견적 문의 양식과 자주 묻는 질문(FAQ) 콘텐츠는 준비 중입니다.
          </p>
        </div>
      </div>
    </div>
  )
}
