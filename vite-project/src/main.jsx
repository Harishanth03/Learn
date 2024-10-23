import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserCard } from './UserCard'
// import App from './App.jsx'
import './index.css'
import { MapMethod } from './components/MapMethod'
import { MapFunction } from './components/MapFunction'
// import { UserCard } from './components/UserCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>,
)
