import React from 'react'
import './index.css'
import idea from '../../assets/img/idea-Photoroom.png'
import menIdea from '../../assets/img/menIdea-Photoroom.png'
import tobo from '../../assets/img/tobo.png'
import pocket from '../../assets/img/pocket.png'
import tobonne from '../../assets/img/trombone.png'
import { useTranslation } from "react-i18next";
import { useAuth } from '../../auth/AuthProvider';

function Banner() {
    const { t } = useTranslation("common");
    const { user } = useAuth();
    return (
        <section className="banner animate-slide-bottom">
            <div className="banner-content animate-slide-bottom">
                <h1>{t("welcome_user", { name: user.fullName })}</h1>
                <p>{t("welcome_user_text")}</p>
            </div>

            <div className="banner-image ">
                <img src={menIdea} alt="Banner" className='img-2' />
                <img src={tobonne} alt="Banner" className='img-tobonne' />
                <img src={tobo} alt="Banner" className='img-tobo' />
                <img src={tobo} alt="Banner" className='img-tobo-second' />
                <img src={pocket} alt="Banner" className='img-pocket' />
            </div>
        </section>

    )
}

export default Banner