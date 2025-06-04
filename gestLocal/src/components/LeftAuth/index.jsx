import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../assets/img/logo/logo1blanc.png'
import BtnSecondary from '../ButtonSecondary'
import { useTranslation } from "react-i18next";
function LeftAuth({ type }) {
    const { t } = useTranslation("common");
    const [isLogin, setIsLogin] = useState(type === 'login');

    return (
        <div className="left-auth-container">
            <img src={logo} alt="Logo" className="logo" />
            <p>{t("welcome")}</p>
            {isLogin ? (
                <div>

                    <p>{t("register_text")}</p>
                    <BtnSecondary to="/register" text={t("register_cta")} type="button" />
                </div>
            ) : (
                <div>

                    <p> {t("login_text")} </p>
                        <BtnSecondary to="/login" text={t("login_cta")} type="button"/>
                </div>
            )}


        </div>
    )
}

export default LeftAuth