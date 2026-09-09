import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// HashRouter is used because GitHub Pages is static hosting with no
// server-side rewrite rules for deep links (e.g. /about) on refresh.
// Switch back to BrowserRouter when moving to a host that supports SPA rewrites.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
