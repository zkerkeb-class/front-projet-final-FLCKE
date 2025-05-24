    import React, { useEffect, useState } from 'react'
    import Input from '../Input'
    import Select from '../Select'
    import { createProperty, getPropertyById, updateProperty } from '../../services/propertiesServices';
    import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../ButtonPrimary';
    function PropertiesForms({ userId, propertyId, onclose}) {
        const navigate = useNavigate();
        const [property, setProperty] = useState(null);
        const [formData, setFormData] = useState({
            owner_id: userId,
            name: '',
            address: '',
            rent_price: '',
            status: ''
        });
        useEffect(() => {
            if (propertyId && userId) {
                getPropertyById(propertyId)
                    .then((fetchedPropertyDetails) => {
                        setProperty(fetchedPropertyDetails);
                        if(property){

                            setProperty({ ...property, "owner_id": userId })
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching property details:', error);
                    });
            } else {
                console.log('Creating a new property');
            }
        }, [propertyId, userId]);
        const listSelect = [
            { label: "Selectionner le status", value: "" },
            { label: "Disponible", value: "disponible" },
            { label: "Louer", value: "louer" }
        ]
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            if (propertyId && property) {
                console.log("property",property)
                updateProperty(propertyId,property)
                    .then((response) => {
                        navigate('/properties', { state: { refresh: Date.now() } });
                        onclose();
                    })
                    .catch((error) => {
                        console.error('Error creating property:', error);
                    });

            } else if (userId) {

                createProperty(formData)
                    .then((response) => {
                        navigate('/properties', { state: { refresh: Date.now() } });
                    })
                    .catch((error) => {
                        console.error('Error creating property:', error);
                    });
            }

            // Here you would typically send the data to your backend
        }
        const handleChange = (e) => {
            const { name, value } = e.target;
            if (propertyId){
                setProperty({
                    ...property,
                    [name]: value
                })
            }else {
                setFormData({
                    ...formData,
                    [name]: value
                })
            }
        }
        return (
            <div>
                <form className="form-container" onChange={handleChange} onSubmit={handleSubmit}>
                    <Input name="name" type="text" defaultValue={property?.name} placeholder={"Entrer le nom"} />
                    <Input name="address" type="text" defaultValue={property?.address} placeholder={"Entrer l'addresse"} />
                    <Input name="rent_price" type="number" defaultValue={property?.rent_price} placeholder={"Entrer le loyer mensuel"} />
                    <Select list={listSelect} name="status" defaultValue={property?.status} />
                    <BtnPrimary type="submit" text={propertyId?"Modifer":"Ajouter"} />
                </form>
            </div>
        )
    }

    export default PropertiesForms