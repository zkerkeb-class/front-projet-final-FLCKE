import React from 'react'
import Card from '../Card'
import './index.css'
import { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { format } from 'date-fns';
import { useTranslation } from "react-i18next";
import BtnPrimary from '../ButtonPrimary'
function CardList({ formData, type, onToggle }) {
    const { t } = useTranslation("common");
    const [data, setData] = useState([])
    useEffect(() => {
        if (formData) {
            setData(formData)
        }
    }
        , [formData])

    const handleDelete = (id) => {
        setData((prevData) => prevData.filter(item => item._id !== id));
    };
    return (
        <div className='card-list'>
            <div className='card-list-header'>
                {type === "properties" && <p className='card-list-title'>{t("properties") } </p>}
                {type === "leases" && <p className='card-list-title'>{t("leases") } </p>}
                {type === "payement" && <p className='card-list-title'>{t("payement") } </p>}

                {type != "payement" && <BtnPrimary text={t('add_btn')} type="button" onClick={() => onToggle()} />}
            </div>

            {data ? data.map((item, index) => (
                <Card
                    key={index}
                    id={item._id}
                    title={item.name || item.tenant_id?.fullName || item.user?.fullName}
                    badge={item.status}
                    price={item.rent_price || item.end_date && format(item.end_date, 'dd/MM/yyyy') || item.date && format(item.date, 'dd/MM/yyyy')}
                    location={item.address || item.property_id?.name || item.property?.name}
                    onDelete={handleDelete}
                    type={type}
                /*
                listFonction={item.listFonction}*/
                />
            )) : <p className='card-list-empty'> {t("empty")} </p>}


        </div>
    )
}

export default CardList