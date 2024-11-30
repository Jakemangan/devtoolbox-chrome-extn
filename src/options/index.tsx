import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Options'
import './index.css'
import { Provider } from '../components/ui/provider'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
