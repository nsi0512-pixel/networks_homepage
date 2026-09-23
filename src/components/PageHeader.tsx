import GradientMesh from "./GradientMesh"

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <GradientMesh className="h-full opacity-80" />
      <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-28">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 break-keep text-[34px] leading-[1.2] font-light tracking-[-0.8px] text-ink sm:text-display-xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl break-keep text-base leading-[1.75] font-light text-ink-secondary sm:text-body-lg">
          {description}
        </p>
      </div>
    </div>
  )
}
