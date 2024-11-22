import React, { useState } from "react";
import {
  FiUsers,
  FiFolder,
  FiDollarSign,
  FiBell,
  FiMessageCircle,
} from "react-icons/fi";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

function AdminDashboard() {
  const [notifications, setNotifications] = useState([
    "New client signed up: John Doe",
    "Project 'E-commerce Website' moved to Development Phase",
    "Payment received: $1500 from Jane Smith",
  ]);

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 10000, 7500, 12000, 14000, 9000],
        backgroundColor: "rgba(34, 197, 94, 0.7)", // Green theme
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["In Progress", "Completed", "Pending"],
    datasets: [
      {
        data: [12, 8, 5],
        backgroundColor: [
          "rgba(191, 223, 14, 0.7)", // Blue
          "rgba(34, 197, 94, 0.7)", // Green
          "rgba(130, 15, 15, 0.7)", // Pink
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-white mb-6 text-center">Admin Dashboard</h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center gap-4 hover:bg-gray-700 transition">
          <FiFolder className="text-blue-400 text-4xl" />
          <div>
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-400">Active Projects</p>
          </div>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center gap-4 hover:bg-gray-700 transition">
          <FiUsers className="text-green-400 text-4xl" />
          <div>
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-400">Active Clients</p>
          </div>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center gap-4 hover:bg-gray-700 transition">
          <FiDollarSign className="text-yellow-400 text-4xl" />
          <div>
            <h2 className="text-2xl font-bold">$000000</h2>
            <p className="text-gray-400">Total Revenue</p>
          </div>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 flex items-center gap-4 hover:bg-gray-700 transition">
          <FiBell className="text-red-400 text-4xl" />
          <div>
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-400">New Notifications</p>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Revenue Trends</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">
            Project Status Distribution
          </h2>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Notifications</h2>
        <ul className="space-y-3">
          {notifications.map((note, index) => (
            <li
              key={index}
              className="p-3 bg-gray-700 rounded-lg border border-gray-600"
            >
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Client Management */}
      <div className="bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Active Clients
        </h2>
        <table className="w-full border border-gray-600 text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-400">
            <tr>
              <th className="p-3 border-b border-gray-600">Name</th>
              <th className="p-3 border-b border-gray-600">Email</th>
              <th className="p-3 border-b border-gray-600">Project</th>
              <th className="p-3 border-b border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-700">
              <td className="p-3 border-b border-gray-600">John Doe</td>
              <td className="p-3 border-b border-gray-600">john@example.com</td>
              <td className="p-3 border-b border-gray-600">Business Website</td>
              <td className="p-3 border-b border-gray-600 text-blue-400">
                In Progress
              </td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="p-3 border-b border-gray-600">Jane Smith</td>
              <td className="p-3 border-b border-gray-600">jane@example.com</td>
              <td className="p-3 border-b border-gray-600">E-commerce Website</td>
              <td className="p-3 border-b border-gray-600 text-green-400">
                Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
