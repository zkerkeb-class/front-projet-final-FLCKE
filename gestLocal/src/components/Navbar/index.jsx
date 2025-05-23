import React from 'react'
import { useState } from 'react';
import './index.css'
// import { useState } from 'react';
import BtnPrimary from '../ButtonPrimary'
import BtnSecondary from '../ButtonSecondary';
import logo2 from '../../assets/img/logo/logo2vert.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <div className="navbar">
                <div className="navbar-header">
                    <img src={logo2} alt="logo" className='navbar-logo' />
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-list">
                        <li className="navbar-item"><Link to={"/dashboard-pro"} ><i class="fa-solid fa-house"></i>  <span className='text-on-off'> Tableau de bord</span> </Link></li>
                        <li className="navbar-item"><Link to={"/leases"}><i class="fa-solid fa-file-fragment"></i> <span className='text-on-off'> Bails</span> </Link></li>
                        <li className="navbar-item"><Link to={"/properties"}><i class="fa-solid fa-building-user"></i> <span className='text-on-off'> Logements </span></Link></li>

                    </ul>
                </div>
                {!isLoggedIn && <div className="navbar-logout">
                    {/* <button className="navbar-button"><i class="fa-solid fa-arrow-right-from-bracket"></i> Quitter</button> */}
                    <BtnSecondary  text="Quitter" type="button" />
                </div>}
                {isLoggedIn && <div className="navbar-auth">
                    <BtnPrimary to='/login' text="Connexion" type="button" />
                    <BtnSecondary to='/register' text="S'inscrire" type="button" />
                </div>}

            </div>
        </div>
    )
}

export default Navbar