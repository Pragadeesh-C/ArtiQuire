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

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
