import React from "react";
import "./index.css";
import mockupImage from "../../assets/img/mockup.png"; // remplace par ton vrai chemin

const MockupSection = () => {
    return (
        <section className="mockup-section" id="app">
            <div className="mockup-content">
                <div className="mockup-text">
                    <h2 className="mockup-title">Une interface <span className="text-second">claire </span>pour tous</h2>
                    <p>
                        Notre application permet aux propriétaires de suivre leurs biens en
                        temps réel, tandis que les locataires peuvent payer leur loyer,
                        consulter leur contrat et contacter facilement leur gestionnaire.
                    </p>
                </div>
                <div className="mockup-image">
                    <img src={mockupImage} alt="Aperçu de l'application" />
                </div>
            </div>
        </section>
    );
};

export default MockupSection;
