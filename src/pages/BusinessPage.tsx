import PageHeader from "../components/PageHeader"
import ServiceCard from "../components/ServiceCard"

const SERVICES = [
  {
    variant: "fiber" as const,
    title: "광케이블 접속 및 포설",
    description: "정밀 융착접속과 최적 경로 설계로 손실 없는 광케이블을 포설합니다.",
  },
  {
    variant: "network" as const,
    title: "네트워크 공사",
    description: "건물 전체를 아우르는 안정적인 유무선 네트워크 인프라를 설계·구축합니다.",
  },
  {
    variant: "cctv" as const,
    title: "CCTV",
    description: "지능형 IP CCTV와 통합 관제 시스템으로 현장을 24시간 지켜봅니다.",
  },
  {
    variant: "maintenance" as const,
    title: "정보통신설비 유지보수",
    description: "정기 점검과 신속한 장애 대응으로 통신 설비를 안정적으로 유지합니다.",
  },
]

export default function BusinessPage() {
  return (
    <div>
      <PageHeader
        eyebrow="OUR BUSINESS"
        title="사업소개"
        description="공장·병원·학교 등 다양한 현장에 최적화된 광케이블 배선, 네트워크 통합, IP CCTV 및 관제 시스템 구축 사업을 소개합니다."
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
