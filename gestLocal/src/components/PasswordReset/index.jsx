import React, { useState } from 'react'
import BtnPrimary from '../ButtonPrimary'
import Input from '../Input'
import img from "../../assets/Fingerprint-bro.svg"
import { useTranslation } from 'react-i18next'
import { sendPasswordMail } from '../../services/authServices'

function PasswordReset({ onClose }) {
    const { t } = useTranslation('common')
    const [email, setEmail] = useState(null)
    const resetHandleChange = (e) => {
        const { value } = e.target
        console.log(value)
        setEmail(value)
    }
    const handleChangePassword = (e) => {
        e.preventDefault()
        sendPasswordMail(email).then((result) => {
            onClose()
            alert(result.message)
        }).catch((err) => {
            onClose()
            alert(err)
        })
    }

    return (
        <form className='reset-forms' onSubmit={(e) => { handleChangePassword(e) }} onChange={(e) => { resetHandleChange(e) }} >
            <img src={img} alt="" className='reset-forms-img' />
            <Input type="email" name="email" placeholder={t("email")} />
            <BtnPrimary type="submit" text={t("submit")} />
        </form>
    )
}

export default PasswordReset