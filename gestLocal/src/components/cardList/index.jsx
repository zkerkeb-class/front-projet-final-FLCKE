import React from 'react'
import Card from '../Card'
import './index.css'
import { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function CardList({ formData , type}) {
const [data, setData] = useState([])
useEffect(() => {
    if (formData) {
        setData(formData)
    }
}
, [formData])
    return (
        <div className='card-list'>
            <div className='card-list-header'>
                <p className='card-list-title'>Mes logements</p>
                <button className='btn-add'><i class="fa-solid fa-circle-plus"></i>    Ajouter</button>
            </div>
            {data ? data.map((item, index) => (
                <Card
                    key={index}
                    title={item.name}
                    badge={item.status}
                    price={item.rent_price}
                    location={item.address}
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