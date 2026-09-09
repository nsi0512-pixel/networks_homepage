import { Link } from "react-router-dom"

const NAV_ITEMS = [
  { label: "회사소개", to: "/about" },
  { label: "사업소개", to: "/business" },
  { label: "고객지원", to: "/support" },
]

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
  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-normal tracking-tight text-ink">한누리광통신</span>
            <span className="text-[10px] font-normal tracking-[0.1px] text-ink-mute-2">HANURI NETWORKS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[15px] font-light text-ink-mute-2 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:043-878-8888"
            className="hidden text-[15px] font-light text-ink-secondary sm:block"
          >
            043-878-8888
          </a>
          <a
            href="#quote"
            className="rounded-full bg-primary px-4 py-2 text-base font-normal text-on-primary transition-colors hover:bg-primary-press"
          >
            견적의뢰
          </a>
        </div>
      </div>
    </header>
  )
}
