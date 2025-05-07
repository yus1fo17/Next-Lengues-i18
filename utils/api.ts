
import axios, { AxiosError } from 'axios';


const api = axios.create({
  baseURL: '',

});

api.interceptors.response.use(
  response => response, 
  async (error: AxiosError) => {

    if (error.response && error.response.status === 401) {
      try {
      
        const originalRequest = error.response.config;
        originalRequest.headers.Authorization = `Bearer `;
        
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);


export default api;
