import React from 'react'
import LeftAuth from '../../components/LeftAuth'
import ResetPassword from '../../components/PasswordForm'
import Layout from '../../Layout'
import "./index.css"
function PasswordChanger() {
    return (
        <Layout>
            <div className="register-container">
                <div className="left-auth-picture">
                    <LeftAuth type="Register" />
                </div>
                <div className="right-auth-form">
                    <ResetPassword />
                </div>
            </div>

        </Layout>
    )
}

export default PasswordChanger