import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('%c🚀 Hello from the Console! 🚀', 'color: #6d28d9; font-size: 2rem; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cI see you are inspecting the code. You have good taste! 😉', 'color: #a0a0b0; font-size: 1.2rem;');
console.log('Check out the repo at https://github.com/saberprivateer');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
