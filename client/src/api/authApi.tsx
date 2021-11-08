import axiosClient from './axiosClient';

const API_URL = 'api/auth';

const authApi = {
  register(data: any) {
    const url = `${API_URL}/register`;
    return axiosClient.post(url, data);
  },
  login(data: any) {
    const url = `${API_URL}/login`;
    return axiosClient.post(url, data);
  },
};

export default authApi;
