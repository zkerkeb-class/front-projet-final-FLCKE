import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import ProfilForm from '../../components/ProfilForm'
import logo from "../../assets/img/logo/logo1vert.png"
import "./index.css"
import BtnPrimary from '../../components/ButtonPrimary'
import ProfilImg from '../../components/ProfilImg'
function Profil() {
    return (
        <LayoutSecondForm >
            <h1 className='title'>Profil</h1>
            <div className='profil-data'>
                <ProfilForm  className="profilForm"/>
                <ProfilImg className='profilImg' />
            </div>

        </LayoutSecondForm>
    )
}

export default Profil