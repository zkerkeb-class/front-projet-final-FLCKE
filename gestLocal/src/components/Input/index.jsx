import React from 'react'
import './index.css'

function Input({ name, type, placeholder }) {
    return (

        <div className="input-container">
            <input type={type} id="input" name={name} placeholder={placeholder} className="input-field" />
        </div>
    )
}

export default Input