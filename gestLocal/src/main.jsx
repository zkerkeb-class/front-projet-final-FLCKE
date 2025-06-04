import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/i18n'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AuthProvider from './auth/AuthProvider'
import { ThemeProvider } from './config/ThemeContext'
import { I18nextProvider } from "react-i18next";
import i18next from './config/i18n'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </I18nextProvider>
  </StrictMode>,
)
