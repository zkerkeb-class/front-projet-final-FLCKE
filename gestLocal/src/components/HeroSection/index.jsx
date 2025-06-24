import React from 'react';
import './index.css';
import heroImg from '../../assets/img/heroImg.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const { t } = useTranslation("common");
    const  navigate  = useNavigate()
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">
                    {t("hero_title_line1")} <br />
                    <span className="highlight">{t("hero_title_highlight")}</span> <br />
                    {t("hero_title_line2")}
                </h1>
                <p className="hero-subtitle">
                    {t("hero_subtitle")}
                </p>
                <button className="hero-btn" onClick={() => { navigate("/login") }}>{t("hero_btn")}</button>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt={t("hero_img_alt")} />
            </div>
        </section>
    );
}

export default HeroSection;