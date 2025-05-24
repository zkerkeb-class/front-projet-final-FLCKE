import React from 'react'
import './index.css'
function Modal({ isOpen, onClose, title, children }) {
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{title}</h2>
                            <button className="close-button" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal