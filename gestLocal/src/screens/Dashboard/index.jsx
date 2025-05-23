import React from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../Layout'
import Badge from '../../components/Badge'
import Card from '../../components/Card'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
function Dashbord() {
    
  return (
    <LayoutSecondForm>
      <CardList formData={""} />
    </LayoutSecondForm>
  )
}

export default Dashbord
