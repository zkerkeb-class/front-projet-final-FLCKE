import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../assets/img/logo/logo1blanc.png'
import BtnSecondary from '../ButtonSecondary'
function LeftAuth({ type }) {
    const [isLogin, setIsLogin] = useState(type === 'login');

    return (
        <div className="left-auth-container">
            <img src={logo} alt="Logo" className="logo" />
            <p>Bienvenue sur notre application de gestion locative !</p>
            {isLogin ? (
                <div>

                    <p>Pas encore de compte? Inscrivez-vous pour commencer à gérer vos location.</p>
                    <BtnSecondary to="/register" text="Inscrivez-vous" type="button" />
                </div>
            ) : (
                <div>

                    <p>Déjà un compte? Connectez-vous pour commencer à gérer vos location. </p>
                        <BtnSecondary to="/login" text="Connectez-vous" type="button"/>
                </div>
            )}


        </div>
    )
}

export default LeftAuth