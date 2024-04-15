import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
import AdminNavbar from '../../layouts/AdminNavbar';
// import putApiService from '../../services/apiServices/putApiService';
import RenderDonatedFood from '../../components/RenderDonatedFood';


const AdminDonatedFoods = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state) => state.authToken.authToken);
    const role = useSelector((state) => state.adminRole.roleValue);

    const [donatedFoodsData, setDonatedFoodsData] = useState([]);
    const [sortedArrayByTime, setSortedArrayByTime] = useState([]);

    console.log(donatedFoodsData);

    useEffect(() => {
        if (!authToken || role !== 'admin') {
            navigate('/auth/admin-login');
            // Show toast notification for success
        }
    }, [navigate, authToken, role]);

    const fetchAllDonatedFoods = async () => {
        try {
            const response = await getApiService(endPoints.FETCH_ALL_DONATED_FOODS);
            if (response.data.success) {
                setDonatedFoodsData(response.data.donatedFoods);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        function calculateTimeDifference(item) {
            const deliveryTime = new Date(`${item.convenientDeliveryTime.date}T${item.convenientDeliveryTime.time}`);
            const currentTime = new Date();
            return deliveryTime - currentTime;
          }
          
          // Sort the array based on time difference
          const sortedData = donatedFoodsData.sort((a, b) => calculateTimeDifference(a) - calculateTimeDifference(b));
          setSortedArrayByTime(sortedData)
    },[donatedFoodsData])



    useEffect(() => {
        fetchAllDonatedFoods();
    }, []);



    


    return (
        <>
            <div className="mt-2">
                <AdminNavbar />
                <div style={{width: "100%",overflowX: "auto"}}>
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
                            <th>Actions</th>

                            {/* Add other columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedArrayByTime?.map((food) => (
                            <>
                                <RenderDonatedFood food={food} />
                            </>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default AdminDonatedFoods;
