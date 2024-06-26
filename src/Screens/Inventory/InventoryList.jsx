import "../../Styles/Table.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid"; 



const columns = [
  { field: "SupplierName", headerName: "Supplier Name", flex: 1 },
  { field: "OrderNo", headerName: "Order No", flex: 1 },
  { field: "Material", headerName: "Material", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "Company", headerName: "Company", flex: 1 },
  { field: "Location", headerName: "Location", flex: 1 },

//   { field: "PhoneNumber", headerName: "PhoneNumber", flex: 1 },
//   {
//     field: "Status",
//     headerName: "Status",
//     flex: 1,
//     renderCell: (params) => {
//       const status = params.value;
//       let backgroundColor = "";
//       if (status === "Delivered") {
//         backgroundColor = "#00B087";
        
//       } else if (status === "In Progress") {
//         backgroundColor = "orange";
//       } else if (status === "Pending") {
//         backgroundColor = "#DF0404";
//       }
//       return (
//         <div
//           style={{
//             backgroundColor,
//             width: "60%",
//             height: "70%",
//             color: "white",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {status}
//         </div>
//       );
//     },
//   },
];

const rows = [
  {
    id: 1,
    SupplierName: "Jane Cooper",
    OrderNo: "(225)",
    Material: "Diary",
    Email: "jane@microsoft.com",
    Company: "DiaryPro",
    Location: "Jammu",
    // PhoneNumber: "(225) 555-0118",
    // Status: "Delivered",
  },
  {
    id: 2,
    SupplierName: "John Doe",
    OrderNo: "(123)",
    Material: "Notebook",
    Email: "jane@microsoft.com",
    Company: "NotePro",
    Location: "New York",
    // PhoneNumber: "(123) 456-7890",
    // Status: "In Progress",
  },
  {
    id: 3,
    SupplierName: "Alice Johnson",
    OrderNo: "(555)",
    Material: "Calendar",
    Email: "jane@microsoft.com",
    Company: "CalPro",
    Location: "Los Angeles",
    // PhoneNumber: "(555) 123-4567",
    // Status: "Pending",
  },
];

function InventoryList() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);

  const addVendor = () => {
    const filteredData = rows.filter(
      (row) => row.SupplierName === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Inventory List</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> Active Suppliers </h5>
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
                <option value="">Select Supplier</option>
                {rows.map((vendor) => (
                  <option key={vendor.SupplierName} value={vendor.SupplierName}>
                    {vendor.SupplierName}/{vendor.Material}
                  </option>
                ))}
              </select>

              <button
                className="custom-button"
                onClick={addVendor}
                disabled={!selectedVendor}
              >
                Add Suppliers
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

export default InventoryList;