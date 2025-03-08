import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Home from './templates/Home/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
