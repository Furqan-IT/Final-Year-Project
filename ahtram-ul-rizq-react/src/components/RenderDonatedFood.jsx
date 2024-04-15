import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import putApiService from '../services/apiServices/putApiService';
import getApiService from '../services/apiServices/getApiService';
import endPoints from '../constants/endPoints';

const RenderDonatedFood = ({food}) => {

    console.log(food);

    const [volunteers, setVolunteers] = useState([]);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);
    const [timeDifference, settimeDifference] = useState("")



    function formatTimeDifference(diffInMilliseconds) {
        const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        if (hours < 0 || minutes < 0) {
            return `Expired time`;
        }
        else{
            return `${hours}h ${minutes}m`;
        }
      }
      
      // Function to calculate time difference between current time and the specified time in OBJ
      function getTimeDifference(obj) {
        const objTime = new Date(`${obj?.date}T${obj?.time}`);
        const currentTime = new Date();
        const timeDifference = objTime - currentTime;
        return formatTimeDifference(timeDifference);
      }
      // Example usage with your OBJ
      useEffect(() => {
        setInterval(()=>{
            settimeDifference(getTimeDifference(food?.convenientDeliveryTime))
        },1000)
        },[food])



        const handleAssignVolunteer = async (foodId) => {
            if (!selectedVolunteer) {
                console.error('Please select a volunteer');
                return;
            }
    
            try {
                const response = await putApiService(
                    `/assign-food-to-volunteer/${foodId}/${selectedVolunteer.value}`
                );
    
                if (response.data.success) {
                    // Handle success, maybe show a toast notification
                    console.log('Food assigned to volunteer successfully');
                } else {
                    console.error('Failed to assign Food to volunteer');
                }
            } catch (error) {
                console.log(error);
            }
        };


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
        useEffect(() => {
            fetchAllVolunteers()
        }, []);


  return (
    <>
                            <tr key={food?._id}>
                                <td>{food?.donorName}</td>
                                <td>{food?.organizationName}</td>
                                <td>{food?.officialContactNumber}</td>
                                <td>{food?.donorContactNumber}</td>
                                <td>{food?.location}</td>
                                <td>{food?.officialEmail}</td>
                                <td>{food?.amountOfMealPacks}</td>
                                <td style={{color: timeDifference=="Expired time" ? "red" : ""}}>{timeDifference && timeDifference}</td>
                                
                                <td>
                                    <Select
                                        value={selectedVolunteer}
                                        onChange={(selectedOption) => setSelectedVolunteer(selectedOption)}
                                        options={volunteers}
                                        placeholder="Select Volunteer"
                                    />
                                    <button onClick={() => handleAssignVolunteer(food?._id)}>
                                        Assign Volunteer
                                    </button>
                                </td>
                                {/* Add other columns as needed */}
                            </tr>
    </>
  )
}

export default RenderDonatedFood