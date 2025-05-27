import React, { use, useEffect, useState } from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
import { getMyLeases } from '../../services/leasesServices';
import Table from '../../components/Table';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

function Leases() {
    const [leases, setLeases] = useState([])
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth()
    const location = useLocation();
    const refresh = location.state?.refresh; // Check if refresh state is passed
    useEffect(() => {
        getMyLeases(user?._id)
            .then((result) => {
                console.log("ffer",result)
                setLeases(result)
            })
            .catch((err) => {
                console.log(err)
            })
        if (refresh) {
            setShowModal(false);
        }
    }, [user._id, refresh]); // Add user._id and refresh to the dependency array
    const handleAddLease = () => {
        console.log("Add lease clicked");
        setShowModal(!showModal);
    }

    return (
        <LayoutSecondForm>
            {leases && <CardList formData={leases} onToggle={handleAddLease} type="leases" />}
            {/*<Modal title="Ajouter un logement" isOpen={showModal} children={<PropertiesForms userId={user?._id} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />*/}
            <Table type="leases" data={leases} title="Mes locataires" onToggle={handleAddLease} />
        </LayoutSecondForm>
    )
}

export default Leases