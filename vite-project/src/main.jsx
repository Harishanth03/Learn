import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { carses } from './components/Garage'
import { Garage } from './components/Garage'
// import App from './App.jsx'
// import './index.css'
// import { UserCard } from './components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Garage cars = {carses} />
  </StrictMode>,
)
