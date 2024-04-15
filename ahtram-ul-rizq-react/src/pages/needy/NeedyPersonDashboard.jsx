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
import RenderNeedyData from '../../components/RenderNeedyData';

const NeedyPersonDashboard = () => {
    // hooks
    const navigate = useNavigate()
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);
    // state variables
    const [volunteersData, setVolunteersData] = useState([]);
    const [neediesData, setNeediesData] = useState([]);

    useEffect(() => {
        if (!authToken || role !== 'needyPerson') {
            navigate('/auth/admin-login');
            // Show toast notification for success
        }
    }, [navigate, authToken, role])



    const fetchAllNeedies = async () => {
        try {
            const response = await getApiService(endPoints.FETCH_SINGLE_NEEDIE_DATA, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            if (response.data.success) {
                setNeediesData([response.data.NeedyData]);
            } else {
                console.error('Failed to fetch needy persons data');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllNeedies();
    }, []);



    return (
        <>
            <div className="container mt-4">
                NeedyPersonDashboard
                <div style={{width: "100%", overflow: "auto"}}>
                <table style={{minWidth: "max-content"}} className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CNIC</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Actions</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {neediesData.map((needy) => (
                            <>
                                <RenderNeedyData needy={needy} />
                            </>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>

        </>

    )
}

export default NeedyPersonDashboard