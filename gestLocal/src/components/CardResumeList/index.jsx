import React from 'react'
import './index.css'
import CardResume from '../CardResume'
function CardResumeList() {
    return (
        <section className="card-resume-list-container">
            <h1 className="card-resume-title">Performance</h1>
            <div className='card-resume-list'>
                <CardResume />
                <CardResume />
                <CardResume />
            </div>
        </section>
    )
}

export default CardResumeList