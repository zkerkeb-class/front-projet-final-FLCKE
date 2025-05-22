import axiosInstance from './api.js'
import { getToken } from '../utils/auth.js'
// Add a request interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  } )

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token invalide ou expiré → on le supprime
            localStorage.removeItem('token');
            // Optionnel : rediriger l'utilisateur vers /login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
  );


export default axiosInstance;