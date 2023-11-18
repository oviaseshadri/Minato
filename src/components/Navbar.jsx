import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "../context/WalletContext";

// import Dashboard from "./Dashboard";
// import CreateArticle from "./CreateArticle";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const { address } = useContext(ThemeContext);
  console.log("nav bar log in check:", address);

  return (
    <div style={styles.navbar}>

    

      {address &&<nav>
        <ul style={ulStyle}>
          <li style={liStyle} onMouseOver={handleHover} onMouseOut={handleHover}>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li style={liStyle} onMouseOver={handleHover} onMouseOut={handleHover}>
            <Link to="/CreateArticle">Create Article</Link>
          </li>
        </ul>
      </nav>}

      <ConnectWallet />
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px",
    background: 'rgba(255, 255, 255, 0.9)',
    borderBottom: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex", 
  },
  // link: {
  //   marginRight: "10px",
  //   textDecoration: "none",
  //   color: "#333",
  //   fontSize: "14px",
  // },
  button: {
    marginLeft: "10px",
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    border: "1px solid #333",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "#fff",
  },
};

const ulStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
};

const liStyle = {
  marginRight: '10px', // Adjust as needed for spacing between list items
  fontSize: '18px', // Adjust font size
  padding: '12px', // Adjust padding
  cursor: 'pointer',
  transition: 'background-color 0.3s', // Smooth transition on background color change
  textDecoration: 'none', // Remove underline
  fontFamily: 'Arial, sans-serif', // Use a different font
};

const handleHover = (event) => {
  const target = event.target;
  target.style.backgroundColor = event.type === 'mouseover' ? 'rgba(0, 0, 255, 0.5)' : ''; // Blue translucent background on hover
  target.style.borderRadius = event.type === 'mouseover' ? '10px' : ''; // Rounded corners on hover
};



export default Navbar;
