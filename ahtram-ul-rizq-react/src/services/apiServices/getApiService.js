import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import API_V1 from "../../constants/apiV1";


const getApiService = async (endPoint, formData) => {
    const response = await axios.get(`${BASE_URL}${API_V1}${endPoint}`, formData);
    return response
}
export default getApiService;