import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import putApiService from '../services/apiServices/putApiService';
import getApiService from '../services/apiServices/getApiService';
import endPoints from '../constants/endPoints';

const RenderNeedyToVolunteerData = ({needy}) => {

    console.log(needy);

    const [volunteers, setVolunteers] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);


    const fetchAllVolunteers = async () => {
        try {
            const response = await getApiService(endPoints.FETCH_ALL_VOLUNTEERS);
            if (response.data.success) {
                const volunteerOptions = response.data.volunteers.map((volunteer) => ({
                    value: volunteer._id,
                    label: volunteer.name,
                }));
                setVolunteers(volunteerOptions);
            } else {
                console.error('Failed to fetch volunteers data');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleAssignVolunteer = async (needyId) => {
        if (!selectedVolunteer) {
            console.error('Please select a volunteer');
            return;
        }

        try {
            const response = await putApiService(
                `/assign-needy-to-volunteer/${needyId}/${selectedVolunteer.value}`
            );

            if (response.data.success) {
                // Handle success, maybe show a toast notification
                console.log('Needy person assigned to volunteer successfully');
            } else {
                console.error('Failed to assign needy person to volunteer');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllVolunteers();
    }, []);
        
  return (
    <>
                            <tr key={needy?._id}>
                                <td>{needy?.name}</td>
                                <td>{needy?.cnic}</td>
                                <td>{needy?.phone}</td>
                                <td>{needy?.email}</td>
                                <td>{needy?.address}</td>
                                <td>
                                    <Select
                                        value={selectedVolunteer}
                                        onChange={(selectedOption) => setSelectedVolunteer(selectedOption)}
                                        options={volunteers}
                                        placeholder="Select Volunteer"
                                    />
                                    <button onClick={() => handleAssignVolunteer(needy._id)}>
                                        Assign Volunteer
                                    </button>
                                </td>
                            </tr>
                
    </>
  )
}

export default RenderNeedyToVolunteerData