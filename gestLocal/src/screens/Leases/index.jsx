import React, { use, useEffect, useState } from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
import { getLeaseByTenant, getMyLeases } from '../../services/leasesServices';
import Table from '../../components/Table';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import LeasesForms from '../../components/LeasesForms';
import Modal from '../../components/Modal';
import { useTranslation } from "react-i18next";
import Spinner from '../../components/Spinner';

function Leases() {
    const { t } = useTranslation("common");
    const [loading, setLoading] = useState(false)
    const [leases, setLeases] = useState([])
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth()
    const location = useLocation();
    const refresh = location.state?.refresh; // Check if refresh state is passed
    useEffect(() => {
        setLoading(true)
        if (user.role === "locataire") {
            getLeaseByTenant(user?._id)
                .then((result) => {
                    setLeases(result)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else if (user.role === "proprietaire") {
            getMyLeases(user?._id)
                .then((result) => {
                    setLeases(result)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        if (refresh) {
            setShowModal(false);
        }
    }, [user._id, refresh]); // Add user._id and refresh to the dependency array
    const handleAddLease = () => {
        setShowModal(!showModal);
    }

    return (
        <LayoutSecondForm>


            {!loading ? (<>
                <CardList formData={leases} onToggle={handleAddLease} type="leases" />
                <Modal title={t('add_lease')} isOpen={showModal} children={<LeasesForms userId={user?._id} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
                <Table type="leases" data={leases} title={t('leases')} onToggle={handleAddLease} /> </>
            ) : (
                <Spinner />)
            }
        </LayoutSecondForm >
    )
}

export default Leases