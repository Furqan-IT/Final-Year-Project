import React, { useEffect, useState } from 'react';
import VolunteerNavbar from '../../layouts/VolunteerNavbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';

const VolunteerAssignedNeedyPersons = () => {
    // hooks
    const navigate = useNavigate();
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);
    // state variables
    const [needyPersonsDetails, setNeedyPersonsDetails] = useState([]);

    useEffect(() => {
        if (!authToken || role !== 'volunteer') {
            navigate('/auth/volunteer-login');
        } else {
            fetchAssignedNeedyPersons();
        }
    }, [navigate, authToken, role]);

    const fetchAssignedNeedyPersons = async () => {
        try {
            // const response = await axios.get('http://localhost:8000/api/v1/get-assigned-needy-persons', {
            //     headers: {
            //         Authorization: `Bearer ${authToken}`,
            //     },
            // });
            const response = await getApiService(`${endPoints.GET_ASSIGNED_NEEDY_PERSONS}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            if (response.data.success) {
                setNeedyPersonsDetails(response.data.needyPersonsDetails);
            } else {
                console.error('Failed to fetch assigned needy persons data');
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchAssignedNeedyPersons()
    }, [])

    return (
        <>
            <VolunteerNavbar />
            <div>
                <h2>Volunteer Assigned Needy Persons</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CNIC</th>
                            <th>Phone</th>
                            <th>Family Income</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {needyPersonsDetails.map((needy) => (
                            <tr key={needy._id}>
                                <td>{needy.name}</td>
                                <td>{needy.cnic}</td>
                                <td>{needy.phone}</td>
                                <td>{needy.familyIncome}</td>
                                {/* Add other columns as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default VolunteerAssignedNeedyPersons;
