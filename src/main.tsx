import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

declare const __USE_HASH_ROUTER__: boolean

// GitHub Pages is static hosting with no server-side rewrite rules for deep
// links, so that target needs HashRouter. Vercel supports SPA rewrites
// (see vercel.json), so it uses BrowserRouter for clean URLs.
const Router = __USE_HASH_ROUTER__ ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
