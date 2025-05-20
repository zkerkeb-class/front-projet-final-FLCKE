import React, { lazy } from 'react'
import FormsAuth from '../../components/Formulaire'
import LeftAuth from '../../components/LeftAuth'
import Layout from '../../Layout'
import './index.css'
function Register() {
  return (
    <Layout>
        <div className="register-container">
          <div className="left-auth-picture">
            <LeftAuth type="Register" />
          </div>
          <div className="right-auth-form">
            <FormsAuth type="Register" />
          </div>
        </div>

    </Layout>
    // <div>
    //   <div>
    //     <LeftAuth type="Register" />
    //   </div>  
    //   <div>
    //     <h2>Page d'inscription</h2>
    //     <FormsAuth type="Register" />
        
    //   </div>
    // </div>
  )
}

export default Register