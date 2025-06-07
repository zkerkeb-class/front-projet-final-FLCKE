import React from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../Layout'
import Badge from '../../components/Badge'
import Card from '../../components/Card'
import LayoutSecondForm from '../../LayoutSecondForm'
import Banner from '../../components/Banner'
import './index.css'
import CardResume from '../../components/CardResume'
import CardResumeList from '../../components/CardResumeList'
import { Link } from 'react-router-dom'
function Dashbord() {

  return (
    <LayoutSecondForm>
      <Banner className="the-banner" />
      <CardResumeList />
      <Link to="/dashboard-tenant" > tenant</Link>
    </LayoutSecondForm>
  )
}

export default Dashbord
