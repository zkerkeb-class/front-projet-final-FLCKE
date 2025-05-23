import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
function BtnPrimary({ text, type, to }) {
    const navigate = useNavigate()
    const handleClick = () => {
        if (to) {
            navigate(to)
        }
    }
    return (
        <button className="btn" type={type} onClick={handleClick}  >
            {text} <i class="fa-solid fa-arrow-right"></i>
        </button>

    )
}

export default BtnPrimary
