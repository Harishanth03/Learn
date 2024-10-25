import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdviceApp } from './Exersice/Advice App/AdviceApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AdviceApp/>
    
  </StrictMode>,
)
