import React, { use } from 'react'
import Badge from '../Badge'
import './index.css'
import BtnPrimary from '../ButtonPrimary'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteProperties } from '../../services/propertiesServices';
import Modal from '../Modal';
import PropertiesForms from '../PropertiesForms';
import { useAuth } from '../../auth/AuthProvider';
import { downloadLease, suspendLease } from '../../services/leasesServices';
import { useNavigate } from 'react-router-dom';
function Card({ id, title, badge, price, location, listFonction, type, onDelete }) {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth()
  const [btn1, setBtn1] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }
  useEffect(() => {
    if (type === "leases") {
      setBtn1(true);
    } else if (type === "properties") {
      setBtn1(false);

    }
  }, [type]);

  const handleBtnClick = (action) => {
    if (action === 'suspend') {
      suspendLease(id)
        .then(() => {
          console.log('Property suspended successfully');
          navigate('/leases', { state: { refresh: Date.now() } });
        })
        .catch((error) => {
          console.error('Error suspending property:', error);
        });

      // Logic to suspend the property
      console.log('Property suspended');
    } else if (action === 'download') {
      downloadLease(id).then(() => {
        console.log('Property details downloaded successfully');
      }).catch((error) => {
        console.error('Error downloading property details:', error);
      });

      console.log('Property details downloaded');
    } else if (action === 'edit') {
      setShowModal(true);
      // Logic to edit the property
      console.log('Property edited');
    } else if (action === 'delete') {
      // Logic to delete the property
      console.log('Delete button clicked');
      deleteProperties(id)
        .then(() => {
          console.log('Property deleted successfully');
          onDelete?.(id); // Call the onDelete function passed as a prop
        })
        .catch((error) => {
          console.error('Error deleting property:', error);
        });
      console.log('Property deleted');
    }
  }
  return (
    <div className="card" >
      <div className="card-header">
        <p className="card-title">{title}</p>
        <Badge text={badge} />
      </div>
      <div className="card-body">
        <div className="card-body-first-line">
          <p className="card-text">{location} </p>
          {btn1 && <p className="card-text">{price}</p>}
          {!btn1 && <p className="card-text">{price} $/mois</p>}
        </div>
      </div>
      <div className="card-footer">
        {visible && <div className="card-footer-first-line">
          {btn1 && <BtnPrimary text="Suspendre" className="Btn-action" onClick={() => handleBtnClick("suspend")} />}
          {btn1 && <BtnPrimary text="Telechager" className="Btn-action" onClick={() => handleBtnClick("download")} />}
          {!btn1 && <BtnPrimary text="Modifier" className="Btn-action" onClick={() => handleBtnClick("edit")} />}
          {!btn1 && <BtnPrimary text="Supprimer" className="Btn-action" onClick={() => handleBtnClick("delete")} />}
        </div>}
        <div className="card-footer-second-line" onClick={handleClick}>
          {!visible && <button className=" btn-footer" ><i class="fa-solid fa-angle-down"></i></button>}
          {visible && <button className=" btn-footer" ><i class="fa-solid fa-angle-up"></i></button>}
        </div>

      </div>
      <Modal title="Modifier un logement" isOpen={showModal} children={<PropertiesForms userId={user?._id} propertyId={id} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Card