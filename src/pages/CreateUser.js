import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thay thế useHistory bằng useNavigate
import UserForm from '../components/UserForm';
import { useUsers } from '../hooks/useUsers';

function CreateUser() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const { addUser } = useUsers();

  const handleSubmit = async (userData) => {
    await addUser(userData);
    navigate('/'); // Sử dụng navigate thay cho history.push
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Create New User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateUser;
