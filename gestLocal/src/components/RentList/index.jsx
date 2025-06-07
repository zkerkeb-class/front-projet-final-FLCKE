import React from 'react'
import './index.css'
import CardResume from '../CardResume'
function RentList() {
    return (
        <section className='rent-list-container' >
            <h1 className="rent-list-title">Performance</h1>
            <div className='rent-list'>
                <CardResume data="30/02" text="90.000" link="/dashboard-pro" icon="fa-dollar-sign" type="rent"/>
                <CardResume data="30/03" text="90.000" link="/dashboard-pro" icon="fa-dollar-sign" type="rent" />
                <CardResume data="30/04" text="90.000" link="/dashboard-pro" icon="fa-dollar-sign" type="rent" />
                <CardResume data="30/04" text="90.000" link="/dashboard-pro" icon="fa-dollar-sign" type="rent" />
            </div>
        </section>
    )
}

export default RentList
