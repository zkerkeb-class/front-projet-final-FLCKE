import React, { useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import Input from '../Input'
import { Link } from 'react-router-dom'
import BtnPrimary from '../ButtonPrimary'
function FormsAuth({ type }) {
    const [isLogin, setIsLogin] = useState(type === 'login')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    useEffect(() => {
        console.log(formData)
    })



    return (
        <div>
            <form className="form-container" onChange={handleChange}>
                <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
                {!isLogin && <Input type="text" name="fullName" placeholder="Nom" />}
                <Input type="email" name="email" placeholder="Email" />
                <Input type="password" name="password" placeholder="Mot de passe" />
                {!isLogin && <Input type="tel" name="phone" placeholder="Téléphone" />}

                <div className="register-link">
                    {isLogin ? (
                        <p>Pas encore de compte ? <Link to={"/register"}>Inscrivez-vous</Link></p>
                    ) : (
                        <p>Déjà un compte ? <Link to={"/login"}>Connectez-vous</Link></p>
                    )}
                </div>
                <BtnPrimary type="submit" text={ !isLogin? "Soumettre" : "Connecter"}/>
            </form>

        </div>
    )
}

export default FormsAuth