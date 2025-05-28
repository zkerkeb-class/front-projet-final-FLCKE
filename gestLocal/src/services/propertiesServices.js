
import axiosInstance from '../api/api';
export async function createProperty(data) {
    const response = await axiosInstance.post('/properties', data);
    return response.data;
}
export async function updateProperty(id, data) {
    const response = await axiosInstance.put(`/properties/${id}`, data);
    return response.data;
}
export async function getMyProperties(userId) {
    const response = await axiosInstance.get(`/properties/getAll/${userId}`);
    return response.data;
}
export async function getPropertyById(id) {
    const response = await axiosInstance.get(`/properties/${id}`);
    return response.data;
}
export async function deleteProperties(id) {
    const response = await axiosInstance.delete(`/properties/${id}`);
    return response.data;
}

