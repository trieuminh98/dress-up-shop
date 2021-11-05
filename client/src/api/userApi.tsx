import axiosClient from './axiosClient';

const API_URL = 'api/users';

const userApi = {
  getUser() {
    const url = `${API_URL}/userTest`;
    return axiosClient.get(url);
  },

  postUser(data: any) {
    const url = `${API_URL}/userPostTest`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
