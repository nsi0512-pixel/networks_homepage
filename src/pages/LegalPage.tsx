import LegalDocument from "../components/LegalDocument"
import PageHeader from "../components/PageHeader"
import { LEGAL_PAGES, type LegalPageKey } from "../content/legal"

export default function LegalPage({ page }: { page: LegalPageKey }) {
  const { eyebrow, title, description, source } = LEGAL_PAGES[page]

  return (
    <div>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-[860px] px-5 pb-16 sm:px-6 sm:pb-20 lg:pb-28">
        <div className="rounded-xl border border-hairline bg-canvas p-7 shadow-level-2 sm:p-10 lg:p-14">
          <LegalDocument source={source} />
        </div>
      </section>
    </div>
  )
}
