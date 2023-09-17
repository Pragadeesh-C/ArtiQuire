import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./style.css";

function Table() {
  const columnDefs = [
    { field: "VendorName", cellStyle: { fontSize: "11px", marginTop: "2%" ,color:'black'},cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Product", cellStyle: { fontSize: "11px", marginTop: "2%",color:'black' },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "PhoneNumber", cellStyle: { fontSize: "11px", marginTop: "2%",color:'black' },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Email", cellStyle: { fontSize: "11px", marginTop: "2%",color:'black' },cellClass:'suppress-movable-col',suppressMovable:true },
    { field: "Location", cellStyle: { fontSize: "11px", marginTop: "2%",color:'black' },cellClass:'suppress-movable-col',suppressMovable:true },
    {
      field: "Status",
      cellStyle: function (params) {
        if (params.value === "Completed") {
          return { color: "#16C098", fontSize: "11px", marginTop: "2%" };
        } else if (params.value === "In Progress") {
          return { color: "orange", fontSize: "11px", marginTop: "2%" };
        } else if (params.value === "Pending") {
          return { color: "red", fontSize: "11px", marginTop: "2%" };
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
    <div
      style={{
        display: "flex",
        background: "#F8F9FE",
        justifyContent: "center",
        alignItems: "center",
        flex:  1
      }}
    >
      <div
        style={{
          border: "0.5px solid black",
          borderRadius: "20px",
          width: "90%",
          height: "800px",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexDirection: "column", display: "flex" }}>
            <div
              style={{
                color: "black",
                fontWeight: "500",
                marginLeft: "30%",
                marginTop: "30%",
              }}
            >
              Shipments
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#16C098",
                marginLeft: "30%",
                width: "90px",
              }}
            >
              Active Shipments
            </div>
          </div>

          <div style={{ flexDirection: "row", marginLeft: "50%" }}>
            <div style={{ marginTop: "10%" }}>
              <label htmlFor="vendorSelect" style={{color:'black'}}>Select Vendor:</label>
              <select
                id="vendorSelect"
                value={selectedVendor}
                onChange={(e) => setSelectedVendor(e.target.value)}
              >
                <option value="">Select a Vendor</option>
                {originalData.map((vendor) => (
                  <option key={vendor.VendorName} value={vendor.VendorName}>
                    {vendor.VendorName}
                  </option>
                ))}
              </select>

              <button
                className="custom-button"
                onClick={addVendor}
                disabled={!selectedVendor}
              >
                Add vendor
              </button>
            </div>
          </div>
        </div>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} className="table" />
      </div>
    </div>
  );
}

export default Table;