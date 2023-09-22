import "../../Styles/Table.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

const columns = [
  { field: "Name", headerName: "Name", flex: 1 },
  { field: "Email", headerName: "Email", flex: 1 },
  { field: "PhoneNumber", headerName: "PhoneNumber", flex: 1 },
  { field: "Role", headerName: "Role", flex: 1 },
  { field: "Location", headerName: "Location", flex: 1 },
];

const rows = [
  {
    id: 1,
    Name: "Acc LTD",
    Email: "jane@microsoft.com",
    PhoneNumber: "(225) 555-0118",
    Role: "Retailer",
    Location: "Jammu",
  },
  {
    id: 2,
    Name: "ane PVT LTD",
    Email: "jane@microsoft.com",
    PhoneNumber: "(123) 456-7890",
    Role: "Wholesaler",
    Location: "New York",
  },
  {
    id: 3,
    Name: "Jhon Traders",
    Email: "jane@microsoft.com",
    PhoneNumber: "(555) 123-4567",
    Role: "Retailer",
    Location: "Los Angeles",
  },
];

function VendorOD() {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
  

  const addVendor = () => {
    const filteredData = rows.filter((row) => row.Name === selectedVendor);
    setRowData([...rowData, ...filteredData]);
  };

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  const closeRowModal = () => {
    setSelectedRow(null);
  };

  const requestMaterial = () => {
    console.log("Requested Material:");
    console.log("Quantity:", quantity);
    console.log("Delivery Address:", deliveryAddress);
    console.log("Phone Number:", phoneNumber);

    toast.success('Demand raised Sucessfully!');
    // toast.success("Demand raised sucessfully!", {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    // toast.success('Demand raised ', {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   pauseOnHover: false,
    //   closeOnClick: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   }); 

    setQuantity("");
    setDeliveryAddress("");
    setPhoneNumber("");
  };

  return (
    <div className="container">
      <div className="custom-container">
        <div className="flex-row1">
          <div className="flex-column1">
            <div className="shipments-container">
              <h3 className="shipments-heading">Producer List</h3>
            </div>
            <div className="active-shipments">
              <h5 className="active-shipments-heading">Producers</h5>
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
                <option value="">Select Producer</option>
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
                Add Producer
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
            position: "relative",
          }}
        >
          <DataGrid
            rows={rowData}
            columns={columns}
            pageSize={5}
            onRowClick={handleRowClick}
          />
          {selectedRow && (
            <div className="custom-modal">
              <div className="modal-container">
                <span className="close" onClick={closeRowModal}>
                  &times;
                </span>
                <p style={{ textAlign: "center" }}>Make your Demand</p>
                <p style={{ marginTop: "3%" }}>
                  From: {selectedRow.Name} - {selectedRow.Location}
                </p>

                <input
                  type="text"
                  placeholder="Enter the product Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Delivery Address"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button onClick={requestMaterial}>Raise your demand</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster />
      
    </div>
  );
}

export default VendorOD;