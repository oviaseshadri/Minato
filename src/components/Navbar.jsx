import React , {useContext}from 'react';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {ThemeContext} from '../context/WalletContext';

import Dashboard from './Dashboard';
import CreateArticle from './CreateArticle';
// import ConnectWallet from './ConnectWallet';

const Navbar = () => {

    const {address} = useContext(ThemeContext);
    console.log("nav bar log in check:",address);


  return (
    <div style={styles.navbar}>
            {address &&
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/CreateArticle">Create Article</Link>
                    </li>
                  </ul>
                </nav>

                <hr />

                <Route path="/Dashboard" exact component={Dashboard} />
                <Route path="/CreateArticle" component={CreateArticle} />
              </div>
            </Router>
            }

      {/* <ConnectWallet /> */}
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  buttonContainer: {
    display: 'flex',
  },
  link: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
  },
  button: {
    marginLeft: '10px',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid #333',
    borderRadius: '5px',
    backgroundColor: '#4caf50',
    color: '#fff',
  },
};

export default Navbar;
