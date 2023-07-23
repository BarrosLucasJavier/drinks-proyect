import axios from 'axios';

const apiUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (body) => {
    try {
        const url = `${apiUrl}/register`;
        const { data } = await axios.post(url, body);
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(error.response.data.message)
    }
}
export const userLogin = async (body) => {
    try {
        const url = `${apiUrl}/login`;
        const { data } = await axios.post(url, body);
        console.log("data service", data);
        return data;
    } catch (error) {
        console.error(error.response.data.message);
        throw new Error(error.response.data.message)
    }
}
