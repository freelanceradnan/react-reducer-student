import StudentProvider from './contexts/StudentCon.jsx'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <App/>
  </StudentProvider>
)
