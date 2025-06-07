import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getUserPayements } from '../../services/payementServices';
import { useAuth } from '../../auth/AuthProvider';
import CardList from '../../components/cardList';
import Table from '../../components/Table';
import LayoutSecondForm from '../../LayoutSecondForm';
function Rent() {
    const [payements, setPayement] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        getUserPayements(user?._id).then(
            (result) => {
                setPayement(result);
            }
        ).catch((err) => {
            console.log(err)
        })
    }, [ user])
    return (
        <LayoutSecondForm>
            {payements && <CardList formData={payements} type="payement" />}
            <Table type="payement" data={payements} title="Payement" />
        </LayoutSecondForm>
    )
}

export default Rent