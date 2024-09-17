import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { useUsers } from '../hooks/useUsers';

function UserManagement() {
  const { users, deleteUser } = useUsers();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">User List</h2>
        <Link to="/create" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add New User
        </Link>
      </div>
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}

export default UserManagement;