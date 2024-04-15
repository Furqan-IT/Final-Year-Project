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
import endPoints from '../../constants/endPoints';

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
        address: '',
        password: '',
        familyIncome: '',
        familyMembers: '',
        nameOfHeadOfTheFamily: '',
        cnicOfHeadOfTheFamily: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
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
            const response = await postApiService(`${endPoints.APPLY_AS_NEEDY}`, formData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            console.log(response)
            // if response.data.success => show some toast notification, and redirect to /auth/login
            if (response.data.success) {
                // Show toast notification for success
                toast.success('Needy Person Request sent successfully');
                localStorage.setItem("role", "needyPerson")
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
                    <h1 className='text-warning text-center'>Needy Person Registration Form</h1>
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
                        {/* address */}
                        <input
                            type="address"
                            className="form-control my-4"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
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
                        {/* family income */}
                        <input
                            type="number"
                            className="form-control my-4"
                            name="familyIncome"
                            placeholder="Family income"
                            value={formData.familyIncome}
                            onChange={handleInputChange}
                        />
                        
                        {/* family members */}
                        <input
                            type="number"
                            className="form-control my-4"
                            name="familyMembers"
                            placeholder="Family Members"
                            value={formData.familyMembers}
                            onChange={handleInputChange}
                        />
                        
                        {/* family head */}
                        <input
                            type="text"
                            className="form-control my-4"
                            name="nameOfHeadOfTheFamily"
                            placeholder="Family Head"
                            value={formData.nameOfHeadOfTheFamily}
                            onChange={handleInputChange}
                        />
                        
                        
                        {/* cnic of family head */}
                       {/*  <input
                            type="text"
                            className="form-control my-4"
                            name="cnicOfHeadOfTheFamily"
                            placeholder="CNIC of Family Head"
                            value={formData.cnicOfHeadOfTheFamily}
                            onChange={handleInputChange}
                        /> */}
                        
                        <div className='text-center'>
                            <button className='btn btn-primary' type="submit">Apply as Needy</button>
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
