export type ServiceVisualVariant = "fiber" | "network" | "cctv" | "maintenance"

function Backdrop() {
  return (
    <>
      <defs>
        <linearGradient id="svc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1e54" />
          <stop offset="100%" stopColor="#0d253d" />
        </linearGradient>
        <linearGradient id="svc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#665efd" stopOpacity="0" />
          <stop offset="50%" stopColor="#665efd" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#665efd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#svc-bg)" />
      {[50, 120, 190, 260].map((y, i) => (
        <path
          key={y}
          d={`M -20 ${y} C 100 ${y - 18 * (i % 2 === 0 ? 1 : -1)}, 300 ${y + 18 * (i % 2 === 0 ? 1 : -1)}, 420 ${y}`}
          fill="none"
          stroke="url(#svc-line)"
          strokeWidth="1.2"
        />
      ))}
    </>
  )
}

function AccentDots() {
  return (
    <g>
      <circle cx="60" cy="50" r="2.4" fill="#ea2261" />
      <circle cx="340" cy="60" r="2.4" fill="#f96bee" />
      <circle cx="50" cy="250" r="2.4" fill="#f96bee" />
      <circle cx="350" cy="240" r="2.4" fill="#ea2261" />
    </g>
  )
}

function FiberIcon() {
  return (
    <g transform="translate(200,150)">
      <circle cx="0" cy="0" r="52" fill="none" stroke="#273951" strokeWidth="10" />
      <circle cx="0" cy="0" r="52" fill="none" stroke="#533afd" strokeWidth="10" strokeDasharray="150 300" strokeLinecap="round" />
      <path d="M-58 0h-30M58 0h30" stroke="#665efd" strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="0" r="16" fill="#12274f" stroke="#665efd" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="5" fill="#38bdf8" />
    </g>
  )
}

function NetworkIcon() {
  return (
    <g transform="translate(200,150)">
      <rect x="-60" y="-55" width="120" height="110" rx="10" fill="#273951" stroke="#533afd" strokeWidth="1.5" />
      {[-30, -6, 18, 42].map((y) => (
        <g key={y}>
          <rect x="-46" y={y} width="92" height="14" rx="3" fill="#1c1e54" />
          <circle cx="-36" cy={y + 7} r="2.6" fill="#38bdf8" />
          <circle cx="-26" cy={y + 7} r="2.6" fill="#665efd" />
        </g>
      ))}
    </g>
  )
}

function CctvIcon() {
  return (
    <g transform="translate(200,150)">
      <rect x="-50" y="-30" width="100" height="70" rx="16" fill="#273951" stroke="#533afd" strokeWidth="1.5" />
      <circle cx="0" cy="-5" r="20" fill="#12274f" stroke="#665efd" strokeWidth="1.5" />
      <circle cx="0" cy="-5" r="8" fill="#665efd" />
      <rect x="-16" y="24" width="32" height="8" rx="4" fill="#533afd" />
      <path d="M-70 -50c8-10 20-10 28 0M62 -50c8-10 20-10 28 0" stroke="#b9b9f9" strokeWidth="1.6" fill="none" />
    </g>
  )
}

function MaintenanceIcon() {
  return (
    <g transform="translate(200,150)">
      <rect x="-55" y="-40" width="110" height="80" rx="10" fill="#273951" stroke="#533afd" strokeWidth="1.5" />
      <circle cx="-20" cy="0" r="14" fill="none" stroke="#38bdf8" strokeWidth="3" />
      <circle cx="14" cy="0" r="8" fill="none" stroke="#665efd" strokeWidth="3" />
      <path
        d="M28 34l16 16m-8-24 14 14a6 6 0 1 1-8 8L36 38a10 10 0 0 1-12-12l4-4a10 10 0 0 1 12 12z"
        fill="#b9b9f9"
        transform="translate(-4,-4) scale(0.9)"
      />
    </g>
  )
}

const ICONS: Record<ServiceVisualVariant, () => React.ReactNode> = {
  fiber: FiberIcon,
  network: NetworkIcon,
  cctv: CctvIcon,
  maintenance: MaintenanceIcon,
}

export default function ServiceVisual({ variant }: { variant: ServiceVisualVariant }) {
  const Icon = ICONS[variant]
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Backdrop />
      <Icon />
      <AccentDots />
    </svg>
  )
}
