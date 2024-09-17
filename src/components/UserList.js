import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserList({ users, onDelete }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteClick = (id) => {
    setSelectedUserId(id);
    setIsConfirming(true);
  };

  const confirmDelete = () => {
    onDelete(selectedUserId);
    setIsConfirming(false);
    setSelectedUserId(null);
  };

  const cancelDelete = () => {
    setIsConfirming(false);
    setSelectedUserId(null);
  };

  return (
    <div>
      {isConfirming && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-400 text-white">
            <tr>
              {/* <th className="py-3 px-4 text-left">ID</th> */}
              <th className="py-3 px-4 text-left">First Name</th>
              <th className="py-3 px-4 text-left">Last Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                {/* <td className="py-3 px-4">{user.id}</td> */}
                <td className="py-3 px-4">{user.firstName}</td>
                <td className="py-3 px-4">{user.lastName}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">
                  <Link to={`/edit/${user.id}`} className="text-blue-500 hover:underline mr-2">Edit</Link>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
