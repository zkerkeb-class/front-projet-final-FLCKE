import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
import { useAuth } from '../../auth/AuthProvider'
import { useEffect } from 'react'
import { getMyProperties } from '../../services/propertiesServices'
import { useState } from 'react'
import Modal from '../../components/Modal'
import PropertiesForms from '../../components/PropertiesForms'
import { useLocation } from 'react-router-dom'
import Table from '../../components/Table'
import { useTranslation } from "react-i18next";
function Properties() {
    const { t } = useTranslation("common");
    const [properties, setProperties] = useState([])
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth()
    const location = useLocation();
    const refresh = location.state?.refresh; // Check if refresh state is passed


    useEffect(() => {
        getMyProperties(user._id)
            .then((result) => {
                setProperties(result)
            })
            .catch((err) => {
                console.log(err)
            })
        if (refresh) {
            setShowModal(false);
        }
    }, [user._id, refresh]); // Add user._id and refresh to the dependency array
    const handleAddProperty = () => {
        console.log("Add property clicked");
        setShowModal(!showModal);
    }
    return (
        <LayoutSecondForm>
            {properties && <CardList formData={properties} onToggle={handleAddProperty} type="properties" />}
            <Modal title={t("add_property")} isOpen={showModal} children={<PropertiesForms userId={user?._id} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
            <Table type="properties" data={properties} title={t('properties')} onToggle={handleAddProperty} />
        </LayoutSecondForm>
    )
}

export default Properties