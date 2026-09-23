type Block =
  | { type: "chapter" | "heading" | "paragraph"; text: string }
  | { type: "bullets" | "numbered" | "toc"; items: string[] }

const CHAPTER = /^제\s*\d+\s*장/
const ARTICLE = /^제\s*\d+\s*조/
const HANGUL_ITEM = /^[가-하]\.\s/
const NUMBERED = /^\d+\.\s/
const BULLET = /^-\s*/

// 기존 홈페이지에서 옮겨 온 약관 원문(평문)을 제목·문단·목록으로 나눈다.
// 원문 문구는 손대지 않고, 줄의 모양만 보고 구조를 추정한다.
function parse(source: string): Block[] {
  const rawLines = source.split(/\r?\n/)
  const lines = rawLines.map((line) => line.replace(/^[\s　]+|\s+$/g, ""))
  const blocks: Block[] = []

  lines.forEach((line, index) => {
    if (!line) return
    const last = blocks[blocks.length - 1]

    if (CHAPTER.test(line)) {
      blocks.push({ type: "chapter", text: line })
    } else if (ARTICLE.test(line)) {
      blocks.push({ type: "heading", text: line })
    } else if (HANGUL_ITEM.test(line)) {
      // '가. 나. 다.'가 연달아 나오면 목차, 한 줄만 있으면 절 제목이다.
      const prev = lines[index - 1] ?? ""
      const next = lines[index + 1] ?? ""
      if (last?.type === "toc" && HANGUL_ITEM.test(prev)) last.items.push(line)
      else if (HANGUL_ITEM.test(next)) blocks.push({ type: "toc", items: [line] })
      else blocks.push({ type: "heading", text: line })
    } else if (BULLET.test(line)) {
      const text = line.replace(BULLET, "")
      if (last?.type === "bullets") last.items.push(text)
      else blocks.push({ type: "bullets", items: [text] })
    } else if (NUMBERED.test(line)) {
      const text = line.replace(NUMBERED, "")
      if (last?.type === "numbered") last.items.push(text)
      else blocks.push({ type: "numbered", items: [text] })
    } else if (last?.type === "numbered" && /^　/.test(rawLines[index])) {
      // 전각 공백으로 들여 쓴 줄은 앞 번호 항목의 이어지는 줄이다.
      last.items[last.items.length - 1] += ` ${line}`
    } else {
      blocks.push({ type: "paragraph", text: line })
    }
  })

  return blocks
}

const LIST_ITEM = "break-keep text-body-md font-light text-ink-secondary"

export default function LegalDocument({ source }: { source: string }) {
  const blocks = parse(source)

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "chapter":
            return (
              <h2
                key={index}
                className="border-t border-hairline pt-10 text-heading-lg font-light text-ink first:border-t-0 first:pt-0 [&:not(:first-child)]:mt-12"
              >
                {block.text}
              </h2>
            )
          case "heading":
            return (
              <h3 key={index} className="pt-6 text-[17px] font-normal leading-[1.5] text-ink first:pt-0">
                {block.text}
              </h3>
            )
          case "toc":
            return (
              <ol
                key={index}
                className="gap-x-10 space-y-2 rounded-lg bg-canvas-soft p-6 sm:columns-2 sm:p-8"
              >
                {block.items.map((item) => (
                  <li key={item} className="break-inside-avoid break-keep text-caption font-normal text-ink-secondary">
                    {item}
                  </li>
                ))}
              </ol>
            )
          case "bullets":
            return (
              <ul key={index} className="space-y-2 pl-1">
                {block.items.map((item) => (
                  <li key={item} className={`flex gap-3 ${LIST_ITEM}`}>
                    <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-primary-soft" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "numbered":
            return (
              <ol key={index} className="space-y-2">
                {block.items.map((item, itemIndex) => (
                  <li key={item} className={`flex gap-3 ${LIST_ITEM}`}>
                    <span
                      className="w-5 shrink-0 text-primary"
                      style={{ fontFeatureSettings: '"tnum"' }}
                      aria-hidden="true"
                    >
                      {itemIndex + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )
          default:
            return (
              <p key={index} className="break-keep text-body-md font-light text-ink-secondary">
                {block.text}
              </p>
            )
        }
      })}
    </div>
  )
}
