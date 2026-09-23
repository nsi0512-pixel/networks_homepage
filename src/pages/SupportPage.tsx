import { Link } from "react-router-dom"
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
    to: "/quote",
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

      <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-6 sm:pb-20 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CARDS.map((card) => {
            // 24시간 긴급 A/S는 card-pricing-featured처럼 다크 네이비로 뒤집어 강조한다.
            const featured = !card.href && !card.to
            return (
            <div
              key={card.label}
              className={`rounded-lg p-7 transition-all duration-200 hover:-translate-y-0.5 sm:p-8 ${
                featured
                  ? "bg-brand-dark-900 text-on-primary shadow-level-3"
                  : "card hover:border-primary-subdued/70 hover:shadow-level-2"
              }`}
            >
              <span
                className={
                  featured
                    ? "inline-flex items-center gap-1.5 rounded-full bg-on-primary/10 px-2.5 py-1.5 text-micro-cap font-normal text-primary-subdued ring-1 ring-on-primary/15"
                    : "tag"
                }
              >
                {featured && <span className="h-1.5 w-1.5 rounded-full bg-ruby" />}
                {card.label}
              </span>
              <p
                className={`mt-5 break-keep text-display-md font-light ${featured ? "text-on-primary" : "text-ink"}`}
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-primary"
                  >
                    {card.value}
                  </a>
                ) : card.to ? (
                  <Link
                    to={card.to}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-primary"
                  >
                    {card.value}
                  </Link>
                ) : (
                  <span className="inline-flex min-h-11 items-center">{card.value}</span>
                )}
              </p>
              <p className={`mt-2 break-keep text-caption font-normal ${featured ? "text-primary-subdued" : "text-ink-mute"}`}>
                {card.note}
              </p>
            </div>
            )
          })}
        </div>

        <div className="mt-20 lg:mt-28">
          <span className="eyebrow">
            DIRECTIONS
          </span>
          <h2 className="mt-4 break-keep text-display-md font-light text-ink sm:text-display-lg lg:text-display-xl">
            오시는길
          </h2>

          <div className="mt-10 overflow-hidden rounded-xl border border-hairline bg-canvas shadow-level-2">
            <iframe
              title="하누리광통신 위치 지도"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=ko&z=17&output=embed`}
              className="block h-[360px] w-full border-0 lg:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <dl className="grid gap-6 border-t border-hairline p-7 sm:grid-cols-2 sm:p-10">
              <div>
                <dt className="text-caption font-normal text-ink-mute">주소</dt>
                <dd className="mt-1.5 break-keep text-body-md font-light text-ink">
                  {ADDRESS}
                </dd>
              </div>
              <div>
                <dt className="text-caption font-normal text-ink-mute">대표번호</dt>
                <dd
                  className="mt-0.5 text-body-md font-light text-ink"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-primary"
                  >
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
                className="btn-secondary"
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
