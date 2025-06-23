import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import ProfilForm from '../../components/ProfilForm'
import logo from "../../assets/img/logo/logo1vert.png"
import "./index.css"
import BtnPrimary from '../../components/ButtonPrimary'
import ProfilImg from '../../components/ProfilImg'
import { useTranslation } from 'react-i18next'
function Profil() {
    const { t } = useTranslation("common");
    return (
        <LayoutSecondForm >
            <div className='profil_container'>

                <h1 className='title'>{t('profil')}</h1>
                <div className='profil-data'>
                    <ProfilForm className="profilForm" />
                    <ProfilImg className='profilImg' />
                </div>
            </div>

        </LayoutSecondForm>
    )
}

export default Profil