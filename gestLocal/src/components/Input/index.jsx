import React, { useEffect, useState } from 'react'
import './index.css'
// import { useTranslation } from "react-i18next";

function Input({ name, type, placeholder, defaultValue }) {
    const [value, setValue] = useState("")
    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    },[defaultValue])
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (

        <div className="input-container">
            <input type={type} name={name} value={value} placeholder={placeholder} className="input-field" onChange={(e)=> handleChange(e)} required />
        </div>
    )
}

export default Input