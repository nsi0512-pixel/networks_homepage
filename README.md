# 한누리광통신 (HANURI NETWORKS)

공장·병원·학교 등 산업 및 공공시설을 위한 광통신·네트워크·CCTV 통합 인프라 구축 전문기업 홈페이지입니다.

**배포 사이트 (메인)**: https://hanurinetworks.vercel.app — Vercel, 클린 URL(`/about` 형태)
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
- 버튼: 항상 pill 형태(`rounded-full`), padding `py-2 px-4`
- 카드: `rounded-lg`(12px), `border-hairline`, 그림자는 `shadow-[0_1px_3px_rgba(0,55,112,0.08)]`(level 1) 또는
  `shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)]`(level 2)
- 폰트: 기본 300(thin), 버튼/캡션만 400. 헤드라인은 negative letter-spacing 유지
- 마케팅 히어로에는 `GradientMesh` 컴포넌트(크림→라벤더→인디고→루비 톤 배경)를 항상 배치

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
