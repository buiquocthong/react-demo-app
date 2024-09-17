import { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/api';

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      console.log('Users loaded:', data); // Kiểm tra dữ liệu người dùng
      setUsers(data);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const addUser = async (userData) => {
    try {
      await createUser(userData);
      loadUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const editUser = async (id, userData) => {
    try {
      await updateUser(id, userData);
      loadUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return { users, addUser, updateUser: editUser, deleteUser: removeUser };
}
