import React from "react";
import "./index.css";
import mockupImage from "../../assets/img/mockup.png";
import { useTranslation } from "react-i18next";

const MockupSection = () => {
    const { t } = useTranslation("common");

    return (
        <section className="mockup-section" id="about">
            <div className="mockup-content">
                <div className="mockup-text">
                    <h2 className="mockup-title">
                        {t("mockup_title_1")} <span className="text-second">{t("mockup_title_2")}</span> {t("mockup_title_3")}
                    </h2>
                    <p>
                        {t("mockup_paragraph")}
                    </p>
                </div>
                <div className="mockup-image">
                    <img src={mockupImage} alt={t("mockup_img_alt")} />
                </div>
            </div>
        </section>
    );
};

export default MockupSection;