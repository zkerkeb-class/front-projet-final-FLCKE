import React, { useEffect, useState } from 'react'
import './index.css'
import CardResume from '../CardResume'
import { getUserLastPayements } from '../../services/payementServices'
import { useAuth } from '../../auth/AuthProvider'
import { format } from 'date-fns'
function RentList() {
    const [payement, setPayement] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        getUserLastPayements(user._id, 3).then((result) => {
            setPayement(result)
            console.log(result)
        })
    }, [user])
    return (
        <section className='rent-list-container' >
            <h1 className="rent-list-title">Performance</h1>
            <div className='rent-list'>
                {
                    payement.map((element, index) => (
                        <CardResume
                            data={element.date && format(element.date,"dd/MM")}
                            text={element?.property?.rent_price} link="/dashboard-pro"
                            icon="fa-dollar-sign" type="rent" />
                    ))
                }
            </div>
        </section>
    )
}

export default RentList
