import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Counter } from './Exersice/Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Counter/>
    
  </StrictMode>,
)
