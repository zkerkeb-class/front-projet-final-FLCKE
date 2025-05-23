import React from 'react'
import Badge from '../Badge'
import './index.css'
import BtnPrimary from '../ButtonPrimary'
import { useState } from 'react';
import { useEffect } from 'react';
function Card({ title, badge, price, location, listFonction, type }) {
  const [visible, setVisible] = useState(false);
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const handleClick = () => {
    setVisible(!visible);
  }
  useEffect(() => {
    if (type === "leases") {
      setBtn1("Suspendre");
      setBtn2("Télécharger");
    } else if (type === "properties") {
      setBtn1("Modifier");
      setBtn2("Supprimer");
    }
  })
  return (
    <div className="card" onClick={handleClick}>
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
        {visible && <BtnPrimary text={btn1} className="Btn-action" />}
        {visible && <BtnPrimary text={btn2} className="Btn-action" />}
        {!visible &&<button className=" btn-footer" >...</button>}
      </div>
    </div>
  )
}

export default Card