import React from "react";
import "./Navbar.css";
import olxLogo from "../images/olxLogo.png";
import SubNavbar from './SubNavbar';

function Navbar() {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <img className="logo" src={olxLogo} alt="" />

        </div>
      
        <ul className="links">
          <li>
                        
          <select className="countryInput" id="country" name="country">
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Peshawar">Peshawar</option>
          
          </select>
          </li>

          <li>
            <input className='searchInput' type="text" placeholder='search' />
          </li>
          <li>
            <p className='loginBtn'>Login</p>
          </li>
          <li>
            <p className="sellBtn">+ SELL</p>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
      </nav>
      <div className="container">
        <img src="" alt="" />
      </div>



      <SubNavbar />
    </div>
  );
}

export default Navbar;
