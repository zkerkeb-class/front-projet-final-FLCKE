import React from 'react'
import './index.css'
function BtnPrimary
    ({ text, type }) {
    return (
        <button className="btn" type={type} >
            {text} <i class="fa-solid fa-arrow-right"></i>
        </button>

    )
}

export default BtnPrimary
