import React from 'react'
import './index.css'

function Input({ name, type, placeholder }) {
    return (

        <div className="input-container">
            <input type={type} name={name} placeholder={placeholder} className="input-field" required />
        </div>
    )
}

export default Input