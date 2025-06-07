import React from 'react'
import './index.css'
import CardResume from '../CardResume'
function CardResumeList() {
    return (
        <section className="card-resume-list-container">
            <h1 className="card-resume-title">Performance</h1>
            <div className='card-resume-list'>
                <CardResume  data="15000" text="Revenus" link="/dashboard-pro" icon="fa-dollar-sign"/>
                <CardResume dataType="primary" data="03" text="Logements" link='/properties' icon=" fa-house-circle-check"/>
                <CardResume data="56" text="Locataire" link="/leases" icon=" fa-people-roof"/>
            </div>
        </section>
    )
}

export default CardResumeList