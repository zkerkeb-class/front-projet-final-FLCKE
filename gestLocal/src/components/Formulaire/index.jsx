import React, { use, useEffect } from 'react'
import './index.css'
import { useState } from 'react'
import Input from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import BtnPrimary from '../ButtonPrimary'
import { loginService, registerService } from '../../services/authServices'
import { useAuth } from '../../auth/AuthProvider'
import { useTranslation } from "react-i18next";

function FormsAuth({ type }) {
    const { t } = useTranslation("common");
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
                    if (response.user.role === "locataire") {

                        Navigate('/dashboard-tenant')
                    } else if (response.user.role === "proprietaire") {

                        Navigate('/dashboard-pro')
                    }
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
                <h2>{isLogin ? t("login") : t("register")}</h2>
                {!isLogin && <Input type="text" name="fullName" placeholder={t("fullName")} />}
                <Input type="email" name="email" placeholder={t("email")} />
                <Input type="password" name="password" placeholder={t("password")} />
                {!isLogin && <Input type="tel" name="phone" placeholder={t("phone")} />}

                <div className="register-link">
                    {isLogin ? (
                        <p>{t("no_account")} <Link to={"/register"}>{t("register_cta")}</Link></p>
                    ) : (
                        <p>{t("already_account")} <Link to={"/login"}>{t("login_cta")}</Link></p>
                    )}
                </div>
                <BtnPrimary type="submit" text={!isLogin ? t("submit") : t("login")} />
            </form>

        </div>
    )
}

export default FormsAuth