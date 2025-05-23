import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'

function Leases() {
    return (
        <LayoutSecondForm>
            <CardList formData={""} type="leases" />
        </LayoutSecondForm>
    )
}

export default Leases