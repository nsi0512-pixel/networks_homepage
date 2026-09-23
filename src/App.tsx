import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import { LEGAL_PAGES } from "./content/legal"
import AboutPage from "./pages/AboutPage"
import BusinessPage from "./pages/BusinessPage"
import HomePage from "./pages/HomePage"
import LegalPage from "./pages/LegalPage"
import QuotePage from "./pages/QuotePage"
import SupportPage from "./pages/SupportPage"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path={LEGAL_PAGES.privacy.path} element={<LegalPage page="privacy" />} />
        <Route path={LEGAL_PAGES.terms.path} element={<LegalPage page="terms" />} />
        <Route path={LEGAL_PAGES.emailPolicy.path} element={<LegalPage page="emailPolicy" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
