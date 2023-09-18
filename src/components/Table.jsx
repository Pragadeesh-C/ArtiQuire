import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./style.css";

function Table() {
  const columnDefs = [
    { field: "VendorName", cellStyle: { fontSize: "11px" ,color:'black',  fontFamily: "Poppins"},cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Product", cellStyle: { fontSize: "11px",color:'black', fontFamily: "Poppins, sans-serif" },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "PhoneNumber", cellStyle: { fontSize: "11px",color:'black', fontFamily: "Poppins, sans-serif" },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Email", cellStyle: { fontSize: "11px", color:'black', fontFamily: "Poppins, sans-serif" },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Location", cellStyle: { fontSize: "11px", color:'black', fontFamily: "Poppins, sans-serif" },cellClass:'suppress-movable-col',suppressMovable:true },
    {
      field: "Status",
      cellStyle: function (params) {
        if (params.value === "Completed") {
          return { color: "#16C098", fontSize: "11px", fontFamily: "Poppins, sans-serif"};
        } else if (params.value === "In Progress") {
          return { color: "orange", fontSize: "11px", fontFamily: "Poppins, sans-serif" };
        } else if (params.value === "Pending") {
          return { color: "red", fontSize: "11px", fontFamily: "Poppins, sans-serif"  };
        }
        return null;
      },cellClass:'suppress-movable-col',suppressMovable:true
    },
  ];

  const [originalData] = useState([
    {
      VendorName: "Jane Cooper",
      Product: "Diary",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Location: "Jammu",
      Status: "Completed",
    },
    {
      VendorName: "John Doe",
      Product: "Notebook",
      PhoneNumber: "(123) 456-7890",
      Email: "john@gmail.com",
      Location: "New York",
      Status: "In Progress",
    },
    {
      VendorName: "Alice Johnson",
      Product: "Calendar",
      PhoneNumber: "(555) 123-4567",
      Email: "alice@yahoo.com",
      Location: "Los Angeles",
      Status: "Pending",
    },
  ]);

  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);

  const addVendor = () => {
    const filteredData = originalData.filter(
      (row) => row.VendorName === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div  className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Shipments</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> Active Shipments </h5>
            </div>
          </div>

          <div className="vendor-container">
            <div className="vendor-label">
              {/* <label htmlFor="vendorSelect" >Select Vendor:</label> */}
              <select
                id="vendorSelect"
                className="vendorSelect"
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
              >
                <option  value="">Select Vendor</option>
                {originalData.map((vendor) => (
                  <option key={vendor.VendorName} value={vendor.VendorName}>
                    {vendor.VendorName}/{vendor.Location}
                  </option>
                ))}
              </select>

              <button
                className="custom-button"
                onClick={addVendor}
                disabled={!selectedVendor}
              >
                <label>Add vendor</label>
              </button>
            </div>
          </div>
        </div>
        <div className="ag-grid-container">

      <AgGridReact  columnDefs={columnDefs} rowData={rowData}  className="ag-theme-alpine"  />
        </div>
      </div>
    </div>
  );
}

export default Table;