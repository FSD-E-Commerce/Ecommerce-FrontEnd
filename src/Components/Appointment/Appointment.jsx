import axios from "axios";
import React, { useEffect, useState } from "react";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/appointment/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  const updateStatus = (id, status) => {
    axios
      .patch(`http://localhost:8000/appointment/${id}`, { status })
      .then((res) => {
        setAppointments(
          appointments.map((app) =>
            app.id === id ? { ...app, status: res.data.status } : app
          )
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-6 space-y-6 mt-[60px]  md:mt-0">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">Appointments</h1>
        
      </header>
      <hr className="border border-black w-full" />
        
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse border text-left">
          <thead className="">
            <tr>
              <th className="border border-gray-300 bg-blue-800 text-white p-4">
                Client Name
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Email
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Number
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Gender
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Age
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Lawyer Name
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Case Type
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Date
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Time
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Status
              </th>
              <th className="border border-gray-300 bg-blue-800 text-white p-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border border-gray-300 p-3">
                  {appointment.clientName}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.email}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.number}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.gender}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.age}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.lawyerName}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.caseType}
                </td>
                <td className="border border-gray-300 p-3">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-3">
                  {appointment.time}
                </td>
                <td
                  className={`border border-gray-300 p-3 ${
                    appointment.status === "Pending"
                      ? "text-yellow-600"
                      : appointment.status === "Apporved"
                      ? "text-green-500"
                      : "text-green-500"
                  }`}
                >
                  {appointment.status}
                </td>
                <td className="border border-gray-300 p-7 flex gap-2">
                  <button
                    onClick={() => updateStatus(appointment.id,"Approved")}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-0 px-2 rounded-full"
                    // title="Accept"
                  >
                    ✓
                  </button>
                  <button
                    onClick={() => updateStatus(appointment.id,"Rejected")}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-0 px-2 rounded-full"
                    // title="Reject"
                  >
                    ✕
                  </button>
                  {/* <button
                    onClick={() => handleDelete(appointment.id)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-0 px-2 rounded-full"
                    title="Delete"
                  >
                    🗑
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
