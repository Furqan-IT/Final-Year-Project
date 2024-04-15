import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import postApiService from '../../services/apiServices/postApiService';
const DonateFood = () => {
    const [formData, setFormData] = useState({
        donorName: '',
        organizationName: '',
        officialContactNumber: '',
        donorContactNumber: '',
        location: '',
        officialEmail: '',
        typeOfFood: '',
        amountOfMealPacks: 0,
        convenientDeliveryTime: '',
    });

    console.log(formData);


    const [deliveryTime, setdeliveryTime] = useState({
        time: '',
        date: ''
    });


    useEffect(() => {
        setFormData({
            ...formData, convenientDeliveryTime: deliveryTime
        })
    }, [deliveryTime])
    const handleChangeTime = (e) => {
        const { name, value } = e.target;
        setdeliveryTime((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // api call
            const response = await postApiService(`/add-food`, formData)
            console.log(response.data);

            if (response.data.success) {
                // Show toast notification on success
                toast.success('Form submitted successfully!');
            } else {
                // Handle other scenarios as needed
                toast.error('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add logic for handling errors or showing error notifications
            toast.error('Error submitting form. Please try again.');
        }
    };

    return (
        <>
            <div className='container bg-dark text-secondary'>
                <div className='my-4 py-8'>
                    <h1 className='text-warning text-center'>Food Donation Form</h1>
                    <form className='pb-4' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='donorName' className='form-label'>
                                Name of Donor
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='donorName'
                                name='donorName'
                                value={formData.donorName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='organizationName' className='form-label'>
                                Organization Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='organizationName'
                                name='organizationName'
                                value={formData.organizationName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='officialContactNumber' className='form-label'>
                                Official Contact Number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='officialContactNumber'
                                name='officialContactNumber'
                                value={formData.officialContactNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='donorContactNumber' className='form-label'>
                                Donor&apos;s Contact Number
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='donorContactNumber'
                                name='donorContactNumber'
                                value={formData.donorContactNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='location' className='form-label'>
                                Location
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='location'
                                name='location'
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='officialEmail' className='form-label'>
                                Official Email
                            </label>
                            <input
                                type='email'
                                className='form-control'
                                id='officialEmail'
                                name='officialEmail'
                                value={formData.officialEmail}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='typeOfFood' className='form-label'>
                                Type of Food
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='typeOfFood'
                                name='typeOfFood'
                                value={formData.typeOfFood}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='amountOfMealPacks' className='form-label'>
                                Amount of Meal Packs
                            </label>
                            <input
                                type='number'
                                className='form-control'
                                id='amountOfMealPacks'
                                name='amountOfMealPacks'
                                value={formData.amountOfMealPacks}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='convenientDeliveryDate' className='form-label'>
                                Convenient Delivery date
                            </label>
                            <input
                                type='date'
                                className='form-control'
                                id='convenientDeliveryDate'
                                name='date'
                                value={formData.date}
                                onChange={handleChangeTime}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='convenientDeliveryTime' className='form-label'>
                                Convenient Delivery Time
                            </label>
                            <input
                                type='time'
                                className='form-control'
                                id='convenientDeliveryTime'
                                name='time'
                                value={formData.time}
                                onChange={handleChangeTime}
                            />
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* ToastContainer for displaying notifications */}
            <ToastContainer />
        </>
    );
};

export default DonateFood;
