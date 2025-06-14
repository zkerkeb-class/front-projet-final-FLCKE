import axiosInstance from "../api/api";
export async function getUserPayements(user) {
    const response = await axiosInstance.get(`/payement/${user}`);
    console.log("response", response.data);
    return response.data;
}
export async function getOwnerPayements(user) {
    const response = await axiosInstance.get(`/payement/owner/${user}`);
    console.log("response", response.data);
    return response.data;
}
export async function getUserLastPayements(user, limit) {
    const response = await axiosInstance.get(`/payement/last/${user}/${limit}`);
    console.log("response", response.data);
    return response.data;
}