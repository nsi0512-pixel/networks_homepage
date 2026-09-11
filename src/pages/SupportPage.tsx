import PageHeader from "../components/PageHeader"

const ADDRESS = "충북 음성군 음성읍 반기문로 45-15 상가동1층 101호"
const MAP_QUERY = "충북 음성군 음성읍 반기문로 45-15"
const PHONE = "043-878-8888"

const CONTACT_CARDS = [
  {
    label: "대표전화",
    value: PHONE,
    href: `tel:${PHONE}`,
    note: "평일 09:00 - 18:00 (점심 12:00 - 13:00)",
  },
  {
    label: "긴급 A/S",
    value: "24시간 접수",
    note: "주말·공휴일 통신 장애 긴급 대응",
  },
  {
    label: "견적문의",
    value: "현장 방문 무료 견적",
    note: "현장 여건 확인 후 정확한 견적을 안내드립니다",
  },
]

const MAP_LINKS = [
  { label: "카카오맵에서 보기", href: `https://map.kakao.com/?q=${encodeURIComponent(MAP_QUERY)}` },
  { label: "네이버지도에서 보기", href: `https://map.naver.com/p/search/${encodeURIComponent(MAP_QUERY)}` },
]

export default function SupportPage() {
  return (
    <div>
      <PageHeader
        eyebrow="CUSTOMER SUPPORT"
        title="고객지원"
        description="견적 문의, A/S 및 기타 문의사항은 아래 연락처로 연락해 주세요. 현장 상황에 맞는 최적의 시공 방안을 안내해 드립니다."
      />

      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
            >
              <span className="inline-flex items-center rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
                {card.label}
              </span>
              <p
                className="mt-4 break-keep text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {card.href ? (
                  <a href={card.href} className="hover:text-primary">
                    {card.value}
                  </a>
                ) : (
                  card.value
                )}
              </p>
              <p className="mt-2 break-keep text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
                {card.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <span className="inline-flex items-center rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
            DIRECTIONS
          </span>
          <h2 className="mt-5 break-keep text-[26px] font-light leading-[1.15] tracking-[-0.26px] text-ink sm:text-[32px] sm:tracking-[-0.64px]">
            오시는길
          </h2>

          <div className="mt-8 overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
            <iframe
              title="한누리광통신 위치 지도"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=ko&z=17&output=embed`}
              className="block h-[360px] w-full border-0 lg:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <dl className="grid gap-6 border-t border-hairline p-8 sm:grid-cols-2">
              <div>
                <dt className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">주소</dt>
                <dd className="mt-1 break-keep text-[15px] font-light leading-[1.4] text-ink">
                  {ADDRESS}
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">대표번호</dt>
                <dd
                  className="mt-1 text-[15px] font-light leading-[1.4] text-ink"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  <a href={`tel:${PHONE}`} className="hover:text-primary">
                    {PHONE}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {MAP_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary bg-canvas px-4 py-2 text-base font-normal text-primary transition-colors hover:bg-primary-subdued/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
