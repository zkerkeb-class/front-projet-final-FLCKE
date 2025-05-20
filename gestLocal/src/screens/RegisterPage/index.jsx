import React from 'react'
import FormsAuth from '../../components/Formulaire'
import LeftAuth from '../../components/LeftAuth'
function Register() {
  return (
    <div>
      <div>
        <LeftAuth type="Register" />
      </div>  
      <div>
        <h2>Page d'inscription</h2>
        <FormsAuth type="Register" />
        
      </div>
    </div>
  )
}

export default Register