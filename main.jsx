// Import necessary React dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import global styles
import './index.css'

// Import our main App component
import App from './App.jsx'

// Create and render our React app
// StrictMode helps catch potential problems
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
