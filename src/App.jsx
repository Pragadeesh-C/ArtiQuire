import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./Screens/Dashboard";
import Orders from "./Screens/Suppliers/orders";
import Suppliers from "./Screens/Suppliers/list";
import Logistics from "./Screens/Logistics";
import Manufacturers from "./Screens/Manufacturers";
import SuppliersList from "./Screens/Suppliers/list";
import SuppliersOrders from "./Screens/Suppliers/orders";
import ManufacturersList from "./Screens/Manufacturers";
import LogisticsList from "./Screens/Logistics";
import Register from "./Screens/Register";
import ManufracturerOrder from "./Screens/Manufacturers";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/supplierorders" element={<SuppliersOrders />} />
        <Route path="/supplierlist" element={<SuppliersList />} />
        <Route path="/manufacturerlist" element={<ManufacturersList />} />
        <Route path="/manufacturerorders" element={<ManufracturerOrder />} />
        <Route path="/logisticslist" element={<LogisticsList />} />
      </Routes>
    </Router>
  );
};

export default App;
