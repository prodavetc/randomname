import React from 'react'
import ReactDOM from 'react-dom/client'
import RandomName from './components/RandomName.tsx' // Import the 'RandomName' component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RandomName /> 
  </React.StrictMode>,
)
