import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { PrimerComponente } from './PrimerComponente.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <PrimerComponente/>
  </StrictMode>,
)
