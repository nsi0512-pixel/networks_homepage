import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null

    if (target) {
      // 페이지를 넘어오며 수천 px를 부드럽게 흘러내리면 어색하므로 즉시 이동시킨다.
      target.scrollIntoView({ behavior: "instant" })
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
