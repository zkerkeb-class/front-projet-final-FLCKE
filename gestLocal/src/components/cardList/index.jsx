import React from 'react'
import Card from '../Card'
import './index.css'
import { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { format } from 'date-fns';
function CardList({ formData, type, onToggle }) {
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
                <p className='card-list-title'>Mes logements</p>
                <button className='btn-add' onClick={() => onToggle()} ><i class="fa-solid fa-circle-plus"></i>    Ajouter</button>
            </div>

            {data ? data.map((item, index) => (
                <Card
                    key={index}
                    id={item._id}
                    title={item.name || item.tenant_id?.fullName}
                    badge={item.status}
                    price={item.rent_price || format(item.end_date, 'dd/MM/yyyy') }
                    location={item.address || item.property_id?.name}
                    onDelete={handleDelete}
                    listFonction="item.listFonction"
                    type={type}
                /*
                listFonction={item.listFonction}*/
                />
            )) : <p className='card-list-empty'>Aucun logement trouvé</p>}
            

        </div>
    )
}

export default CardList