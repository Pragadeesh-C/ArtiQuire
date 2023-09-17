import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
      
    </div>
  );
};

export default App;
