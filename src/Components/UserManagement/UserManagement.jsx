// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUser = async () => {
//     const { data } = await axios.get("http://localhost:8000/users/get");
//     setUsers(data);
//     console.log(data);
    
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const handleUnblock = async (id) => {
//     try {
//       await axios
//         .patch(`http://localhost:8000/users/${id}/status`)
//         .then((res) => {
//           toast.success(res.data.message);
//           setUsers(
//             users.map((user) =>
//               user.id === id ? { ...user, status: "Active" } : user
//             )
//           );
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }

//     const handleDelete = async (id) => {
//       try {
//         await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
//           toast.success(res.data.message);
//           setUsers(users.filter((user) => user._id !== id));
//         });
//       } catch (error) {
//         console.log(error);
        
//       }
//     };
//     return (
//       <div className="min-h-screen bg-gray-100 p-10">
//         <h1 className="text-3xl font-semibold mb-6">User Management</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {users.map((user) => (
//             <div className="bg-white shadow-md rounded-lg p-6" key={user.id}>
//               <h2 className="font-semibold text-lg mb-2">Name: {user.name}</h2>
//               <p>Email: {user.email}</p>
//               <p>Appointments: {user.appointments}</p>
//               <p className="">Status: {user.status}</p>
//               <div className="mt-4 flex gap-4">
//                 {user.status === "Blocked" && (
//                   <button 
//                   onClick={() => handleUnblock(user._id)}
//                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//                     Unblock
//                   </button>
//                 )}
//                 <button
//                 onClick={() => handleDelete(user._id)}
//                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
// };

// export default UserManagement;

import React, { useState } from "react";
import UserCard from "./UserCard";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Pavan",
      email: "pavan123@gmail.com",
      isBlocked: true,
      appointments: 5,
    },
    {
      id: 2,
      name: "Mani",
      email: "mani123@gmail.com",
      isBlocked: true,
      appointments: 5,
    },
    {
      id: 3,
      name: "John",
      email: "john123@gmail.com",
      isBlocked: true,
      appointments: 5,
    },
    {
      id: 4,
      name: "Vicky",
      email: "vicky123@gmail.com",
      isBlocked: true,
      appointments: 5,
    },
    {
      id: 5,
      name: "Divya",
      email: "divya123@gmail.com",
      isBlocked: true,
      appointments: 15,
    },
  ]);

  const handleBlockUser = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user
        // user.id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onBlockToggle={handleBlockUser}
          onDelete={handleDeleteUser}
        />
      ))}

    </div>

  );
};

export default UserManagement;
