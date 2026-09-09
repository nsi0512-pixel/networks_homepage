import ComingSoonCard from "../components/ComingSoonCard"
import PageHeader from "../components/PageHeader"

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="ABOUT US"
        title="회사소개"
        description="한누리광통신은 광통신·네트워크·CCTV 통합 인프라 구축을 전문으로 하는 기업입니다. 공장·병원·학교 등 다양한 현장에서 축적한 시공 경험을 바탕으로 안정적인 통신 환경을 제공합니다."
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <ComingSoonCard>
          회사 연혁, 비전, 보유 인증 등 상세한 회사소개 콘텐츠는 준비 중입니다.
        </ComingSoonCard>
      </div>
    </div>
  )
}
