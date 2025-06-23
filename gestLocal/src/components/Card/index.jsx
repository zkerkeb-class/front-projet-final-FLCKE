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
import { useTranslation } from "react-i18next";
function Card({ id, title, badge, price, location, type, onDelete }) {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth()
  const { t } = useTranslation("common");
  const [btn1, setBtn1] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }
  useEffect(() => {
    if (type === "leases") {
      setBtn1(true);
    } else if (type === "properties") {
      setBtn1(false);

    } else if (type === "payement") {
      setBtn1(false);

    }
  }, [type]);

  const handleBtnClick = (action) => {
    if (action === 'suspend') {
      suspendLease(id)
        .then(() => {
          alert('✅ Property suspended successfully');
          navigate('/leases', { state: { refresh: Date.now() } });
        })
        .catch((error) => {
          alert("😵", error);
        });
    } else if (action === 'download') {
      downloadLease(id).then(() => {
        alert('✅ Property details downloaded successfully');
      }).catch((error) => {
        alert("😵", error);
      });
    } else if (action === 'edit') {
      setShowModal(true);
    } else if (action === 'delete') {
      deleteProperties(id)
        .then(() => {
          alert('✅ Property deleted successfully');
          onDelete?.(id);
        })
        .catch((error) => {
          alert("😵", error);
        });
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
          {btn1 && user.role === "proprietaire" && badge!='suspendu' && <BtnPrimary text={t("suspend_btn")} className="Btn-action" onClick={() => handleBtnClick("suspend", id)} />}
          {btn1 && <BtnPrimary text={t("download_btn")} className="Btn-action" onClick={() => handleBtnClick("download", id)} />}
          {!btn1 && user.role === "proprietaire" && type != "payement" && <BtnPrimary text={t("edit_btn")} className="Btn-action" onClick={() => handleBtnClick("edit", id)} />}
          {!btn1 && user.role === "proprietaire" && type != "payement" && <BtnPrimary text={t("delete_btn")} className="Btn-action" onClick={() => handleBtnClick("delete", id)} />}
          {user.role === "locataire" && badge === "completed" && btn1 && <BtnPrimary text={t("download_btn")} className="Btn-action" onClick={() => handleBtnClick("download", id)} />}
          {user.role === "locataire" && badge != "completed" && !btn1 && <BtnPrimary text="payer" className="Btn-action" onClick="" />}
        </div>}
        <div className="card-footer-second-line" onClick={handleClick}>
          {!visible && <button className=" btn-footer" ><i class="fa-solid fa-angle-down"></i></button>}
          {visible && <button className=" btn-footer" ><i class="fa-solid fa-angle-up"></i></button>}
        </div>

      </div>
      <Modal title={t("edit_property")} isOpen={showModal} children={<PropertiesForms userId={user?._id} propertyId={id} onclose={() => setShowModal(false)} />} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Card