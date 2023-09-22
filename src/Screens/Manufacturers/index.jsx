import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../../Styles/Table.css";
const columns = [
  { field: "company_name", headerName: "Supplier Name", flex: 1 },
  { field: "OrderNumber", headerName: "Order No", flex: 1 },
  { field: "product", headerName: "Product", flex: 1 },
  { field: "number", headerName: "PhoneNumber", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "location", headerName: "Location", flex: 1 },
];

function ManufacturerOrders() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [producerData, setProducerData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [rows,setRows] = useState([])

  const fetchProducerData = async () => {
    const q = query(
      collection(db, "UsersData"),
      where("role", "==", "Producer")
    );

    try {
      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc, index) => ({
        id: index,  
        ...doc.data(),
      }));

      setProducerData(fetchedData);
    } catch (error) {
      console.error("Error fetching producer data:", error);
    }
  };

  useEffect(() => {
    fetchProducerData();
  }, []);

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Manufacturer</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading">Active Manufacturers</h5>
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
                <option value="">Select Manufacturer</option>
                {producerData.map((vendor) => (
                  <option key={vendor.id} value={vendor.company_name}>
                    {vendor.company_name}/{vendor.number}
                  </option>
                ))}
              </select>

              <button
                className="custom-button"
                onClick={addManufacturer}
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
          <DataGrid rows={producerData} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
}

export default ManufacturerOrders;
