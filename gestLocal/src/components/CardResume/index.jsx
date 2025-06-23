import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function CardResume({ dataType, data, text, link, icon, type }) {
    const {t}=useTranslation("common");
   
    return (

        <div className="card-resume-container" data-type={dataType}>
            <div className="card-resume">
                <div className='card-resume-display-data'>
                    <h2 className='card-resume-number'>{data}</h2>
                    {type === "rent" ? (<p>Rent : {text}</p>) : (<p>{text}</p>)}
                </div>
                <i class={`fa-solid ${icon} icon-dashboard`}></i>
            </div>
            {type != "rent" &&
                <div className="card-resume-footer">
                    <Link to={link} className='card-resume-link'>{t("view_more")} </Link>
                </div>}
        </div>
    )
}

export default CardResume