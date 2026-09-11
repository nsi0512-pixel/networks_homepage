export default function GreetingVisual() {
  return (
    <svg viewBox="0 0 360 360" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="greet-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1e54" />
          <stop offset="100%" stopColor="#0d253d" />
        </linearGradient>
        <linearGradient id="greet-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#665efd" stopOpacity="0" />
          <stop offset="50%" stopColor="#665efd" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#665efd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" fill="url(#greet-bg)" />
      {[70, 150, 230, 310].map((y, i) => (
        <path
          key={y}
          d={`M -20 ${y} C 90 ${y - 22 * (i % 2 === 0 ? 1 : -1)}, 270 ${y + 22 * (i % 2 === 0 ? 1 : -1)}, 380 ${y}`}
          fill="none"
          stroke="url(#greet-line)"
          strokeWidth="1.2"
        />
      ))}

      <g transform="translate(180,200)">
        <circle cx="0" cy="-30" r="52" fill="#12274f" stroke="#665efd" strokeWidth="2" />
        <path d="M-14 14h28l-6 22a4 4 0 0 1-4 3h-8a4 4 0 0 1-4-3z" fill="#273951" stroke="#533afd" strokeWidth="1.5" />
        <path
          d="M0 -66c-3-4-16 0-16 16 0 10 8 16 12 24"
          fill="none"
          stroke="#b9b9f9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M-8 -28c6 8 18 8 24 -4"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
          <path d="M0 -1c14 -28 6 -46 -10 -50" fill="none" />
          <path d="M0 -1c8 -20 -2 -32 -12 -34" fill="none" />
          <ellipse cx="-10" cy="-52" rx="8" ry="5" fill="#38bdf8" stroke="none" />
          <ellipse cx="-12" cy="-36" rx="6" ry="4" fill="#7dd3fc" stroke="none" />
        </g>
      </g>

      <g>
        <circle cx="70" cy="70" r="2.6" fill="#ea2261" />
        <circle cx="290" cy="90" r="2.6" fill="#f96bee" />
        <circle cx="60" cy="290" r="2.6" fill="#f96bee" />
        <circle cx="300" cy="280" r="2.6" fill="#ea2261" />
      </g>
    </svg>
  )
}
