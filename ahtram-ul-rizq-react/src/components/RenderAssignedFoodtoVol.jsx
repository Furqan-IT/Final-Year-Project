import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import putApiService from '../services/apiServices/putApiService';
import getApiService from '../services/apiServices/getApiService';
import endPoints from '../constants/endPoints';

const RenderAssignedFoodToVol = ({food}) => {

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
                    `/assign-status-for-food/${foodId}/${selectedVolunteer.value}`
                );
    
                if (response.data.success) {
                    // Handle success, maybe show a toast notification
                    console.log('Food assigned as RECIEVED successfully');
                    location.reload()
                } else {
                    console.error('Failed to Food assigned as RECIEVED');
                }
            } catch (error) {
                console.log(error);
            }
        };


        const fetchAllVolunteers = async () => {            
                    const volunteerOptions = [
                        {
                            value: "PENDING",
                            label: "PENDING",
                        },
                        {
                            value: "RECIEVED",
                            label: "RECIEVED",
                        }
                    ]
                    setVolunteers(volunteerOptions);
        };
        useEffect(() => {
            fetchAllVolunteers()
        }, []);

        const optionValue = volunteers.find(option => option.value === food?.status)

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
                                <td style={{color: optionValue?.value=="PENDING" ? "blue" : "green"}}>{volunteers && optionValue?.value}</td>
                                <td>
                                    <Select
                                        value={selectedVolunteer || volunteers.find(option => option.value === food?.status)}
                                        onChange={(selectedOption) => setSelectedVolunteer(selectedOption)}
                                        options={volunteers}
                                        placeholder="Select Status"
                                    />
                                    <button onClick={() => handleAssignVolunteer(food?._id)}>
                                        Assign Status
                                    </button>
                                </td>
                                
                                {/* Add other columns as needed */}
                            </tr>
    </>
  )
}

export default RenderAssignedFoodToVol