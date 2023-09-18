import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Table from "./components/Table";
import Table1 from "./components/Table1";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router> */}
      {/* <Table/> */}
      <Table1/>
      {/* <Navbar/> */}
    </div>
  );
};

export default App;
