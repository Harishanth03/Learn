import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cart } from './FormSample/Cart'
import { UserDetails } from './FormSample/UserDetails'

// import App from './App.jsx'
// import './index.css'

// import { UserCard } from './components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDetails/>
  </StrictMode>,
)
