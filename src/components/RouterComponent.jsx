import React, { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/WalletContext";
import Dashboard from "./Dashboard";
import CreateArticle from "./CreateArticle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RouterComponent() {
  const { address } = useContext(ThemeContext);
  return (
    <Router>
      
      <div style={{ display: 'flex', alignItems: 'right' }}>
      <img
        src="../../images/logo.png" // Adjust the image path based on your actual file structure
        alt="Logo"
        style={{ height: '100px', marginRight: '20px' }} // Add margin for spacing between img and RouterComponent
      />

      <Navbar />
    </div>
      {/* <Navbar /> */}
      {address && (
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreateArticle" element={<CreateArticle />} />
        </Routes>
      )}
    </Router>
  );
}

export default RouterComponent;
