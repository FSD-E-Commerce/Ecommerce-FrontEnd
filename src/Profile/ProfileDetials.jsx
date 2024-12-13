import React, { useState } from "react";

const SuperAdminProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState("https://via.placeholder.com/100");

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-5">
      {/* Profile Header */}
      <div className="bg-blue-500 text-white rounded-lg p-5 flex items-center">
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Admin Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          <label
            htmlFor="photo-upload"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-1 rounded-md cursor-pointer hover:bg-gray-600"
          >
            Change Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </div>
        <div className="ml-5">
          <h1 className="text-2xl font-bold">Super Admin</h1>
          <p>Email: admin@example.com</p>
          <p>Role: Super Admin</p>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="bg-white rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-xl font-bold mb-3">Admin Actions</h2>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Edit Profile</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete User</button>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-xl font-bold mb-3">User Management</h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">John Doe</td>
              <td className="border border-gray-300 px-4 py-2">johndoe@example.com</td>
              <td className="border border-gray-300 px-4 py-2">Admin</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
              <td className="border border-gray-300 px-4 py-2">janesmith@example.com</td>
              <td className="border border-gray-300 px-4 py-2">Editor</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-xl font-bold mb-3">Recent Activities</h2>
        <ul className="list-disc list-inside">
          <li>Logged in at 10:00 AM</li>
          <li>Added a new user at 10:30 AM</li>
          <li>Updated settings at 11:00 AM</li>
        </ul>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
