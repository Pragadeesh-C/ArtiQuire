import React, { useState, useRef } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../Styles/Table.css";
const Table = () => {
  const gridRef = useRef();
  const [rows, setRows] = useState([
    {
      id: 1,
      Sno: 1,
      date: "Sat,08/07/2023",
      name: "Iron",
      quantity: "12 KG",
      price: 2000,
    },
    {
      id: 2,
      Sno: 2,
      date: "Sat,08/07/2023",
      name: "Stainless Steel",
      quantity: "12 KG",
      price: 1000,
    },
    {
      id: 3,
      Sno: 3,
      date: "Sat,08/07/2023",
      name: "Aluminium",
      quantity: "12 KG",
      price: 4000,
    },
    {
      id: 4,
      Sno: 4,
      date: "Sat,08/07/2023",
      name: "test",
      quantity: "12 KG",
      price: 4000,
    },
  ]);

  const [columns, setColumns] = useState([
    { field: "Sno", flex: 1 },
    { field: "date", flex: 1 },
    { field: "name", flex: 1 },
    { field: "quantity", flex: 1 },
    { field: "price", flex: 1 },
  ]);

  return (
    <div className="dashboard">
      <div className="head">
        <p>Today (Sat,08/07/2023)</p>
        <button>+ Add</button>
      </div>
      <div className="wrapper">
        <div className="dataGrid">
          <DataGrid
            ref={gridRef}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: { csvOptions: { fileName: "08-07-2023" } },
            }}
            rows={rows}
            columns={columns}
            autoHeight={true}
            autoPageSize={false}
            autoWidth={true}
          />
        </div>
        <div className="button">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Table;