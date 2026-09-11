import { useRef, useState } from "react"
import PageHeader from "../components/PageHeader"

// TODO: 실제 견적 문의를 받을 회사 이메일로 교체 필요.
const QUOTE_EMAIL = "hanurinetworks@example.com"
const PHONE = "043-878-8888"

// 견적 문의 전송 지점. 백엔드가 없는 동안은 방문자의 메일 앱을 열어 내용을 채워준다.
// 추후 Supabase 연동 시 이 함수 본문만 insert 호출로 교체하면 된다.
async function submitQuote(values: Record<FieldName, string>) {
  const body = [
    `기관/회사명: ${values.company}`,
    `담당자 성함: ${values.name}`,
    `연락처: ${values.contact}`,
    "",
    "견적의뢰 내용",
    values.message,
  ].join("\n")

  const subject = `[견적의뢰] ${values.company} - ${values.name}`
  window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type FieldName = "company" | "name" | "contact" | "message"

const FIELDS: {
  name: FieldName
  label: string
  placeholder: string
  type: "text" | "tel" | "textarea"
  autoComplete?: string
}[] = [
  {
    name: "company",
    label: "기관/회사명",
    placeholder: "예) OO종합병원",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "name",
    label: "담당자 성함",
    placeholder: "예) 홍길동",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "contact",
    label: "연락처",
    placeholder: "예) 010-1234-5678",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "message",
    label: "견적의뢰 내용",
    placeholder: "현장 위치, 공사 종류(광케이블·네트워크·CCTV 등), 희망 일정, 규모 등을 적어주시면 더 정확한 견적을 안내해 드립니다.",
    type: "textarea",
  },
]

const EMPTY_FORM: Record<FieldName, string> = { company: "", name: "", contact: "", message: "" }

// 한글 마지막 글자의 받침 유무에 따라 목적격 조사(을/를)를 고른다.
function withObjectParticle(word: string) {
  const code = word.charCodeAt(word.length - 1)
  const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3
  const hasFinalConsonant = isHangulSyllable && (code - 0xac00) % 28 !== 0
  return `${word}${hasFinalConsonant ? "을" : "를"}`
}

export default function QuotePage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [sent, setSent] = useState(false)
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>>({})

  function handleChange(name: FieldName, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const nextErrors: Partial<Record<FieldName, string>> = {}
    for (const field of FIELDS) {
      if (!form[field.name].trim()) {
        nextErrors[field.name] = `${withObjectParticle(field.label)} 입력해 주세요.`
      }
    }

    setErrors(nextErrors)

    const firstInvalid = FIELDS.find((field) => nextErrors[field.name])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid.name]?.focus()
      return
    }

    await submitQuote(form)
    setSent(true)
  }

  return (
    <div>
      <PageHeader
        eyebrow="REQUEST A QUOTE"
        title="견적의뢰"
        description="현장 상황을 알려주시면 담당자가 확인 후 연락드립니다. 급한 문의는 대표전화로 연락 주세요."
      />

      <section className="mx-auto max-w-[760px] px-6 py-16 lg:py-24">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-hairline bg-canvas p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)] lg:p-12"
        >
          <div className="space-y-6">
            {FIELDS.map((field) => {
              const error = errors[field.name]
              const inputClass = `w-full rounded-sm border bg-canvas px-3 py-2 text-[15px] font-light leading-[1.4] text-ink outline-none transition-colors placeholder:text-ink-mute/60 ${
                error ? "border-ruby" : "border-hairline-input focus:border-primary"
              }`

              return (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="flex items-center gap-1 text-[13px] font-normal tracking-[-0.39px] text-ink-mute"
                  >
                    {field.label}
                    <span className="text-ruby" aria-hidden="true">
                      *
                    </span>
                    <span className="sr-only">필수 항목</span>
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      ref={(el) => {
                        fieldRefs.current[field.name] = el
                      }}
                      value={form[field.name]}
                      onChange={(event) => handleChange(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      rows={7}
                      required
                      aria-invalid={!!error}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`mt-2 resize-y ${inputClass}`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      ref={(el) => {
                        fieldRefs.current[field.name] = el
                      }}
                      type={field.type}
                      inputMode={field.type === "tel" ? "tel" : undefined}
                      autoComplete={field.autoComplete}
                      value={form[field.name]}
                      onChange={(event) => handleChange(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      required
                      aria-invalid={!!error}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      className={`mt-2 ${inputClass}`}
                    />
                  )}

                  {error && (
                    <p
                      id={`${field.name}-error`}
                      className="mt-1.5 text-[13px] font-normal tracking-[-0.39px] text-ruby"
                    >
                      {error}
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-hairline pt-8">
            <button
              type="submit"
              className="rounded-full bg-primary px-4 py-2 text-base font-normal text-on-primary transition-colors hover:bg-primary-press"
            >
              문의 보내기
            </button>
            <p className="text-[13px] font-normal tracking-[-0.39px] text-ink-mute">
              전화 문의{" "}
              <a href={`tel:${PHONE}`} className="text-primary hover:text-primary-deep">
                {PHONE}
              </a>
            </p>
          </div>

          {sent && (
            <p className="mt-6 rounded-md bg-canvas-soft p-4 text-[15px] font-light leading-[1.4] text-ink-secondary">
              메일 작성 창이 열렸습니다. 내용을 확인하신 뒤 전송해 주세요. 창이 열리지 않으면 대표전화로
              연락 주시기 바랍니다.
            </p>
          )}
        </form>
      </section>
    </div>
  )
}
