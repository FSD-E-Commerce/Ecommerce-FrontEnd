import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const Report = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      name: "Mani",
      role: "Admin",
      reports: 3,
      reportData: "2024-12-01",
      status: "Pending",
      actions: ["accept", "view"],
    },
    {
      id: 2,
      name: "Pavan",
      role: "User",
      reports: 2,
      reportData: "2024-11-29",
      status: "Pending",
      actions: ["accept", "view"],
    },
    {
      id: 3,
      name: "Vicky",
      role: "User",
      reports: 5,
      reportData: "2024-12-03",
      status: "Pending",
      actions: ["accept", "view"],
    },
    {
      id: 4,
      name: "David",
      role: "Admin",
      reports: 2,
      reportData: "2024-12-04",
      status: "Pending",
      actions: ["accept", "view"],
    },
    {
      id: 5,
      name: "Delli",
      role: "User",
      reports: 6,
      reportData: "2024-11-28",
      status: "Pending",
      actions: ["accept", "view"],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Filter Reports
  const handleFilter = () => {
    let filteredReports = reports;

    if (searchQuery) {
      filteredReports = filteredReports.filter((report) =>
        report.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRole) {
      filteredReports = filteredReports.filter(
        (report) => report.role === selectedRole
      );
    }

    setReports(filteredReports);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedRole("");
    setReports([
      {
        id: 1,
        name: "Mani",
        role: "Admin",
        reports: 3,
        reportData: "2024-12-01",
        status: "Pending",
        actions: ["accept", "view"],
      },
      {
        id: 2,
        name: "Pavan",
        role: "User",
        reports: 2,
        reportData: "2024-11-29",
        status: "Pending",
        actions: ["accept", "view"],
      },
      {
        id: 3,
        name: "Vicky",
        role: "User",
        reports: 5,
        reportData: "2024-12-03",
        status: "Pending",
        actions: ["accept", "view"],
      },
      {
        id: 4,
        name: "David",
        role: "Admin",
        reports: 2,
        reportData: "2024-12-04",
        status: "Pending",
        actions: ["accept", "view"],
      },
      {
        id: 5,
        name: "Delli",
        role: "User",
        reports: 6,
        reportData: "2024-11-28",
        status: "Pending",
        actions: ["accept", "view"],
      },
    ]);
  };

  const handleActive = (id) => {
    setReports((prevData) =>
      prevData.map((reports) =>
        reports.id === id ? { ...reports, status: "Active" } : reports
      )
    );
  };

  const handleView = (id) => {
    setReports((prevData) =>
        prevData.map((reports) =>
            reports.id === id ? { ...reports, status: "Viewed" } : reports
    )
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 mt-[60px] md:mt-0">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Admin</h2>
          <p className="text-3xl font-bold text-gray-800">{reports.length}</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-gray-800">
            {reports.filter((report) => report.role === "Admin").length}
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold text-gray-700">
            Reports Generated
          </h2>
          <p className="text-3xl font-bold text-gray-800">
            {reports.reduce((total, report) => total + report.reports, 0)}
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap items-center justify-between mb-4 bg-white p-4 shadow-md rounded-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Choose a Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Apply Filter
          </button>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Report Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border border-gray-300 text-left">Name</th>
              <th className="p-4 border border-gray-300 text-left">Role</th>
              <th className="p-4 border border-gray-300 text-left">Reports</th>
              <th className="p-4 border border-gray-300 text-left">
                ReportDate
              </th>
              <th className="p-4 border border-gray-300 text-left">Status</th>
              <th className="p-4 border border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-100">
                <td className="p-4 border border-gray-300">{report.name}</td>
                <td className="p-4 border border-gray-300">{report.role}</td>
                <td className="p-4 border border-gray-300">{report.reports}</td>
                <td className="p-4 border border-gray-300">
                  {report.reportData}
                </td>
                <td
                  className={`p-4 border border-gray-300 ${
                    report.status === "Active"
                      ? "text-green-600"
                      : report.status === "Inactive"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {report.status}
                </td>
                <td className="p-4 border border-gray-300">
                    <button onClick={() => handleActive(report.id)}
                        className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 mr-2 rounded-full"
                        title="Active">
                        <FaCheck />
                    </button>
                    <button onClick={() => handleView(report.id)}
                        className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
                        title="Active">
                        <BsEyeFill/>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
