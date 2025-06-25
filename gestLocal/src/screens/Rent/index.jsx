import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getOwnerPayements, getUserPayements } from '../../services/payementServices';
import { useAuth } from '../../auth/AuthProvider';
import CardList from '../../components/cardList';
import Table from '../../components/Table';
import LayoutSecondForm from '../../LayoutSecondForm';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/Spinner';
import { useLocation } from 'react-router-dom';
function Rent() {
    const { t } = useTranslation("common");
    const [loading, setLoading] = useState(false)
    const [payements, setPayement] = useState([]);
    const { user } = useAuth();
    const location = useLocation();
    const refresh = location.state?.refresh;
    useEffect(() => {
        setLoading(true)
        if (user.role === "locataire") {
            getUserPayements(user?._id).then(
                (result) => {
                    setPayement(result);
                    setLoading(false)
                }
            ).catch((err) => {
                console.log(err)
            })
        } else if (user.role === "proprietaire") {
            getOwnerPayements(user?._id).then(
                (result) => {
                    setPayement(result);
                    setLoading(false)
                }
            ).catch((err) => {
                console.log(err)
            })
        }
        if (refresh) {
            setShowModal(false);
        }
    }, [user, refresh])
    return (
        <LayoutSecondForm>
            {!loading ? (<><CardList formData={payements} type="payement" />
                <Table type="payement" data={payements} title={t("payement")} />
            </>
            ) : (
                <Spinner />
            )}
        </LayoutSecondForm>
    )
}

export default Rent