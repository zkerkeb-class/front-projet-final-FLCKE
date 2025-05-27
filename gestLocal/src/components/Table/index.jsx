import React, { useEffect, useState } from 'react'
import Badge from '../Badge';
import './index.css'
import BtnPrimary from '../ButtonPrimary';
import BtnSecondary from '../ButtonSecondary';
import Modal from '../Modal';
import { deleteProperties } from '../../services/propertiesServices';
import PropertiesForms from '../PropertiesForms';
import { useAuth } from '../../auth/AuthProvider';
import { format } from 'date-fns';
import { suspendLease } from '../../services/leasesServices';
import { useNavigate } from 'react-router-dom';

function Table({ data, title, type, onToggle }) {
    const [btn1, setBtn1] = useState(false);
    const { user } = useAuth()
    const [listTitle, setListTitle] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [propertyId, setPropertyId] = useState(null);
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
            setBtn1(false);
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
            setBtn1(true);
        }
        if (data) {
            setDataTable(data)
            console.log(dataTable)
        }

    }, [type, data]);
    const handleBtnClick = (action, id) => {
        if (action === 'suspend') {
            suspendLease(id)
                .then(() => {
                    console.log('Property suspended successfully');
                    navigate('/leases', { state: { refresh: Date.now() } });
                })
                .catch((error) => {
                    console.error('Error suspending property:', error);
                });
            console.log('Property suspended');
        } else if (action === 'download') {
            // Logic to download the property details
            console.log('Property details downloaded');
        } else if (action === 'edit') {
            setPropertyId(id);
            if (propertyId) {
                setShowModal(true);
            }
            // Logic to edit the property
            console.log('Property edited');
        } else if (action === 'delete') {
            // Logic to delete the property
            console.log('Delete button clicked');
            deleteProperties(id)
                .then(() => {
                    console.log('Property deleted successfully');

                    setDataTable((prevData) => prevData.filter(item => item._id !== id));
                })
                .catch((error) => {
                    console.error('Error deleting property:', error);
                });
            console.log('Property deleted');
        }
    }

    return (
        <div className='table-container'>
            <div className='table-title-header'>
                <p className='table-title'>{title}</p>
                <BtnPrimary className='btn-add' text=" Ajouter" onClick={() => onToggle()} ></BtnPrimary>
            </div>
            <table className='table'>
                <thead className='table-header'>
                    <tr className='table-header-title'>
                        {listTitle.map((instance, index) => (
                            <th className='column-title' key={index}>{instance?.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {dataTable.map((dataInstance, key) => (
                        <tr className='table-body-line' key={dataInstance._id}>
                            <td className='column-data'>{dataInstance?.name || dataInstance?.tenant_id?.fullName}</td>
                            <td className='column-data'>{dataInstance?.address || dataInstance?.property_id?.name}</td>
                            <td className='column-data'>{dataInstance?.rent_price || format(dataInstance?.end_date, 'dd/MM/yyyy')}</td>
                            <td className='column-data'>
                                <Badge text={dataInstance?.status} />
                            </td>
                            <td className='column-data-btn'>
                                {btn1 && <BtnPrimary text="Suspendre" className="Btn-action" onClick={() => handleBtnClick("suspend", dataInstance?._id)} />}
                                {btn1 && <BtnPrimary text="Telechager" className="Btn-action" onClick={() => handleBtnClick("download", dataInstance?._id)} />}
                                {!btn1 && <BtnPrimary text="Modifier" className="Btn-action" onClick={() => handleBtnClick("edit", dataInstance?._id)} />}
                                {!btn1 && <BtnPrimary text="Supprimer" className="Btn-action" onClick={() => handleBtnClick("delete", dataInstance?._id)} />}

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal title="Modifier un logement" isOpen={showModal} children={<PropertiesForms type="properties" userId={user._id} propertyId={propertyId} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
        </div>
    )
}

export default Table