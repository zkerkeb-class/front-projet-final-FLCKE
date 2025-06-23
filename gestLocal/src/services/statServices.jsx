
import axiosInstance from '../api/api';
export async function getStat(id) {
    const response = await axiosInstance.get(`/stats/${id}`);
    return response.data;
}