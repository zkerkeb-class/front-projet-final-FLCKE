import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logoFooter from "../../assets/img/logo/logo1blanc.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("common");

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logoFooter} alt="logo" />
                    <p>{t("footer_tagline")}</p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>{t("footer_nav_title")}</h4>
                        <ul>
                            <li><Link to="/#home">{t("footer_nav_home")}</Link></li>
                            <li><Link to="/#features">{t("footer_nav_features")}</Link></li>
                            <li><Link to="/login">{t("footer_nav_start")}</Link></li>
                            <li><Link to="/#about">{t("footer_nav_about")}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 GestionLocative. {t("footer_rights")}</p>
            </div>
        </footer>
    );
};

export default Footer;