import PageHeader from "../components/PageHeader"
import ServiceCard from "../components/ServiceCard"

const SERVICES = [
  {
    variant: "fiber" as const,
    title: "광케이블 접속 및 포설",
    description:
      "단일모드·다중모드 광케이블 융착접속과 최적 배선 경로 설계로 손실 없는 고품질 광통신망을 구축합니다.",
    tags: ["광케이블 포설", "융착접속", "선로 인입"],
  },
  {
    variant: "network" as const,
    title: "네트워크 공사",
    description:
      "UTP·FTP 구조화 배선부터 스위치·랙 구성, 유무선 AP 설치까지 건물 전체를 아우르는 네트워크 인프라를 설계·시공합니다.",
    tags: ["구조화 배선", "스위치/랙 구성", "Wi-Fi AP 구축"],
  },
  {
    variant: "cctv" as const,
    title: "CCTV",
    description:
      "설계·시공부터 통합 관제실 구성까지, 지능형 IP CCTV로 24시간 실시간 감시와 원격 모니터링 체계를 구축합니다.",
    tags: ["IP CCTV 설치", "통합 관제실", "원격 모니터링"],
  },
  {
    variant: "maintenance" as const,
    title: "정보통신설비 유지보수",
    description:
      "정기 점검과 24시간 장애 출동 체계로 광케이블·네트워크·CCTV 설비를 안정적으로 유지관리합니다.",
    tags: ["정기 점검", "24시간 출동", "설비 개선/이설"],
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
