import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { fetchUsers, updateUser } from '../services/api';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const users = await fetchUsers();
        const foundUser = users.find(u => u.id === parseInt(id, 10));
        console.log('ID from URL:', id); // Kiểm tra ID từ URL
        console.log('Users list:', users); // Kiểm tra danh sách người dùng
        if (foundUser) {
          setUser(foundUser);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        navigate('/');
      }
    };

    loadUser();
  }, [id, navigate]);

  const handleSubmit = async (userData) => {
    await updateUser(id, userData);
    navigate('/');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Edit User</h2>
      <UserForm initialData={user} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditUser;
