import React from "react";
import Sidebar from "../SuperAdminMain/Sidebar";
import User from "../UserManagement/User";

const UserPage = () => {
  return (
    <div>
      <section className="w-full h-[100vh] flex bg-gray-100 ">
        <Sidebar />
        <User />
      </section>
    </div>
  );
};

export default UserPage;
