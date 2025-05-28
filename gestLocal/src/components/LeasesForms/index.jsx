import { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { createProperty, getMyProperties } from '../../services/propertiesServices';
import Input from '../Input';
import Select from '../Select';
import BtnPrimary from '../ButtonPrimary';
import { createLease } from '../../services/leasesServices';

function LeasesForms({ userId, onclose }) {
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
                    setListProperties([{ label: "Selectionner le logement", value: "" }, ...formatted]);
                })
                .catch((error) => {
                    console.error('Error fetching properties:', error);
                });
        }
        const dates = []
        for (let i = 1; i < 30; i++) {
            dates.push({
                "label": `Tous ${i} du mois`,
                "value": i
            });
        }
        setRentDate([{ label: "Selectionner la date de paiement", value: "" }, ...dates]);

    }, [userId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        createLease(formData)
            .then((response) => {
                navigate('/leases', { state: { refresh: Date.now() } });
            })
            .catch((error) => {
                console.error('Error creating lease:', error);
            });
        // Here you would typically send the data to your backend
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('Input changed:', name, value);
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div>
            <form className="form-container" onChange={handleChange} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder={"Entrer le nom"} />
                <Input name="email" type="email" placeholder={"Entrer le mail du locataire"} />
                <Input name="start_date" type="date" placeholder={"Entrer la date de depart"} />
                <Input name="end_date" type="date" placeholder={"Entrer la date de fin"} />
                <Select list={rent_date} name="rent_date" />
                <Select list={listProperties} name="property_id" />
                <BtnPrimary type="submit" text="Ajouter" />
            </form>
        </div>
    )
}

export default LeasesForms