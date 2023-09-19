import React, { useState,useEffect  } from "react";
import { DataGrid } from "@mui/x-data-grid"; 
import { db } from '../../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import "../../Styles/Table.css"; 

const columns = [
  { field: "SupplierName", headerName: "Supplier Name", flex: 1 },
  { field: "OrderNo", headerName: "Order No", flex: 1 },
  { field: "Product", headerName: "Product", flex: 1 },
  { field: "PhoneNumber", headerName: "PhoneNumber", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "Location", headerName: "Location", flex: 1 },

];

const rows = [
  {
    id: 1,
    SupplierName: "Jane Cooper",
    Product: "Diary",
    OrderNumber: "(225)",
    Email: "jane@microsoft.com",
    Location: "Jammu",
    Status: "Delivered",
  },
  {
    id: 2,
    SupplierName: "John Doe",
    Product: "Notebook",
    OrderNumber: "(123)",
    Email: "jane@microsoft.com",
    Location: "New York",
    Status: "In Progress",
  },
  {
    id: 3,
    SupplierName: "Alice Johnson",
    Product: "Calendar",
    OrderNumber: "(555)",
    Email: "jane@microsoft.com",
    Location: "Los Angeles",
    Status: "Pending",
  },
];


function ManufracturerOrder() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);
  const [IsVisible, setIsVisible] = useState(true);
  const [producerData, setProducerData] = useState([]);

  const addVendor = () => {
    const filteredData = rows.filter(
      (row) => row.SupplierName === selectedVendor
    );
    setRowData([...rowData, ...filteredData]);
  };


    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/register') {
        setIsVisible(false);
        } else {
        setIsVisible(true);
        }

const fetchProducerData = async () => {
      const q = query(collection(db, "UsersData"), where("role", "==", "Producer"));

      try {
        const querySnapshot = await getDocs(q);

        const producerDataArray = [];
        querySnapshot.forEach((doc) => {
          // Generate a unique ID for each row
          const id = doc.id; // You can use the document ID as the ID
          const data = doc.data();
          producerDataArray.push({ ...data, id });
        });

        setProducerData(producerDataArray);
        console.log("Producer Data:", producerDataArray);
      } catch (error) {
        console.error("Error fetching producer data:", error);
      }
    };

    fetchProducerData();
    }, []);

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Manufracturer</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> Active Manufracturers </h5>
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
                    {vendor.SupplierName}/{vendor.Product}
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
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
}

export default ManufracturerOrder;