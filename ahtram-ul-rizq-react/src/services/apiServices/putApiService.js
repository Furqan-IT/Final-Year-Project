// putApiService.js
import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import API_V1 from "../../constants/apiV1";

const putApiService = async (endPoint, data) => {
    const response = await axios.put(`${BASE_URL}${API_V1}${endPoint}`, data);
    return response;
};

export default putApiService;
