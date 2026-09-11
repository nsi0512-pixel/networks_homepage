import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import AboutPage from "./pages/AboutPage"
import BusinessPage from "./pages/BusinessPage"
import HomePage from "./pages/HomePage"
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
      </Routes>
    </div>
  )
}

export default App
