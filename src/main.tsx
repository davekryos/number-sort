import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { sdk } from '@farcaster/miniapp-sdk'
import './index.css'
import App from './App.tsx'
import { EditorPage } from './editor/EditorPage.tsx'

// Development: Load test utilities (accessible via window.gameTest)
import './engine/testUtils'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

void sdk.actions.ready().catch(() => {
  // Ignore when app is opened outside Mini App clients.
})
