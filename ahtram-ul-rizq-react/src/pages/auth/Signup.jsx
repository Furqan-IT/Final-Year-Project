import React, { useEffect, useState } from 'react';
import postApiService from '../../services/apiServices/postApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Signup = () => {
    // hooks
    const navigate = useNavigate()
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    
    useEffect(() => {
        if (authToken) {
            navigate('/');
            // Show toast notification for success
        }
    }, [navigate])

    
    // state variables
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
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
            const response = await postApiService(`/register`, formData)
            // if response.data.success => show some toast notification, and redirect to /auth/login
            if (response.data.success) {
                // Show toast notification for success
                toast('User Registered Successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate(`/auth/login`)
                }, 3000)
            } else {
                // Show toast notification for success
                toast.error('An error occurred');
            }
        } catch (error) {
            console.log(error)
            // Show toast notification for success
            toast.error('Unable to create user');
        }
    };

    return (
        <>
            <div className='container bg-dark text-secondary'>
                <div className="my-4 py-8">
                    <h1 className='text-warning text-center'>Sign Up Form</h1>
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
                        <div className='text-center'>
                            <button className='btn btn-primary' type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Render ToastContainer at the end of your component */}
            <ToastContainer />
        </>
    );
};

export default Signup;
