// import React from 'react'
// import '../../Styles/Dashboard.css'
import Table from '../../components/Table'
// import Navbar from '../../components/Navbar'

// const LogisticsList = () => {
//   return (
 
//     <Table title={'Logistics'} status={''} job={'DriverName'} product={"Vehicle License Plate"} details={'PhoneNumber'} credentials={'Email'} Location={'Location'}/>

//   )
// }

// export default LogisticsList
// list of logistics

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid"; 

// import "./style.css"; 

const columns = [
  { field: "DriverName", headerName: "DriverName", flex: 1 },
  { field: "Product", headerName: "Product", flex: 1 },
  { field: "PhoneNumber", headerName: "PhoneNumber", flex: 1 },
  { field: "vehicleNo", headerName: "vehicleNo", flex: 1 },
  { field: "Location", headerName: "Location", flex: 1 },
  {
    field: "Status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      const status = params.value;
      let backgroundColor = "";
      if (status === "Delivered") {
        backgroundColor = "#00B087";
        
      } else if (status === "In Progress") {
        backgroundColor = "orange";
      } else if (status === "Pending") {
        backgroundColor = "#DF0404";
      }
      return (
        <div
          style={{
            backgroundColor,
            width: "60%",
            height: "70%",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {status}
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    DriverName: "Jane Cooper",
    Product: "Diary",
    PhoneNumber: "(225) 555-0118",
    vehicleNo:"JM 4793",
    Location: "Jammu",
    Status: "Delivered",
  },
  {
    id: 2,
    DriverName: "John Doe",
    Product: "Notebook",
    PhoneNumber: "(123) 456-7890",
    vehicleNo:"NY 4793",
    Location: "New York",
    Status: "In Progress",
  },
  {
    id: 3,
    DriverName: "Alice Johnson",
    Product: "Calendar",
    PhoneNumber: "(555) 123-4567",
    vehicleNo:"LA 4793",
    Location: "Los Angeles",
    Status: "Pending",
  },
];

function LogisticsOrder() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);

  const addVendor = () => {
    const filteredData = rows.filter(
      (row) => row.DriverName === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Logistics List</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> Logistics Status </h5>
            </div>
          </div>

          <div className="vendor-container">
            <div className="vendor-label">
              <select
                id="vendorSelect"
                className="vendorSelect"
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
              >
                <option value="">Select Driver</option>
                {rows.map((vendor) => (
                  <option key={vendor.id} value={vendor.DriverName}>
                    {vendor.DriverName} - {vendor.Location}
                  </option>
                ))}
              </select>

              <button
                className="custom-button"
                onClick={addVendor}
                disabled={!selectedVendor}
              >
                Add Vendor
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "90%",
            paddingTop: "3%",
            paddingLeft: "2%",
            paddingRight: "3%",
            paddingBottom: "3%",
          }}
        >
          <DataGrid rows={rowData} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
}

export default LogisticsOrder;