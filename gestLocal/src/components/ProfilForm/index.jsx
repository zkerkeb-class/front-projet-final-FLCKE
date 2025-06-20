import React from 'react'
import Input from '../Input'
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../auth/AuthProvider';
import { Link } from 'react-router-dom';
import BtnSecondary from '../ButtonSecondary';
import BtnPrimary from '../ButtonPrimary';
import { useState } from 'react';
import { sendPasswordMail, updateUser } from '../../services/authServices';
import { useEffect } from 'react';
import "./index.css";
function ProfilForm() {
    const { t } = useTranslation("common");
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
    });
    useEffect(() => {
        setFormData({
            fullName: user?.fullName,
            email: user?.email,
            phone: user?.phone

        })
    }, [user])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        updateUser(user._id, formData)
            .then(() => {
                alert("reussite");
            }
            ).catch(() => {
                alert("Echec")
            })
    }
    const handleChangePassword = (e) => {
        e.preventDefault()
        sendPasswordMail(user?.email).then((result) => {
            alert(result.message)
        })
    }
    return (
        <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)} className='form-profil'>
            <label className='label-profil-form'>
                <h4>{t("fullName")}</h4>
                <Input type="text" name="fullName" defaultValue={user?.fullName} placeholder={t("fullName")} />
            </label>
            <label className='label-profil-form'>
                <h4>{t("email")}</h4>
                <Input type="email" name="email" defaultValue={user?.email} placeholder={t("email")} />
            </label>
            <label className='label-profil-form'>
                <h4>{t("password")}</h4>
                <Input type="password" defaultValue="xxxxxxxxxxx" placeholder={t("password")} />

                <Link to="/" className='password-link-changer ' onClick={(e) => handleChangePassword(e)}>Changer</Link>
            </label>
            <label className='label-profil-form' >
                <h4>{t("phone")}</h4>
                <Input type="tel" name="phone" defaultValue={user?.phone} placeholder={t("phone")} />
            </label>
            <div className='btn-Bottom'>
                <BtnSecondary text="Annuler" />
                <BtnPrimary text="Soumettre" type="btn" />
            </div>
        </form>
    )
}

export default ProfilForm