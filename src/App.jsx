import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./Screens/Dashboard";
import Orders from "./Screens/Orders";
import Suppliers from "./Screens/Suppliers";
import Logistics from "./Screens/Logistics";
import Manufacturers from "./Screens/Manufacturers";

const App = () => {
  return (
    // <Router>
    //   {/* <Navbar /> */}
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //   </Routes>
    // </Router>
    <div>
      <Dashboard/>
      <Suppliers/>
      <Orders/>
      <Logistics/>
      <Manufacturers/>
    </div>
  );
};

export default App;
