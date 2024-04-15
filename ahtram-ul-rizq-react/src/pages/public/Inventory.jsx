import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getApiService from '../../services/apiServices/getApiService';
import endPoints from '../../constants/endPoints';
import RenderDonatedFood from '../../components/RenderDonatedFood';
// import putApiService from '../../services/apiServices/putApiService';
const Inventory = () => {


    const [donatedFoodsData, setDonatedFoodsData] = useState([]);
    const [totalMealPacks, setTotalMealPacks] = useState(0);
    const [deliveredMealPacks, setDeliveredMealPacks] = useState(0);
    const [pendingMealPacks, setPendingMealPacks] = useState(0);


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
        fetchAllDonatedFoods();
    }, []);


    useEffect(() => {
        setTotalMealPacks(donatedFoodsData.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

        var pendingData = donatedFoodsData.filter((ele) => ele.status == "PENDING")
        setPendingMealPacks(pendingData.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

        var deliveredData = donatedFoodsData.filter((ele) => ele.status == "RECIEVED")
        setDeliveredMealPacks(deliveredData.reduce((a,b) => {
            return a+Number(b.amountOfMealPacks)
        }, 0))

    },[donatedFoodsData])

    


  return (
    <>
        <h1>Donated Foods</h1>
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
    </>
  )
}

export default Inventory