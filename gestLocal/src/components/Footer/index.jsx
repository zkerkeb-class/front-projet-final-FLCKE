import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>GestionLocative</h2>
                    <p>Plateforme de gestion simple et efficace</p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/#hero">Accueil</Link></li>
                            <li><Link to="/#features">Fonctionnalités</Link></li>
                            <li><Link to="/login">Commencer</Link></li>
                            <li><Link to="/#about">A propos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 GestionLocative. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
