import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
import Select from 'react-select';
import { volunteerStatusOptions } from '../../constants/volunteerStatusOptions';
import axios from 'axios';
import putApiService from '../../services/apiServices/putApiService';
import AdminNavbar from '../../layouts/AdminNavbar';

const AdminDashboard = () => {
    // hooks
    const navigate = useNavigate()
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);
    // state variables
    const [volunteersData, setVolunteersData] = useState([]);
    useEffect(() => {
        if (!authToken || role !== 'admin') {
            navigate('/auth/admin-login');
            // Show toast notification for success
        }
    }, [navigate, authToken, role])

    return (
        <>
            <div className="container mt-4">
                <AdminNavbar/>
            </div>

        </>

    )
}

export default AdminDashboard