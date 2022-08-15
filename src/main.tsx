import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode> {/* 因为StrictMode会使得useEffect会执行两次 */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
