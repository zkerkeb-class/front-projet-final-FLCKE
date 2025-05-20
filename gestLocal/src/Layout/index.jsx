import React from 'react'
import './index.css'
function Layout({ children }) {
    return (
            <div className="login-page">
                {children}
            </div>
    )
}

export default Layout