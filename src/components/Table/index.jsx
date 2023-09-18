import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid"; 

import "../../Styles/Table.css";

function Table({title,status,job,product,details,credentials,Location}) {
const columns = [
  { field: job, headerName: "Vendor Name", flex: 1 },
  { field: product, headerName: "Product", flex: 1 },
  { field: details, headerName: "Phone Number", flex: 1 },
  { field: credentials, headerName: "Email", flex: 1 },
  { field: Location, headerName: "Location", flex: 1 },
  {
    field: "Status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      const status = params.value;
      let backgroundColor = "";
      if (status === "Completed") {
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
    VendorName: "Jane Cooper",
    Product: "Diary",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Location: "Jammu",
    Status: "Completed",
  },
  {
    id: 2,
    VendorName: "John Doe",
    Product: "Notebook",
    PhoneNumber: "(123) 456-7890",
    Email: "john@gmail.com",
    Location: "New York",
    Status: "In Progress",
  },
  {
    id: 3,
    VendorName: "Alice Johnson",
    Product: "Calendar",
    PhoneNumber: "(555) 123-4567",
    Email: "alice@yahoo.com",
    Location: "Los Angeles",
    Status: "Pending",
  },
];


  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);

  const addVendor = () => {
    const filteredData = rows.filter(
      (row) => row.VendorName === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">{title}</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> {status} </h5>
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
                <option value="">Select Vendor</option>
                {rows.map((vendor) => (
                  <option key={vendor.id} value={vendor.VendorName}>
                    {vendor.VendorName} - {vendor.Location}
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

export default Table;