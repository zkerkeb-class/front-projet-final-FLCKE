import axiosInstance from "../api/api";
export async function getUserPayements(user) {
    const response = await axiosInstance.get(`/payement/${user}`);
    return response.data;
}
export async function getOwnerPayements(user) {
    const response = await axiosInstance.get(`/payement/owner/${user}`);
    return response.data;
}
export async function getUserLastPayements(user, limit) {
    const response = await axiosInstance.get(`/payement/last/${user}/${limit}`);
    return response.data;
}
export async function validPayement(id) {
    const data = {
        "status": "completed"
    }
    const response = await axiosInstance.put(`/payement/${id}`, data);
    return response.data;
}