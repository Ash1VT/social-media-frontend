import axios from "axios";

export const sendPrivateRequest = async (request) => {
    try {
        await request();
    }
    catch (error){
        if (error.response?.status === 401 || error.response?.status === 422){

            try {
                await axios.get('/api/refresh');
                await request();
            }
            catch (error) {
                return error.response?.data;
            }
        }
    }
}