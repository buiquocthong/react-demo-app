import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('API Response:', response.data); // Kiểm tra dữ liệu nhận được từ API
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};


export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};