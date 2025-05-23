import React from 'react'
import './index.css'
import Navbar from '../components/Navbar'
function LayoutSecondForm({ children }) {
    return (
        <div className="layout-page">
            <Navbar />
            {children}
        </div>
    )
}

export default LayoutSecondForm