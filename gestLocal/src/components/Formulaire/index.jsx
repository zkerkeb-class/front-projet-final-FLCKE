import React, { use, useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import Input from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import BtnPrimary from '../ButtonPrimary'
import { loginService, registerService } from '../../services/authServices'
import { useAuth } from '../../auth/AuthProvider'
function FormsAuth({ type }) {
    const [isLogin, setIsLogin] = useState(type === 'login')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        role: 'locataire'
    })
    const { loginContext } = useAuth();
    const Navigate = useNavigate();
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
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isLogin) {
            // Handle login
            console.log('Login data:', formData)
            loginService(formData)
                .then((response) => {
                    console.log('Login successful:', response)
                    loginContext(response?.user, response?.token)
                    Navigate('/dashboard-pro')
                })
                .catch((error) => {
                    console.error('Login error:', error)
                })
        } else {
            // Handle registration
            console.log('Registration data:', formData)
            registerService(formData)
                .then((response) => {
                    Navigate('/login')
                })
                .catch((error) => {
                    console.error('Registration error:', error)
                })
        }
    }


    return (
        <div>
            <form className="form-container" onChange={handleChange} onSubmit={handleSubmit}>
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
                <BtnPrimary type="submit" text={!isLogin ? "Soumettre" : "Connecter"} />
            </form>

        </div>
    )
}

export default FormsAuth