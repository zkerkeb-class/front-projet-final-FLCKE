import axiosInstance from "../api/api";
export async function addPicture(formData) {
    const response = await axiosInstance.post("/picture/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}
export async function getPicture(id) {
    const response = await axiosInstance.get(`/picture/${id}`);
    return response.data;
}