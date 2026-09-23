/**
 * Signature atmospheric gradient-mesh backdrop (DESIGN.md: "non-negotiable on marketing heroes").
 * Organic blurred blobs washed left-to-right: cream -> lemon -> lavender -> indigo -> ruby.
 * 아래쪽은 마스크로 흰 캔버스에 자연스럽게 녹아들어 섹션 경계가 칼로 자른 듯 보이지 않게 한다.
 */
export default function GradientMesh({
  className = "h-[420px] sm:h-[520px] lg:h-[640px]",
}: {
  className?: string
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 top-0 -z-10 w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)] ${className}`}
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="mesh-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="55" />
        </filter>
      </defs>
      <rect width="1440" height="560" fill="#f6f9fc" />
      <g filter="url(#mesh-blur)">
        <ellipse cx="20" cy="140" rx="300" ry="230" fill="#f5e9d4" opacity="0.85" />
        <ellipse cx="380" cy="40" rx="260" ry="200" fill="#9b6829" opacity="0.28" />
        <ellipse cx="640" cy="200" rx="330" ry="250" fill="#b9b9f9" opacity="0.7" />
        <ellipse cx="920" cy="50" rx="340" ry="250" fill="#665efd" opacity="0.55" />
        <ellipse cx="1150" cy="240" rx="320" ry="250" fill="#533afd" opacity="0.5" />
        <ellipse cx="1380" cy="110" rx="280" ry="230" fill="#ea2261" opacity="0.3" />
        <ellipse cx="1460" cy="360" rx="240" ry="220" fill="#f96bee" opacity="0.22" />
      </g>
    </svg>
  )
}
