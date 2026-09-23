import ServiceVisual, { type ServiceVisualVariant } from "./ServiceVisual"

interface ServiceCardProps {
  variant: ServiceVisualVariant
  title: string
  description: string
  tags: string[]
  image?: string
  imagePosition?: string
  index?: number
}

export default function ServiceCard({
  variant,
  title,
  description,
  tags,
  image,
  imagePosition = "center",
  index,
}: ServiceCardProps) {
  return (
    <div className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          ) : (
            <ServiceVisual variant={variant} />
          )}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark-900/25 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        {index !== undefined && (
          <span
            className="text-caption font-normal text-primary"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <h3 className="mt-2 break-keep text-heading-lg font-light text-ink">{title}</h3>
        <p className="mt-3 break-keep text-body-md font-light text-ink-mute">{description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
