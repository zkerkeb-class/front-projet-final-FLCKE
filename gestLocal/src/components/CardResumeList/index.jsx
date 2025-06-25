import React, { useEffect, useState } from 'react'
import './index.css'
import CardResume from '../CardResume'
import { useTranslation } from 'react-i18next'
import { getStat } from '../../services/statServices'
import { useAuth } from '../../auth/AuthProvider'
import Spinner from '../Spinner'
function CardResumeList() {
    const [loading, setLoading] = useState(true);
    const [stat, setStat] = useState(null);
    const { user } = useAuth()
    const { t } = useTranslation('common');
    useEffect(() => {
        getStat(user._id).then((result) => {
            setStat(result);
            setLoading(false);
        }).catch((err) => {
            alert(err);
        })
    }, [user])

    return (

        <section className="card-resume-list-container animate-on-scroll">
            <h1 className="card-resume-title">{t("performance")} </h1>
            {!loading ? (<>
                <div className='card-resume-list animate-slide-bottom'>
                    <CardResume data={stat?.totalRevenue || 0} text={t("income")} link="/payement-tenant" icon="fa-dollar-sign" />
                    <CardResume dataType="primary" data={stat?.totalProperties || 0} text={t("properties")} link='/properties' icon=" fa-house-circle-check" />
                    <CardResume data={stat?.totalLeases || 0} text={t("leases")} link="/leases" icon=" fa-people-roof" />
                </div>
            </>
            ) : (
                <Spinner />)}

        </section>
    )
}

export default CardResumeList