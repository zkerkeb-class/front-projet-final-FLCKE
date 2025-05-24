    import React, { useEffect, useState } from 'react'
    import Badge from '../Badge';
    import './index.css'
import BtnPrimary from '../ButtonPrimary';

    function Table({ data,title, type,onToggle}) {
        const [listTitle, setListTitle] = useState([]);
        useEffect(() => {
            if (type === "properties") {
                setListTitle([{
                    "title": "Nom"
                },
                {
                    "title": "Lieu"
                },
                {
                    "title": "Prix"
                },
                {
                    "title": "Statut"
                },
                {
                    "title": "Action"
                }])
            } else {
                setListTitle([{
                    "title": "Nom"
                },
                {
                    "title": "Logement"
                },
                {
                    "title": "Date de fin"
                },
                {
                    "title": "Statut"
                },
                {
                    "title": "Action"
                }])
            }
        },[type])

        return (
            <div className='table-container'>
                <div className='table-title-header'>
                    <p className='table-title'>Mes logements</p>
                    <BtnPrimary className='btn-add' text=" Ajouter" onClick={() => onToggle()} ></BtnPrimary>
                </div>
                <table className='table'>
                    <thead className='table-header'>
                        <tr className='table-header-title'>
                            {listTitle.map((instance,index) => (
                                <th className='column-title' key={index}>{instance?.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                            {data.map((dataInstance,key) => (
                                <tr className='table-body-line' key={dataInstance._id}>
                                        <td className='column-data'>{dataInstance?.name}</td>
                                        <td className='column-data'>{dataInstance?.address}</td>
                                        <td className='column-data'>{dataInstance?.rent_price}</td>
                                        <td className='column-data'>
                                        <Badge text={dataInstance?.status}/>
                                        </td>
                                        <td className='column-data'>{dataInstance?.status}</td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        )
    }

    export default Table