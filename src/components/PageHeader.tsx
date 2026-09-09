interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-hairline bg-canvas-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep">
          {eyebrow}
        </span>
        <h1 className="mt-5 break-keep text-[32px] font-light leading-[1.1] tracking-[-0.64px] text-ink">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl break-keep text-base font-light leading-[1.4] text-ink-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}
