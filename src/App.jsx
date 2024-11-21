// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components


// Import the Login Page Components
import DoctorLogin from "./pages/DoctorLogin";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import PharmaLogin from "./pages/PharmaLogin";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/receptionist-login" element={<ReceptionistLogin />} />
        <Route path="/pharma-login" element={<PharmaLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
