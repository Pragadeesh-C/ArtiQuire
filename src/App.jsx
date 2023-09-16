import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
