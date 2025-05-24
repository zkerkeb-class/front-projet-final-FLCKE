import React from 'react'
import LayoutSecondForm from '../../LayoutSecondForm'
import CardList from '../../components/cardList'
import { useAuth } from '../../auth/AuthProvider'
import { useEffect } from 'react'
import { getMyProperties } from '../../services/propertiesServices'
import { useState } from 'react'
import Modal from '../../components/Modal'
function Properties() {
    const [properties, setProperties] = useState([])
    const [showModal, setShowModal] = useState(false);
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
    const handleAddProperty = () => {
        console.log("Add property clicked");
        setShowModal(!showModal);
    }
    return (
        <LayoutSecondForm>
            {properties && <CardList formData={properties} onToggle={handleAddProperty} type="properties" />}
            <Modal title={"fzfzf"} isOpen={showModal} children={"fzffzfzfzz"} onClose={() => setShowModal(false)} />
        </LayoutSecondForm>
    )
}

export default Properties