import React from 'react';

function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td className="border p-2">{user.firstName}</td>
      <td className="border p-2">{user.lastName}</td>
      <td className="border p-2">{user.email}</td>
      <td className="border p-2">{user.phone}</td>
      <td className="border p-2">
        <button
          onClick={() => onEdit(user)}
          className="bg-yellow-500 text-white p-1 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserRow;