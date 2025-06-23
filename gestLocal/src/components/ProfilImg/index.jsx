import React, { useEffect } from 'react'
import BtnPrimary from '../ButtonPrimary'
import logo from "../../assets/img/logo/logo1vert.png"
import "./index.css"
import { useState } from 'react'
import PictureUpload from '../PictureUpload'
import Modal from '../../components/Modal'
import { useTranslation } from "react-i18next";
import { getPicture } from '../../services/pictureServices'
import { useAuth } from '../../auth/AuthProvider'
function ProfilImg() {
  const [showModal, setShowModal] = useState(false)
  const [file, setFile] = useState(null)
  const { user } = useAuth()
  const { t } = useTranslation("common")
  const handleChange = () => {
    setShowModal(!showModal)
  }
  useEffect(() => {
    getPicture(user._id).then((result) => {
      setFile(result.imageUrl)
    }).catch((error) => {
      console.log(error);
    })
  }, [user])
  return (
    <div className='profil-img-container'>
      <div>
        < img src={file ? file : logo} className='profil-img' />
      </div>
      <BtnPrimary text={t("btn_modify_img")} onClick={() => { handleChange() }}></BtnPrimary>
      <Modal title={t("btn_modify_img")} isOpen={showModal} children={<PictureUpload onSuccess={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default ProfilImg