import React from "react";

import Dashboard from "../SuperAdminMain/Dashboard";
import Sidebar from "../SuperAdminMain/Sidebar";

const HomePage = () => {
  return (
    <div>
      <section className="flex w-full ">
        <Sidebar />
        <Dashboard />
      </section>
      <section></section>
    </div>
  );
};

export default HomePage;
