import axiosInstance from "../api/api";
export async function createLease(data) {
    const response = await axiosInstance.post('/leases', data);
    return response.data;
}
export async function updateLease(id, data) {
    const response = await axiosInstance.put(`/leases/${id}`, data);
    return response.data;
}
export async function getMyLeases(userId) {
    console.log("userId", userId);
    const response = await axiosInstance.get(`/leases/getAllByOwner/${userId}`);
    console.log("response", response.data);
    return response.data;
}
export async function getLeaseById(id) {
    const response = await axiosInstance.get(`/leases/${id}`);
    return response.data;
}
export async function deleteLease(id) {
    const response = await axiosInstance.delete(`/leases/${id}`);
    return response.data;
}
export async function suspendLease(id) {
    const response = await axiosInstance.put(`/leases/suspend/${id}`);
    return response.data;
}
