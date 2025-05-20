import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function LeftAuth({ type }) {
    const [isLogin, setIsLogin] = useState(type === 'login');

    return (
            <div className="left-auth-container">
                <h1>Logo</h1>
                <p>Bienvenue sur notre application de gestion locative !</p>
                {isLogin ? (
                    <div>

                        <p>Pas encore de compte? Inscrivez-vous pour commencer à gérer vos location.</p>
                        <Link to={"/register"}>Inscrivez-vous</Link>
                    </div>
                ) : (
                    <div>

                        <p>Déjà un compte? Connectez-vous pour commencer à gérer vos location. </p>
                        <Link to={"/login"}>Connectez-vous</Link>
                    </div>
                )}
                

            </div>
    )
}

export default LeftAuth