import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { passwordChanger } from '../../services/authServices';
import BtnPrimary from '../ButtonPrimary';
import Input from '../Input';

const ResetPassword = () => {
    const { token } = useParams(); // Utilisation du token dans l'URL
    const [password, setPassword] = useState('');

    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(password)
        passwordChanger({ token, password }).then((result) => {
            alert(result.message)
            Navigate('/login')
        }).catch((error) => {
            alert(error);
        })
    }
    return (
        <form className="form-container" onSubmit={handleSubmit} onChange={(e) => setPassword(e.target.value)}>
            <h2>Réinitialisation</h2>
            <Input
                type="password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nouveau mot de passe"
            />
            <BtnPrimary type="submit" text="Réinitialiser le mot de passe" />
        </form>
    );
};

export default ResetPassword;
