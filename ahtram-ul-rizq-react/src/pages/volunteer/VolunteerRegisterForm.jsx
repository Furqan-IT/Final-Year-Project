import React, { useEffect, useState } from 'react';
import postApiService from '../../services/apiServices/postApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken, removeAuthToken } from '../../store/slices/authTokenSlice';
import { setAdminRole } from '../../store/slices/adminRoleSlice';
import Select from 'react-select';
import { conveyanceOptions } from '../../constants/conveyanceOptions';

const VolunteerRegisterForm = () => {
    // hooks
    const navigate = useNavigate()
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    const dispatch = useDispatch();
    // state variables
    const [formData, setFormData] = useState({
        name: '',
        cnic: '',
        phone: '',
        email: '',
        password: '',
        address: '',
        qualification: '',
        personalConveyance: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        // Add your logic for further processing the form data here
        try {
            // also pass bearer token in headers
            const response = await postApiService(`/apply-as-volunteer`, formData,{
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            console.log(response)
            // if response.data.success => show some toast notification, and redirect to /auth/login
            if (response.data.success) {
                // Show toast notification for success
                toast.success('Volunteer Request sent successfully');
                // navigate to back route
                setTimeout(() => {
                    navigate(-1); // Navigate back
                }, 3000);
            } else {
                // Show toast notification for success
                toast.error('An error occurred');
            }
        } catch (error) {
            console.log(error)
            // Show toast notification for success
            toast.error('Unable to create volunteer');
        }
    };

    return (
        <>
            <div className='container bg-dark text-secondary'>
                <div className="my-4 py-8">
                    <h1 className='text-warning text-center'>Volunteer Registration Form</h1>
                    <form className='pb-4' onSubmit={handleSubmit}>

                        {/* name */}
                        <input
                            type="text"
                            className="form-control my-4"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                        {/* cnic */}
                        <input
                            type="text"
                            className="form-control my-4"
                            name="cnic"
                            placeholder="Cnic"
                            value={formData.cnic}
                            onChange={handleInputChange}
                        />
                        {/* phone */}
                        <input
                            type="text"
                            className="form-control my-4"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {/* email */}
                        <input
                            type="email"
                            className="form-control my-4"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {/* password */}
                        <div className="input-group my-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control my-4"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary my-4"
                                    type="button"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        {/* address */}
                        <textarea
                            className="form-control my-4"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        {/* qualification */}
                        <input
                            type="text"
                            className="form-control my-4"
                            name="qualification"
                            placeholder="Qualification"
                            value={formData.qualification}
                            onChange={handleInputChange}
                        />
                        {/* conveyance */}
                        <Select
                            className="my-4"
                            name="personalConveyance"
                            options={conveyanceOptions}
                            placeholder="Select Personal Conveyance"
                            value={conveyanceOptions.find((option) => option.value === formData.personalConveyance)}
                            onChange={(selectedOption) => setFormData((prevFormData) => ({ ...prevFormData, personalConveyance: selectedOption.value }))}
                        />
                        <div className='text-center'>
                            <button className='btn btn-primary' type="submit">Apply as Volunteer</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Render ToastContainer at the end of your component */}
            <ToastContainer />
        </>
    );
};

export default VolunteerRegisterForm;
