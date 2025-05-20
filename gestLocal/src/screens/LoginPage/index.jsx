import {React } from 'react'
import FormsAuth from '../../components/Formulaire'
import LeftAuth from '../../components/LeftAuth'
import './index.css'
function Login() {
    return (
        <div className="login-container">
                <div className="left-auth-picture">
                     <LeftAuth type="login" />
                </div>  
                <div className="right-auth-form">
                        <FormsAuth type="login" />

                  </div>    
        </div>
    )
}

export default Login