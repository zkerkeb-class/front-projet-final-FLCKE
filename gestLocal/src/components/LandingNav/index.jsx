import React, { useState } from 'react'
import BtnPrimary from '../ButtonPrimary'
import logo2 from '../../assets/img/logo/logo2vert.png'
import "./index.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../config/ThemeContext'
import BtnSecondary from '../ButtonSecondary'
function LandingNav() {
    const { logoutContext } = useAuth();
    const navigate = useNavigate();
    const [mobil, setMobil] = useState(false)
    const { t } = useTranslation("common");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const role = localStorage.getItem("role");
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="landingNav">
            <div className="landingNav-header">
                <img src={logo2} alt="logo" className='landingNav-logo' />
                <div className="navBar-mobil-btn">
                    <BtnSecondary text={<>
                        <i class="fa-solid fa-bars"></i>
                    </>} type="button" onClick={() => { setMobil(!mobil) }} />

                </div>
            </div>
            <div className="landingNav-menu">
                <ul className="landingNav-list">
                    <li className="landingNav-item">
                        <Link to={"/#home"} > <span className='text-on-off'> Home </span> </Link>
                    </li>
                    <li className="landingNav-item">
                        <Link to={"/#features"} >  <span className='text-on-off'> Features </span> </Link>
                    </li>
                    <li className="landingNav-item">
                        <Link to={"/#about"} >  <span className='text-on-off'> {t("dashboard")} </span> </Link>
                    </li>

                </ul>
            </div>
            {mobil && <div className="landingNav-menu-second">
                <ul className="landingNav-list">
                    <li className="landingNav-item">
                        <Link to={"/#home"} > <span className='text-on-off'> Home </span> </Link>
                    </li>
                    <li className="landingNav-item">
                        <Link to={"/#features"} >  <span className='text-on-off'> Features </span> </Link>
                    </li>
                    <li className="landingNav-item">
                        <Link to={"/#about"} >  <span className='text-on-off'> {t("dashboard")} </span> </Link>
                    </li>

                </ul>
            </div>}
            <div className="landingNav-logout">
                <BtnSecondary text={<>
                    <i class="fa-solid fa-user"></i>&nbsp;{t("login")}
                </>} type="button" onClick={() => { navigate("/login") }} />
                <BtnPrimary text={<>
                    <i class="fa-solid fa-plus"></i>&nbsp;{t("register")}
                </>} type="button" onClick={() => { navigate("/register") }} />
            </div>
            {mobil && <div className="landingNav-logout-second">
                <BtnSecondary text={<>
                    <i class="fa-solid fa-user"></i>&nbsp;{t("login")}
                </>} type="button" onClick={() => { navigate("/login") }} />
                <BtnPrimary text={<>
                    <i class="fa-solid fa-plus"></i>&nbsp;{t("register")}
                </>} type="button" onClick={() => { navigate("/register") }} />
            </div>}



        </div>
    )
}

export default LandingNav