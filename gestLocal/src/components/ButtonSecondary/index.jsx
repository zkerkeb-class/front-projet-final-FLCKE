import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
function BtnSecondary({ text, type, to }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(to)
    }

    return (
        <button className="btn-secondary" type={type} onClick={handleClick}  >
            {text} <i class="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default BtnSecondary