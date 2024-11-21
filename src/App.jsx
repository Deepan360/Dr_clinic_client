// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components


// Import the Login Page Components
import DoctorLogin from "./pages/DoctorLogin";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import PharmaLogin from "./pages/PharmaLogin";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./components/admin/Dashboard";

function App() {

  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/receptionist-login" element={<ReceptionistLogin />} />
        <Route path="/pharma-login" element={<PharmaLogin />} />

        <Route path="/admin-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
