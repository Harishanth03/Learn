import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RegisterForm } from './FormSample/RegisterForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RegisterForm/>
    
  </StrictMode>,
)
