import React, { useEffect, useState } from 'react';
import postApiService from '../../services/apiServices/postApiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken, removeAuthToken } from '../../store/slices/authTokenSlice';
import { setAdminRole } from '../../store/slices/adminRoleSlice';

const AdminLogin = () => {
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
    const dispatch = useDispatch();
    // state variables
    const [formData, setFormData] = useState({
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
            const response = await postApiService(`/login`, formData)
            console.log(response)
            // if response.data.success => show some toast notification, and redirect to /auth/login
            if (response.data.success && response.data.user.role === 'admin') {
                // Show toast notification for success
                toast.success('Admin User logged in successfully');
                // save it in browser local storage
                localStorage.setItem('authtoken', response.data.authtoken)
                const storedAuthToken = localStorage.getItem('authtoken');
                if (storedAuthToken) {
                    dispatch(setAuthToken(storedAuthToken));
                    dispatch(setAdminRole(response.data.user.role))
                }
                setTimeout(() => {
                    navigate(`/admin/dashboard`)
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
                    <h1 className='text-warning text-center'>Admin Login Form</h1>
                    <form className='pb-4' onSubmit={handleSubmit}>

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
                            <button className='btn btn-primary' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Render ToastContainer at the end of your component */}
            <ToastContainer />
        </>
    );
};

export default AdminLogin;
