import React from "react";
import LawyerManagement from "../AdminManagement/LawyerManagement";
import Sidebar from "../SuperAdminMain/Sidebar";

const LawyerPage = () => {
  return (
      <section className="w-full flex">
        <Sidebar/>  
        <LawyerManagement />
      </section>
  );
};

export default LawyerPage;
