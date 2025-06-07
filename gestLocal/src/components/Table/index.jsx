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
import { downloadLease, suspendLease } from '../../services/leasesServices';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Table({ data, title, type, onToggle }) {
    const [btn1, setBtn1] = useState(false);
    const { t } = useTranslation("common");
    const { user } = useAuth()
    const [listTitle, setListTitle] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [propertyId, setPropertyId] = useState(null);
    useEffect(() => {

        if (type === "properties") {
            setListTitle([{
                "title": t("fullName")
            },
            {
                "title": t("location")
            },
            {
                "title": t("price")
            },
            {
                "title": t("status")
            },
            {
                "title": t("action")
            }])
            setBtn1(false);
        } else if (type === "payement") {
            setListTitle([{
                "title": t("fullName")
            },
            {
                "title": t("location")
            },
            {
                "title": t("end_date")
            },
            {
                "title": t("status")
            },
            {
                "title": t("action")
            }])
            setBtn1(false);
        } else {
            setListTitle([{
                "title": t("leases")
            },
            {
                "title": t("properties")
            },
            {
                "title": t("end_date")
            },
            {
                "title": t("status")
            },
            {
                "title": t("action")
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
            downloadLease(id).then(() => {
                console.log('Property details downloaded successfully');
            }).catch((error) => {
                console.error('Error downloading property details:', error);
            });

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
                {user.role === "propeiétaire" && <BtnPrimary className='btn-add' text={t('add_btn')} onClick={() => onToggle()} ></BtnPrimary>}
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
                            <td className='column-data'>{dataInstance?.name || dataInstance?.tenant_id?.fullName || dataInstance?.user?.fullName}</td>
                            <td className='column-data'>{dataInstance?.address || dataInstance?.property_id?.name || dataInstance?.property?.name}</td>
                            <td className='column-data'>{dataInstance?.rent_price || dataInstance.end_date && format(dataInstance?.end_date, 'dd/MM/yyyy') || dataInstance?.date && format(dataInstance?.date, 'dd/MM/yyyy')}</td>
                            <td className='column-data'>
                                <Badge text={dataInstance?.status} />
                            </td>
                            <td className='column-data-btn'>
                                {btn1 && user.role === "propiétaire" && <BtnPrimary text={t("suspend_btn")} className="Btn-action" onClick={() => handleBtnClick("suspend", dataInstance?._id)} />}
                                {btn1 && <BtnPrimary text={t("download_btn")} className="Btn-action" onClick={() => handleBtnClick("download", dataInstance?._id)} />}
                                {!btn1 && user.role === "propiétaire" && <BtnPrimary text={t("edit_btn")} className="Btn-action" onClick={() => handleBtnClick("edit", dataInstance?._id)} />}
                                {!btn1 && user.role === "propiétaire" && <BtnPrimary text={t("delete_btn")} className="Btn-action" onClick={() => handleBtnClick("delete", dataInstance?._id)} />}
                                {user.role === "locataire" && dataInstance?.status === "completed" && btn1 && <BtnPrimary text={t("download_btn")} className="Btn-action" onClick={() => handleBtnClick("download", dataInstance?._id)} />}
                                {user.role === "locataire" && dataInstance?.status != "completed" && !btn1 && <BtnPrimary text="payer" className="Btn-action" onClick="" />}


                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Modal title={t("edit_property")} isOpen={showModal} children={<PropertiesForms type="properties" userId={user._id} propertyId={propertyId} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
        </div>
    )
}

export default Table