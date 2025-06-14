import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getOwnerPayements, getUserPayements } from '../../services/payementServices';
import { useAuth } from '../../auth/AuthProvider';
import CardList from '../../components/cardList';
import Table from '../../components/Table';
import LayoutSecondForm from '../../LayoutSecondForm';
function Rent() {
    const [payements, setPayement] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        if (user.role === "locataire") {
            getUserPayements(user?._id).then(
                (result) => {
                    setPayement(result);
                }
            ).catch((err) => {
                console.log(err)
            })
        } else if (user.role === "proprietaire") {
            getOwnerPayements(user?._id).then(
                (result) => {
                    setPayement(result);
                }
            ).catch((err) => {
                console.log(err)
            })
        }

    }, [user])
    return (
        <LayoutSecondForm>
            {payements && <CardList formData={payements} type="payement" />}
            <Table type="payement" data={payements} title="Payement" />
        </LayoutSecondForm>
    )
}

export default Rent