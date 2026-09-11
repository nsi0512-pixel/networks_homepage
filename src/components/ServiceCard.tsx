import ServiceVisual, { type ServiceVisualVariant } from "./ServiceVisual"

interface ServiceCardProps {
  variant: ServiceVisualVariant
  title: string
  description: string
  tags: string[]
}

export default function ServiceCard({ variant, title, description, tags }: ServiceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-canvas shadow-[0_1px_3px_rgba(0,55,112,0.08)]">
      <div className="aspect-[4/3] w-full">
        <ServiceVisual variant={variant} />
      </div>
      <div className="p-8">
        <h3 className="text-[20px] font-light leading-[1.4] tracking-[-0.2px] text-ink">{title}</h3>
        <p className="mt-2 break-keep text-[15px] font-light leading-[1.4] text-ink-mute">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-subdued px-2 py-1 text-[10px] font-normal tracking-[0.1px] text-primary-deep"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
