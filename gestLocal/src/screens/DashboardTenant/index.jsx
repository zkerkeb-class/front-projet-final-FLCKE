import React from 'react'
import RentList from '../../components/RentList'
import Banner from '../../components/Banner'
import LayoutSecondForm from '../../LayoutSecondForm'

function DashboardTenant() {
  return (
      <LayoutSecondForm>
          <Banner className="the-banner" />
          <RentList />
      </LayoutSecondForm>
  )
}

export default DashboardTenant