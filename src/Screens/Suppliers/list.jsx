import "../../Styles/Table.css";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../utils/firebase";

const columns = [
  { field: "company_name", headerName: "Supplier Name", flex: 1 },
  { field: "OrderNumber", headerName: "Order No", flex: 1 },
  { field: "product", headerName: "Product", flex: 1 },
  { field: "number", headerName: "PhoneNumber", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "location", headerName: "Location", flex: 1 },
];

const rows = [
  {
    id: 1,
    BankName: "SBI",
    AccountNo: "693212179590373",
    AmountCredited: "10,000",
    Date: "12-10-2023",
    Status: "Credited",
    // Material: "Diary",
    // Email: "jane@microsoft.com",
    // Company: "DiaryPro",
    // Location: "Jammu",
    // PhoneNumber: "(225) 555-0118",
    // Status: "Delivered",
  },
  {
    id: 2,
    BankName: "IOB",
    AccountNo: "093212149590323",
    AmountCredited: "19,000",
    Date: "12-10-2023",
    Status: "Pending",
    // Material: "Notebook",
    // Email: "jane@microsoft.com",
    // Company: "NotePro",
    // Location: "New York",
    // PhoneNumber: "(123) 456-7890",
    // Status: "In Progress",
  },
  {
    id: 3,
    BankName: "AXIS",
    AccountNo: "193212109590329",
    AmountCredited: "22,500",
    Date: "12-10-2023",
    Status: "Rejected",
    // Material: "Calendar",
    // Email: "jane@microsoft.com",
    // Company: "CalPro",
    // Location: "Los Angeles",
    // PhoneNumber: "(555) 123-4567",
    // Status: "Pending",
  },
];

function SupplierList() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);
  const [producerData, setProducerData] = useState([]);


  const addVendor = () => {
    const filteredData = producerData.filter((row) => row.company_name === selectedVendor);
    setProducerData([...producerData, ...filteredData]);
  };
  const fetchProducerData = async () => {
    const q = query(
      collection(db, "UsersData"),
      where("role", "==", "supplier")
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
    console.log(producerData)
  }, []);

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Suppliers List</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading"> Suppliers </h5>
            </div>
          </div>
          ''
        
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
          <DataGrid rows={producerData} columns={columns} pageSize={5} />
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
