import React, { useEffect, useState } from 'react'
import './index.css'
import CardResume from '../CardResume'
import { getUserLastPayements } from '../../services/payementServices'
import { useAuth } from '../../auth/AuthProvider'
import { format } from 'date-fns'
import Spinner from '../Spinner'
function RentList() {
    const [payement, setPayement] = useState([])
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()
    useEffect(() => {
        setLoading(true)
        getUserLastPayements(user._id, 3).then((result) => {
            setPayement(result)
            setLoading(false)
        }).catch((err) => {
            alert(err)
        })
    }, [user])
    return (
        <section className='rent-list-container' >
            <h1 className="rent-list-title animate-slide-bottom">Performance</h1>
            {!loading ?
                (<div className='rent-list animate-slide-bottom'>
                    {payement.map((element, index) => (
                        <CardResume
                            data={element.date && format(element.date, "dd/MM")}
                            text={element?.property?.rent_price} link="/dashboard-pro"
                            icon="fa-dollar-sign" type="rent" />
                    ))}
                </div>
                ) : (
                    <Spinner />)
            }

        </section>
    )
}

export default RentList