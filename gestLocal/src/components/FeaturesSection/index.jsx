import React from "react";
import "./index.css";
import { FaMoneyBill, FaFileContract, FaComments, FaBell } from "react-icons/fa";

const features = [
    {
        icon: <FaMoneyBill />,
        title: "Paiements simplifiés",
        description: "Suivi automatique des loyers, rappels et paiements en ligne sécurisés."
    },
    {
        icon: <FaFileContract />,
        title: "Contrats numériques",
        description: "Gérez et signez vos baux directement depuis la plateforme."
    },
    {
        icon: <FaComments />,
        title: "Communication fluide",
        description: "Messagerie directe entre locataires et propriétaires, pour éviter les malentendus."
    },
    {
        icon: <FaBell />,
        title: "Notifications intelligentes",
        description: "Recevez des alertes pour les paiements, échéances ou documents importants."
    }
];

const FeaturesSection = () => {
    return (
        <section className="features-section" id="features">
            <h2 className="features-title">Fonctionnalités clés</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
