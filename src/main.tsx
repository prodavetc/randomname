import React from 'react'
import ReactDOM from 'react-dom/client'
import RandomName from './components/RandomName.tsx' // Import the 'RandomName' component
import './index.css'
import StatCounter from './utils/Statcounter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RandomName />
    <StatCounter sc_project={12988526} sc_security="a618bf39" />
  </React.StrictMode>,
)
