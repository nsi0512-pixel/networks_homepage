import { Link } from "react-router-dom"
import { LEGAL_PAGES } from "../content/legal"
import LogoMark from "./LogoMark"

const PHONE = "043-878-8888"
const ADDRESS = "충북 음성군 음성읍 반기문로 45-15 상가동1층 101호"

const LINK_GROUPS = [
  {
    title: "회사",
    links: [
      { label: "회사소개", to: "/about" },
      { label: "시공 이력", to: "/#project-history" },
    ],
  },
  {
    title: "사업",
    links: [
      { label: "사업소개", to: "/business" },
      { label: "유지보수 제도 안내", to: "/business#maintenance-guide" },
    ],
  },
  {
    title: "고객지원",
    links: [
      { label: "견적의뢰", to: "/quote" },
      { label: "오시는길", to: "/support" },
    ],
  },
]

// 개인정보 처리 관련 링크는 관행대로 굵게 강조한다.
const POLICY_LINKS = [
  { label: LEGAL_PAGES.privacy.title, to: LEGAL_PAGES.privacy.path, emphasis: true },
  { label: LEGAL_PAGES.terms.title, to: LEGAL_PAGES.terms.path, emphasis: false },
  { label: LEGAL_PAGES.emailPolicy.title, to: LEGAL_PAGES.emailPolicy.path, emphasis: false },
]

const LINK_CLASS =
  "inline-flex min-h-9 items-center text-[14px] font-light text-ink-secondary transition-colors hover:text-primary"

// footer-light (DESIGN.md): 흰 캔버스, ink-mute 캡션, 64px 24px 여백, 링크 그룹 + 하단 법적 고지 줄.
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 sm:px-6 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-70">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="whitespace-nowrap text-[15px] font-normal tracking-tight text-ink">
                  하누리광통신
                </span>
                <span className="mt-1 whitespace-nowrap text-[10px] font-normal tracking-[0.1px] text-ink-mute-2">
                  HANURI NETWORKS
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm break-keep text-caption font-light text-ink-mute">
              산업·공공시설을 위한 광통신·네트워크·CCTV 통합 인프라 구축 및 정보통신설비 유지보수 전문기업
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-6 inline-flex min-h-11 items-center text-display-md font-light text-ink transition-colors hover:text-primary"
              style={{ fontFeatureSettings: '"tnum"' }}
            >
              {PHONE}
            </a>
            <p className="flex items-center gap-2 text-caption font-normal text-ink-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-ruby" aria-hidden="true" />
              긴급 A/S 24시간 접수
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-caption font-normal text-ink">{group.title}</p>
                <ul className="mt-3 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <nav
          aria-label="약관 및 정책"
          className="mt-14 flex flex-wrap gap-x-6 gap-y-1 border-t border-hairline pt-6"
        >
          {POLICY_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`inline-flex min-h-9 items-center text-caption transition-colors hover:text-primary ${
                link.emphasis ? "font-normal text-ink" : "font-light text-ink-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex flex-col gap-3 text-caption font-light text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p className="break-keep">
            하누리광통신 · 대표 문상필 · {ADDRESS}
          </p>
          <p style={{ fontFeatureSettings: '"tnum"' }}>© {new Date().getFullYear()} HANURI NETWORKS</p>
        </div>
      </div>
    </footer>
  )
}
