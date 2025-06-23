import { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { createProperty, getMyProperties } from '../../services/propertiesServices';
import Input from '../Input';
import Select from '../Select';
import BtnPrimary from '../ButtonPrimary';
import { createLease } from '../../services/leasesServices';
import { useTranslation } from "react-i18next";
function LeasesForms({ userId, onclose }) {
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const [listProperties, setListProperties] = useState([]);
    const [rent_date, setRentDate] = useState([]);
    const [formData, setFormData] = useState({
        property_id: '',
        name: '',
        email: '',
        start_date: '',
        end_date: '',
        rent_date: '',
    });
    useEffect(() => {
        if (userId) {
            getMyProperties(userId)
                .then((fetchedProperties) => {
                    const formatted = fetchedProperties.map(property => ({
                        label: property.name,
                        value: property._id
                    }));
                    setListProperties([{ label: t('select_property'), value: "" }, ...formatted]);
                })
                .catch((error) => {
                    alert("😵", error);
                });
        }
        const dates = []
        for (let i = 1; i < 30; i++) {
            dates.push({
                "label": t("selected_date", { date: i }),
                "value": i
            });
        }
        setRentDate([{ label: t('select_date'), value: "" }, ...dates]);

    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        createLease(formData)
            .then((response) => {
                alert('✅ Tenant added successfully');
                navigate('/leases', { state: { refresh: Date.now() } });
            })
            .catch((error) => {
                alert("😵", error);
            });
        // Here you would typically send the data to your backend
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div>
            <form className="form-container" onChange={handleChange} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder={t("fullName")} />
                <Input name="email" type="email" placeholder={t("email")} />
                <Input name="start_date" type="date" placeholder={t("start_date")} />
                <Input name="end_date" type="date" placeholder={t("end_date")} />
                <Select list={rent_date} name="rent_date" />
                <Select list={listProperties} name="property_id" />
                <BtnPrimary type="submit" text="Ajouter" />
            </form>
        </div>
    )
}

export default LeasesForms