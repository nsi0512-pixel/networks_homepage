import emailPolicy from "./email-policy.txt?raw"
import privacy from "./privacy.txt?raw"
import terms from "./terms.txt?raw"

// 이메일무단수집거부는 기존 홈페이지(hanurinetworks.com/bbs/content.php)에서 그대로 옮겨 왔고,
// 개인정보처리방침·이용약관은 회원가입 없이 견적 문의만 받는 현재 사이트에 맞춰 새로 작성했다.
export const LEGAL_PAGES = {
  privacy: {
    path: "/privacy",
    eyebrow: "PRIVACY POLICY",
    title: "개인정보처리방침",
    description: "하누리광통신이 견적·상담 문의에서 받는 개인정보의 항목과 이용 목적, 보관 기간, 이용자의 권리를 안내합니다.",
    source: privacy,
  },
  terms: {
    path: "/terms",
    eyebrow: "TERMS OF SERVICE",
    title: "서비스이용약관",
    description: "하누리광통신 홈페이지 이용에 관한 조건과 절차, 회사와 이용자의 권리·의무를 안내합니다.",
    source: terms,
  },
  emailPolicy: {
    path: "/email-policy",
    eyebrow: "NO EMAIL COLLECTION",
    title: "이메일주소 무단수집거부",
    description: "본 웹사이트에 게시된 이메일 주소의 무단 수집을 거부합니다.",
    source: emailPolicy,
  },
} as const

export type LegalPageKey = keyof typeof LEGAL_PAGES
