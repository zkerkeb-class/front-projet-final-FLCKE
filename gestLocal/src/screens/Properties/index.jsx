import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
import { useAuth } from '../../auth/AuthProvider'
import { useEffect } from 'react'
import { getMyProperties } from '../../services/propertiesServices'
import { useState } from 'react'
function Properties() {
    const [properties, setProperties] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        getMyProperties(user._id)
            .then((result) => {
                setProperties(result)
                console.log()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    , [user])
  return (
      <LayoutSecondForm>
         {properties && <CardList formData={properties} type="properties" />}
      </LayoutSecondForm>
  )
}

export default Properties