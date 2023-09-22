import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./Screens/Dashboard";
import SuppliersList from "./Screens/Suppliers/list";
import LogisticsList from "./Screens/Logistics";
import Register from "./Screens/Register";
import LogisticsOrder from "./Screens/Logistics/logisticsorder";
import InventoryList from "./Screens/Inventory/InventoryList";
import FinanceList from "./Screens/Finance/FinanaceList";
import FinanceHistory from "./Screens/Finance/Finance";
import VendorOrder from "./Screens/Vendors/VendorOrder";
import VendorList from "./Screens/Vendors/VendorList";
import ManufacturerDashboard from "./Screens/Dashboard/ManufacturerDashboard";
import SupplierDashboard from "./Screens/Dashboard/SupplierDashboard";
import LogisticsDashboard from "./Screens/Dashboard/LogisticsDashboard";
import VendorDashboard from "./Screens/Dashboard/VendorDashboard";
import FinanceDashboard from "./Screens/Dashboard/FinanceDashboard";
import ManufacturerList from "./Screens/Manufacturers/list";
import ManufacturerOrders from "./Screens/Manufacturers";
import SupplierOrders from "./Screens/Suppliers/orders";
import VendorOD from "./Screens/Vendors/VendorOd";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       const currentUserId = user.uid;
  //       setUserId(currentUserId);

  //       const usersDataCollection = collection(db, "UsersData");
  //       const userQuery = query(usersDataCollection, where("uid", "==", currentUserId));

  //       getDocs(userQuery)
  //         .then((querySnapshot) => {
  //           querySnapshot.forEach((doc) => {
  //             const userData = doc.data();
  //             const userRole = userData.role;

  //             console.log("User Role:", userRole);

  //             setUserRole(userRole);
  //           });
  //         })
  //         .catch((error) => {
  //           console.log("Error fetching user role:", error);
  //         });
  //     } else {
  //       setUserId(null);
  //       setUserRole(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   if (location.pathname === "/" || location.pathname === "/register") {
  //     setIsVisible(false);
  //   } else {
  //     setIsVisible(true);
  //   }
  // }, [location.pathname]);

  return (
    <Router>
      {/* {userRole === "vendor" ? <VendorNav /> : <Navbar />} */}
      <Navbar />
      {/* <VendorNav /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/manufacturerdashboard"
          element={<ManufacturerDashboard />}
        />
        <Route path="/supplierdashboard" element={<SupplierDashboard />} />
        <Route path="/logisticsdashboard" element={<LogisticsDashboard />} />
        <Route path="/vendordashboard" element={<VendorDashboard />} />
        <Route path="/financedashboard" element={<FinanceDashboard />} />
        <Route path="/supplierorders" element={<SupplierOrders />} />
        <Route path="/supplierlist" element={<SuppliersList />} />
        <Route path="/manufacturerlist" element={<ManufacturerList />} />
        <Route path="/vendorOrder" element={<VendorOD />} />
        <Route path="/logisticslist" element={<LogisticsList />} />
        <Route path="/logisticsorders" element={<LogisticsOrder />} />
        <Route path="/inventorylist" element={<InventoryList />} />
        <Route path="/inventoryorders" element={<InventoryList />} />
        <Route path="/financelist" element={<FinanceList />} />
        <Route path="/financeorder" element={<FinanceHistory />} />
        <Route path="/vendororders" element={<VendorOrder />} />
        <Route path="/vendorlist" element={<VendorList />} />
      </Routes>
    </Router>
  );
};

export default App;
// vendorOrder