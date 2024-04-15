import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
import AdminNavbar from '../../layouts/AdminNavbar';
import Select from 'react-select';
import putApiService from '../../services/apiServices/putApiService';
import RenderNeedyToVolunteerData from '../../components/RenderNeedyToVolunteerData';


const AdminNeedyPersons = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);

    const [neediesData, setNeediesData] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);


    useEffect(() => {
        if (!authToken || role !== 'admin') {
            navigate('/auth/admin-login');
            // Show toast notification for success
        }
    }, [navigate, authToken, role]);

    const fetchAllNeedies = async () => {
        try {
            const response = await getApiService(endPoints.FETCH_ALL_NEEDIES);
            if (response.data.success) {
                setNeediesData(response.data.allNeedies);
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
            <div className="mt-2">
                <AdminNavbar />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CNIC</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {neediesData.map((needy) => (
                            <>
                                <RenderNeedyToVolunteerData needy={needy} />
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminNeedyPersons;
