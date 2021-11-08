import axiosClient from './axiosClient';

const API_URL = 'api/users';

const userApi = {
  getUser() {
    const url = `${API_URL}/userTest`;
    return axiosClient.get(url);
  },

  register(data: any) {
    const url = `api/register`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
