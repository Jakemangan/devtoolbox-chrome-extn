import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './Dashboard'
import '../popup/index.css'
import { Provider } from '@/components/ui/provider'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
)
