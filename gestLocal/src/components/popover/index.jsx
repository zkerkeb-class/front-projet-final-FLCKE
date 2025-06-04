import React, { useRef, useState } from 'react'
import './index.css'
import { useTheme } from '../../config/ThemeContext';
import { lightTheme, darkTheme } from '../../config/theme';
function PopOver({ btnText, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const togglePopover = () => {
        setIsOpen(!isOpen);
    };
    const popoverRef = useRef(null);
    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    return (
        <div className="popover-container" onClick={handleClickOutside}>
            <button className="popover-button" onClick={() => { togglePopover() }}>{btnText}</button>
            {isOpen && <div >
                <div className="popover-overlay" onclick="togglePopover()"></div>
                <div className="popover" ref={popoverRef}>
                    <button className="popover-button-close" onClick={() => { togglePopover() }}><i className="fa-solid fa-xmark"></i></button>
                    <div className='theme-btn' >
                        <button onClick={() => toggleTheme()} className="navbar-theme-toggle">
                            {theme === lightTheme && <i className="fa-solid fa-sun"></i>}
                            {theme === darkTheme && <i className="fa-solid fa-moon"></i>}
                        </button>
                    </div>
                    <div className="popover-content">
                        {content}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default PopOver