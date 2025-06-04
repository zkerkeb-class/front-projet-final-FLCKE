import React from 'react'
import './index.css'
function CardResume() {
    return (
       
            <div className="card-resume-container">
                <div className="card-resume">
                    <div>
                        <h2>Résumé</h2>
                        <p>Ce projet est une application de gestion de tâches et de notes, permettant aux utilisateurs de créer, modifier et supprimer des tâches, ainsi que de prendre des notes.</p>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className="project-thumbnail" />
                </div>
                <div className="card-resume-footer">
                    <a href="" className="card-resume-link">En savoir plus</a>
                </div>
            </div>
    )
}

export default CardResume