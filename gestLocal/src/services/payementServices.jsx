import axiosInstance from "../api/api";
export async function getUserPayements(user) {
    const response = await axiosInstance.get(`/payement/${user}`);
    console.log("response", response.data);
    return response.data;
}