import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './Dashboard'
import '../popup/index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)