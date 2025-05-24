import React, { use, useEffect, useState } from 'react'
import './index.css'
function Select({ list, name, defaultValue }) {
    const [selectedValue, setSelectedValue] = useState(list[0].value);
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }
    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <div className='select-container'>
            <select className="select-field" value={selectedValue} name={name} onChange={(e) => handleChange(e)} >
                {list.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label} </option>
                ))}
            </select>

        </div>
    )
}

export default Select