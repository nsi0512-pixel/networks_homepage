# 하누리광통신 (HANURI NETWORKS)

공장·병원·학교 등 산업 및 공공시설을 위한 광통신·네트워크·CCTV 통합 인프라 구축 전문기업 홈페이지입니다.

**배포 사이트 (메인)**: https://hanurinet.vercel.app — Vercel, 클린 URL(`/about` 형태)
**배포 사이트 (보조)**: https://nsi0512-pixel.github.io/networks_homepage/ — GitHub Pages, 해시 URL(`/#/about` 형태)

(GitHub repo: https://github.com/nsi0512-pixel/networks_homepage — `main` 브랜치에 푸시하면
Vercel과 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)의 GitHub Actions가 각각 자동으로
빌드 후 두 곳 모두에 배포합니다)

> 두 호스팅을 동시에 지원하기 위해 빌드 타깃에 따라 라우터가 자동으로 바뀝니다
> ([vite.config.ts](vite.config.ts)의 `__USE_HASH_ROUTER__`). Vercel은 SPA 리라이트
> ([vercel.json](vercel.json))를 지원하므로 `BrowserRouter` + 루트 경로, GitHub Pages는
> 리라이트가 없으므로 `HashRouter` + `/networks_homepage/` 서브경로를 사용합니다.

## 기술 스택

- React 19 + TypeScript
- Vite
- Tailwind CSS v4

## 디자인 시스템

`../DESIGN.md` (Stripe 스타일 디자인 분석 문서)를 기준으로 합니다. 색상·타이포그래피·radius·spacing·그림자
토큰은 [src/index.css](src/index.css)의 `@theme` 블록에 그대로 이식되어 있습니다.

**앞으로 새 페이지/컴포넌트를 추가할 때도 반드시 이 토큰만 사용하세요.**
- 색상: `bg-primary`, `text-ink`, `bg-canvas-soft`, `border-hairline` 등 (임의의 색상 추가 금지)
- 공통 유틸리티([src/index.css](src/index.css)): `btn-primary` / `btn-secondary`(pill 버튼), `card` + `card-hover`
  (피처 카드), `tag`(pill-tag-soft), `eyebrow`(섹션 머리말 — 인디고 글자, 알약 아님). 새 요소는 이것부터 쓰고,
  같은 속성을 덮어써야 하면 유틸리티 대신 클래스를 직접 풀어 쓸 것(우선순위 충돌 방지)
- 타이포: `text-display-xxl/xl/lg/md`, `text-heading-lg/md`, `text-body-lg/md`, `text-caption`, `text-micro-cap`
  토큰 사용. 섹션 제목은 `text-display-md sm:text-display-lg lg:text-display-xl`, 본문 행간은 1.7 이상
- 카드: `rounded-lg`(12px), 큰 패널(히어로 카드·다크 밴드·폼)은 `rounded-xl`(16px)
- 폰트: 기본 300(thin), 버튼/캡션만 400. 헤드라인은 negative letter-spacing 유지
- 마케팅 히어로·페이지 헤더에는 `GradientMesh`(크림→라벤더→인디고→루비 톤 배경)를 항상 배치. 아래쪽은 마스크로
  흰 캔버스에 녹아든다
- 그림자는 `shadow-level-1`(기본) / `shadow-level-2`(호버·부상) / `shadow-level-3`(떠 있는 패널) 유틸리티 사용
- 색 리듬: 흰 캔버스 ↔ `bg-canvas-soft` 밴드 사이에 `bg-canvas-cream`(따뜻한 쉼표)과
  `bg-brand-dark-900`(강조 카드·다크 밴드)을 섞는다. 루비는 과태료·긴급처럼 경고 성격에만
- 호버 효과: 카드는 `card-hover`, 버튼은 `btn-*` 유틸리티에 포함. 모두 `transition-all duration-200`
- 모바일: 터치 영역 최소 44px(`min-h-11`), 섹션 여백은 `px-5 py-16 sm:px-6 sm:py-20 lg:py-28` 패턴,
  입력 필드는 iOS 확대 방지를 위해 기본 16px(`text-base sm:text-[15px]`)

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속.

빌드:

```bash
npm run build
```

## 진행 상황

- [x] 메인(소개) 페이지 — 히어로(좌측 메시지 + 우측 공사이력 카드) + 시공 이력 카드 섹션
- [x] 사업소개 페이지 — 4개 서비스 카드(설명 + 세부 항목 태그)
- [x] 회사소개 페이지 — 인사말(CEO 메시지) + 회사 정보. 연혁·보유 인증은 준비 중
- [ ] 고객지원 페이지 — 연락처만 있음, 견적문의 폼/FAQ 준비 중
- [x] 배포 자동화 — Vercel + GitHub Pages(GitHub Actions)
