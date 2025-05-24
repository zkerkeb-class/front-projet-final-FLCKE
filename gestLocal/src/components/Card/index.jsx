import React from 'react'
import Badge from '../Badge'
import './index.css'
import BtnPrimary from '../ButtonPrimary'
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteProperties } from '../../services/propertiesServices';
function Card({ id, title, badge, price, location, listFonction, type, onDelete }) {
  const [visible, setVisible] = useState(false);
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
      // Logic to suspend the property
      console.log('Property suspended');
    } else if (action === 'download') {
      // Logic to download the property details
      console.log('Property details downloaded');
    } else if (action === 'edit') {
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
          <p className="card-text">{price} $/mois</p>
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
    </div>
  )
}

export default Card