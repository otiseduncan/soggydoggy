import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SoggyDoggyWebsiteMockup from './SoggyDoggyWebsiteMockup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SoggyDoggyWebsiteMockup />
  </StrictMode>,
)
