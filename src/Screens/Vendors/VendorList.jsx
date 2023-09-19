import "../../Styles/Table.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid"; 



const columns = [
  { field: "Name", headerName: "Name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "PhoneNumber", headerName: "PhoneNumber", flex: 1 },
  { field: "Role", headerName: "Role", flex: 1 },
  { field: "Location", headerName: "Location", flex: 1 },

  // { field: "AccountNo", headerName: "Account No", flex: 1 },
  // { field: "AmountCredited", headerName: "Amount Credited", flex: 1 },
  // { field: "Date", headerName: "Date", flex: 1 },
  
//   { field: "Material", headerName: "Material", flex: 1 },
//   { field: "Company", headerName: "Company", flex: 1 },

  // {
  //   field: "Status",
  //   headerName: "Status",
  //   flex: 1,
  //   renderCell: (params) => {
  //     const status = params.value;
  //     let backgroundColor = "";
  //     if (status === "Delivered") {
  //       backgroundColor = "#00B087";
        
  //     } else if (status === "In Progress") {
  //       backgroundColor = "orange";
  //     } else if (status === "Pending") {
  //       backgroundColor = "#DF0404";
  //     }
  //     return (
  //       <div
  //         style={{
  //           backgroundColor,
  //           width: "60%",
  //           height: "70%",
  //           color: "white",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         {status}
  //       </div>
  //     );
  //   },
  // },
];

const rows = [
  {
    id: 1,
    Name: "Jane",
    Email: "jane@microsoft.com",
    PhoneNumber: "(225) 555-0118",
    Role:"Retailer",
    Location: "Jammu",
    // Status: "Delivered",
    // AccountNo: "693212179590373",
    // AmountCredited: "10,000",
    // Date:"12-10-2023",
    // Status: "Credited",
    // Material: "Diary",
    // Company: "DiaryPro",
  },
  {
    id: 2,
    Name: "Alice",
    Email: "jane@microsoft.com",
    PhoneNumber: "(123) 456-7890",
    Role:"Wholesaler",
    Location: "New York",
    // Status: "In Progress",
    // AccountNo: "093212149590323",
    // AmountCredited: "19,000",
    // Date:"12-10-2023",
    // Status: "Pending",
    // Material: "Notebook",
    // Company: "NotePro",
  },
  {
    id: 3,
    Name: "Jhon",
    Email: "jane@microsoft.com",
    PhoneNumber: "(555) 123-4567",
    Role:"Retailer",
    Location: "Los Angeles",
    // Status: "Pending",
    // AccountNo: "193212109590329",
    // AmountCredited: "22,500",
    // Date:"12-10-2023",
    // Status: "Rejected",
    // Material: "Calendar",
    // Company: "CalPro",
  },
];

function VendorList() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);

  const addVendor = () => {
    const filteredData = rows.filter(
      (row) => row.Name === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Vendor List</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading">Vendors</h5>
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
                  <option key={vendor.Name} value={vendor.Name}>
                    {vendor.Name}/{vendor.Location}
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
            height: "80%",
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

export default VendorList;