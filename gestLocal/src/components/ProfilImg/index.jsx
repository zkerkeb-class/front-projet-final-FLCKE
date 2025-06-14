import React from 'react'
import BtnPrimary from '../ButtonPrimary'
import logo from "../../assets/img/logo/logo1vert.png"
import "./index.css"
function ProfilImg() {
  return (
      <div className='profil-img-container'>
            <div>
                <img src={logo} className='profil-img'/>
            </div>
          <BtnPrimary text="Modifier l'image"></BtnPrimary>
      </div>
  )
}

export default ProfilImg