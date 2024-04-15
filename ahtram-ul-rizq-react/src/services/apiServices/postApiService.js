import axios from "axios";
import BASE_URL from "../../constants/baseUrl";
import API_V1 from "../../constants/apiV1";


const postApiService = async (endPoint, formData, config)=> {
    const response = await axios.post(`${BASE_URL}${API_V1}${endPoint}`, formData, config&&config);
    return response
}
export default postApiService;