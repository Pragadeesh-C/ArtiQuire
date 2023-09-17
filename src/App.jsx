import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/asd" element={<Login />} />
          <Route path="/" element={<Table />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
