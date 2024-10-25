import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserForm } from './FormSample/UserForm'


// import App from './App.jsx'
// import './index.css'

// import { UserCard } from './components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserForm/>
  </StrictMode>,
)
