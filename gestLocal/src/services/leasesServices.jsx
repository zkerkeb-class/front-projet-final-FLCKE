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
export async function getLeaseByTenant(id) {
    const response = await axiosInstance.get(`/leases/getAll/${id}`);
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

export async function downloadLease(id) {
    const response = await axiosInstance.get(`/generate-contrat/${id}`, {
        responseType: 'blob' // Important for downloading files
    });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `lease_${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); // Clean up the URL object
    return response.data;
}
