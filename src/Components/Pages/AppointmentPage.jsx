import React from "react";
import Appointment from "../Appointment/Appointment";
import Sidebar from "../SuperAdminMain/Sidebar";
// import Sidebar from "../SuperAdminMain/Sidebar";

const AppointmentPage = () => {
  return (
    <div>
      <section className="flex w-full ">
        <Sidebar/>
        <Appointment />
      </section>
    </div>
  );
};

export default AppointmentPage;
