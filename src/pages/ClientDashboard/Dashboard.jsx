import React, { useState } from "react";
import { FiUpload, FiMessageCircle, FiBell } from "react-icons/fi";
import { BsFillBarChartFill } from "react-icons/bs";

function ClientDashboard() {
  const [progress, setProgress] = useState(60); // Simulated project progress
  const [messages, setMessages] = useState([
    { id: 1, sender: "Admin", text: "Welcome to your dashboard!" },
    { id: 2, sender: "Admin", text: "Your project is in the design phase." },
  ]);
  const [notifications, setNotifications] = useState([
    "Design phase completed",
    "Development phase started",
  ]);

  const handleFileUpload = () => {
    alert("File uploaded successfully!");
  };

  const handleSendMessage = () => {
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Client Dashboard</h1>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Progress */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BsFillBarChartFill className="text-blue-500 mr-2" />
            Project Progress
          </h2>
          <div className="relative w-full bg-gray-200 rounded-lg h-6">
            <div
              className="absolute top-0 left-0 bg-blue-500 h-6 rounded-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-gray-500">
            {progress}% Completed
          </p>
        </div>

        {/* File Upload */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FiUpload className="text-green-500 mr-2" />
            Upload Documents
          </h2>
          <input
            type="file"
            className="block w-full border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleFileUpload}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Upload File
          </button>
        </div>

        {/* Messages */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FiMessageCircle className="text-purple-500 mr-2" />
            Messages
          </h2>
          <div className="space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-3 bg-gray-100 rounded-lg border border-gray-300"
              >
                <strong>{message.sender}:</strong>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <textarea
            rows="3"
            className="w-full mt-4 p-3 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition mt-2"
          >
            Send Message
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FiBell className="text-yellow-500 mr-2" />
            Notifications
          </h2>
          <ul className="list-disc ml-5">
            {notifications.map((note, index) => (
              <li key={index} className="text-gray-600">
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback and Delivery */}
        <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Final Delivery</h2>
          <p className="text-gray-600 mb-4">
            Your project is ready for delivery. Download your files below.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Download Files
          </button>
          <h2 className="text-xl font-semibold mt-6">Leave Feedback</h2>
          <textarea
            rows="3"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Tell us about your experience..."
          ></textarea>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
