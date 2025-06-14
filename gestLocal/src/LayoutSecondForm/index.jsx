import React, { useContext, useRef } from 'react'
import './index.css'
import Navbar from '../components/Navbar'
import PopOver from '../components/popover'
import { useTranslation } from "react-i18next";
import BtnSecondary from '../components/ButtonSecondary';
function LayoutSecondForm({ children }) {
    const { t,i18n } = useTranslation("common");
   
    return (
        <div className="layout-page">
            <div className="background-fixed" />
            <Navbar className="navBar" />
            <div className='layout-content'>
                {children}
            <PopOver 
                btnText={(<i class="fa-solid fa-language"></i> ) } 
                content={<div className='popover-content'>
                    <BtnSecondary text={t("french")} type="button" onClick={() => i18n.changeLanguage('fr')}/>
                    <BtnSecondary text={t("english")} type="button" onClick={() => i18n.changeLanguage('en')}  />

                </div>}

            />
            </div>
        </div>
    )
}

export default LayoutSecondForm