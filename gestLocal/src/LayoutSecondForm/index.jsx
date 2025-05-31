import React, { useContext } from 'react'
import './index.css'
import Navbar from '../components/Navbar'
function LayoutSecondForm({ children }) {
    return (
        <div className="layout-page">
            <Navbar className="navBar" />
            <div className='layout-content'>
                {children}
            </div>
        </div>
    )
}

export default LayoutSecondForm