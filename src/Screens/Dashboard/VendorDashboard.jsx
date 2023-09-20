import React from "react";
import "../../Styles/Dashboard.css";
import Table from "../../components/Table";
import SplineChart from "../../components/Graph";
const VendorDashboard = () => {
  return (
    <div className="dashboard">
      <SplineChart />
      <Table
        title={"Shipments"}
        status={"Active Shipments"}
        job={"VendorName"}
        product={"Product"}
        details={"PhoneNumber"}
        credentials={"Email"}
        Location={"Location"}
        roleName={'Manufacturer'}
      />
    </div>
  );
};

export default VendorDashboard;
