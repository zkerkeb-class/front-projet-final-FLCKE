
import axiosInstance from '../api/api';
export async function loginService(data) {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
}
export async function registerService(data) {
    const response = await axiosInstance.post('/auth/register', data);
    console.log('response', response)
    return response.data;
}
export async function updateUser(id, data) {
    const response = await axiosInstance.put(`/user/${id}`, data);
    console.log('response', response)
    return response.data;
}

