import React from 'react'
import { useState } from 'react';
import './index.css'
// import { useState } from 'react';
import BtnPrimary from '../ButtonPrimary'
import BtnSecondary from '../ButtonSecondary';
import logo2 from '../../assets/img/logo/logo2vert.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import { useTheme } from '../../config/ThemeContext';
import { lightTheme, darkTheme } from '../../config/theme';
import { useTranslation } from "react-i18next";
function Navbar() {
    const { t } = useTranslation("common");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user, logoutContext } = useAuth();
    const role = localStorage.getItem("role");
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <div className="navbar">
                <div className="navbar-header">
                    <img src={logo2} alt="logo" className='navbar-logo' />
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            {role === "proprietaire" && <Link to={"/dashboard-pro"} ><i class="fa-solid fa-house"></i>  <span className='text-on-off'> {t("dashboard")} </span> </Link>}
                            {role === "locataire" && <Link to={"/dashboard-tenant"} ><i class="fa-solid fa-house"></i>  <span className='text-on-off'> {t("dashboard")} </span> </Link>}
                        </li>
                        <li className="navbar-item">
                            {role === "proprietaire" && <Link to={"/leases"}><i class="fa-solid fa-file-fragment"></i> <span className='text-on-off'>  {t("leases")} </span> </Link>}
                            {role === "locataire" && <Link to={"/leases"}><i class="fa-solid fa-file-fragment"></i> <span className='text-on-off'>  contrat </span> </Link>}


                        </li>
                        <li className="navbar-item">
                            {role === "proprietaire" && <Link to={"/properties"}><i class="fa-solid fa-building-user"></i> <span className='text-on-off'>{t("properties")} </span></Link>}
                        </li>
                        <li className="navbar-item">
                            <Link to={"/payement-tenant"}><i class="fa-solid fa-building-user"></i> <span className='text-on-off'>Paiements </span></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={"/profil"}><i class="fa-solid fa-building-user"></i> <span className='text-on-off'>Profil </span></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => toggleTheme()} className="navbar-theme-toggle">
                        {theme === lightTheme && <i className="fa-solid fa-sun"></i>}
                        {theme === darkTheme && <i className="fa-solid fa-moon"></i>}
                    </button>
                </div>
                {!isLoggedIn && <div className="navbar-logout">
                    {/* <button className="navbar-button"><i class="fa-solid fa-arrow-right-from-bracket"></i> Quitter</button> */}
                    <BtnSecondary text={t("logout")} type="button" onClick={() => { logoutContext() }} />
                </div>}


            </div>
        </div>
    )
}

export default Navbar