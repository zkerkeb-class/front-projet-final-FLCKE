import React from "react";
import "./index.css";
import { FaMoneyBill, FaFileContract, FaComments, FaBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
    const { t } = useTranslation("common");

    const features = [
        {
            icon: <FaMoneyBill />,
            title: t("feature_payment_title"),
            description: t("feature_payment_desc")
        },
        {
            icon: <FaFileContract />,
            title: t("feature_contract_title"),
            description: t("feature_contract_desc")
        },
        {
            icon: <FaComments />,
            title: t("feature_communication_title"),
            description: t("feature_communication_desc")
        },
        {
            icon: <FaBell />,
            title: t("feature_notification_title"),
            description: t("feature_notification_desc")
        }
    ];

    return (
        <section className="features-section" id="features">
            <h2 className="features-title">{t("features_title")}</h2>
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