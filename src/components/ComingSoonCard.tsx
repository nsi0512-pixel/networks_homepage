import type { ReactNode } from "react"

export default function ComingSoonCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
      <p className="break-keep text-[15px] font-light leading-[1.4] text-ink-mute">{children}</p>
    </div>
  )
}
