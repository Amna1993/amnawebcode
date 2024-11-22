import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Import your pages
import Home from "./pages/Home/Home";
import GetQuote from "./pages/GetQuote/GetQuote";
import Signup from "./pages/Signup/Signup";
import ClientDashboard from "./pages/ClientDashboard/Dashboard";
import AdminDashboard from "./pages/AdminDashboard/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
