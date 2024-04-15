import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
import putApiService from '../../services/apiServices/putApiService';
import { volunteerStatusOptions } from '../../constants/volunteerStatusOptions';
import AdminNavbar from '../../layouts/AdminNavbar';

const AdminVolunteers = () => {
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

    // fetch all volunteers
    const fetchAllVolunteers = async () => {
        try {
            const response = await getApiService(endPoints.FETCH_ALL_VOLUNTEERS)
            if (response.data.success) {
                setVolunteersData(response.data.volunteers);
            } else {
                // Handle error
                console.error('Failed to fetch volunteer data');
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllVolunteers()
    }, [])
    // status change
    const handleStatusChange = async (selectedOption, volunteerId) => {
        try {
            const statusData = { status: selectedOption.value, }
            const response = await putApiService(
                `${endPoints.UPDATE_VOLUNTEER_STATUS}/${volunteerId}`, statusData
            );
            if (response.data.success) {
                fetchAllVolunteers()
                // Perform any additional actions you need here
            } else {
                // Handle error
                console.error(`Failed to update status for volunteer ${volunteerId}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="mt-2">
                <AdminNavbar/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CNIC</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Status</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {volunteersData.map((volunteer) => (
                            <tr key={volunteer._id}>
                                <td>{volunteer.name}</td>
                                <td>{volunteer.cnic}</td>
                                <td>{volunteer.phone}</td>
                                <td>{volunteer.email}</td>
                                <td>
                                    <Select
                                        value={volunteerStatusOptions.find(option => option.value === volunteer.status)}
                                        options={volunteerStatusOptions}
                                        onChange={(selectedOption) => handleStatusChange(selectedOption, volunteer._id)}
                                    />
                                </td>
                                {/* Add other columns as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>

    )
}

export default AdminVolunteers