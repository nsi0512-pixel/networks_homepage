import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
  { label: "회사소개", to: "/about" },
  { label: "사업소개", to: "/business" },
  { label: "고객지원", to: "/support" },
]

const PHONE = "043-878-8888"

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#1c1e54" />
      <path d="M8 20c4.5-5.5 11.5-5.5 16 0" stroke="#665efd" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M11 23.2c2.7-3.2 7.3-3.2 10 0" stroke="#665efd" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="26.2" r="1.6" fill="#665efd" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex items-center gap-2.5 py-1.5 transition-opacity hover:opacity-70">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap text-[15px] font-normal tracking-tight text-ink">
              한누리광통신
            </span>
            <span className="whitespace-nowrap text-[10px] font-normal tracking-[0.1px] text-ink-mute-2">
              HANURI NETWORKS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[15px] font-light transition-colors hover:text-primary ${
                pathname === item.to ? "text-primary" : "text-ink-mute-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${PHONE}`}
            className="hidden text-[15px] font-light text-ink-secondary transition-colors hover:text-primary sm:block"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {PHONE}
          </a>
          <Link
            to="/quote"
            className="whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-[15px] font-normal text-on-primary shadow-level-1 transition-all duration-200 hover:-translate-y-px hover:bg-primary-deep hover:shadow-level-2 active:translate-y-0 active:bg-primary-press sm:text-base"
          >
            견적의뢰
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-canvas-soft lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-hairline bg-canvas lg:hidden"
      >
        <div className="mx-auto max-w-[1200px] px-5 py-2 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex min-h-11 items-center border-b border-hairline text-[15px] font-light transition-colors last:border-b-0 hover:text-primary ${
                pathname === item.to ? "text-primary" : "text-ink-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="flex min-h-11 items-center border-t border-hairline text-[15px] font-light text-ink-mute transition-colors hover:text-primary"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            대표전화 {PHONE}
          </a>
        </div>
      </nav>
    </header>
  )
}
