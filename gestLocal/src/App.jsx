import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './screens/RegisterPage'
import Login from './screens/loginPage'
import ProtectedRoute from './auth/ProtectedRoute'
import Dashbord from './screens/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Page d'accueil</h1>} />
        <Route path="/dashbord-pro" element={
          <ProtectedRoute>
            <Dashbord />
          </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </Router>
  )
}

export default App
