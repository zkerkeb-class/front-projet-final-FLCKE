import { React } from 'react'
import FormsAuth from '../../components/Formulaire'
import LeftAuth from '../../components/LeftAuth'
import Layout from '../../Layout'
import './index.css'
function Login() {
    return (
        <Layout>
            <div className="login-container">
                <div className="right-auth-form">
                    <FormsAuth type="login" />
                </div>
                <div className="left-auth-picture">
                    <LeftAuth type="login" />
                </div>

            </div>
        </Layout>

    )
}

export default Login