import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
// import Select from 'react-select';
// import { volunteerStatusOptions } from '../../constants/volunteerStatusOptions';
// import axios from 'axios';
// import putApiService from '../../services/apiServices/putApiService';
// import AdminNavbar from '../../layouts/AdminNavbar';
import VolunteerNavbar from '../../layouts/VolunteerNavbar';
import RenderAssignedFoodToVol from '../../components/RenderAssignedFoodtoVol';

const VolunteerDashboard = () => {
    // hooks
    const navigate = useNavigate()
    // redux
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);

    const [foodsDetails, setfoodsDetails] = useState([]);
    const [totalMealPacks, setTotalMealPacks] = useState(0);
    const [deliveredMealPacks, setDeliveredMealPacks] = useState(0);
    const [pendingMealPacks, setPendingMealPacks] = useState(0);



    
// console.log(foodsDetails,"foodsDetails");
    // state variables
    useEffect(() => {
        if (!authToken || role !== 'volunteer' ) {
            navigate('/auth/volunteer-login');
            // Show toast notification for success
        }
    }, [navigate, authToken, role])


    const fetchAssignedFoods = async () => {
        try {
            const response = await getApiService(`${endPoints.GET_ASSIGNED_FOODS}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            if (response.data.success) {
                setfoodsDetails(response.data.FoodsDetails);
            } else {
                console.error('Failed to fetch assigned foods data');
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchAssignedFoods()
    }, [])



    useEffect(() => {
        setTotalMealPacks(foodsDetails.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

        var pendingData = foodsDetails.filter((ele) => ele.status == "PENDING")
        setPendingMealPacks(pendingData.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

        var deliveredData = foodsDetails.filter((ele) => ele.status == "RECIEVED")
        setDeliveredMealPacks(deliveredData.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

    },[foodsDetails])



    return (
        <>
            <div className="container mt-4">
                <VolunteerNavbar/>
                <div style={{width: "100%", overflow: "auto"}}>
                <h2>Volunteer Assigned Needy Persons</h2>
                <table style={{width: "max-content"}} className="table">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Organization Name</th>
                            <th>Official Contact Number</th>
                            <th>Donor Contact Number</th>
                            <th>Location</th>
                            <th>Official Email</th>
                            <th>Amount of Meal Packs</th>
                            <th>Convenient Delivery Time</th>
                            <th>Status</th>
                            <th>Change Status</th>
                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {foodsDetails.map((food) => (
                            <>
                                <RenderAssignedFoodToVol food={food} />
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            <h1>Total Meal</h1>
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: 'wrap'}}>
            <div style={{padding: "20px", width: "25%", backgroundColor: "lightblue", borderRadius: "10px"}}>
                <p>Revieved</p>
                <h2>{totalMealPacks}</h2>
            </div>
            <div style={{padding: "20px", width: "25%", backgroundColor: "lightblue", borderRadius: "10px"}}>
                <p>Deliverd</p>
                <h2>{deliveredMealPacks}</h2>
            </div>
            <div style={{padding: "20px", width: "25%", backgroundColor: "lightblue", borderRadius: "10px"}}>
                <p>Pending</p>
                <h2>{pendingMealPacks}</h2>
            </div>
        </div>
            </div>

        </>

    )
}

export default VolunteerDashboard