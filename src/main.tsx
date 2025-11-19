import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvitationApp } from './InvitationApp'
import './scss/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InvitationApp />
  </StrictMode>
)
