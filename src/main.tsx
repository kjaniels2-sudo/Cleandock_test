import { createRoot } from 'react-dom/client'
import './shadcn.css'
import App from './App'
import './i18n' // Initialize i18n

const root = createRoot(document.getElementById('app')!)
root.render(<App />)
