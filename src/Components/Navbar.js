import { useState, React } from "react";
import "./Navbar.css";
import Logo from "../Images/seamless_logo.png";
import Stroke from "../Images/Stroke.png";
import Search from "../Images/Search.png";
import Path from "../Images/Path.png";

// Navbar.js
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <div className="col-12 navbar">
        <div className="top-nav col-12">
          <span className="nav-icons">
            <span>
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>About Us</span>
            <span>Contact </span>
          </span>
        </div>
        <div className="main-nav col-12">
          <div className="nav-list col-5 col-sm-6 col-xs-6">
            <ul>
              <li>
                <i className="fa-solid fa-bars"></i>
              </li>
              <li>Home - Classic</li>
              <li>
                <span>Tailoring</span>
              </li>
              <li>Laundry</li>
            </ul>
          </div>
          <div className="nav-logo col-2 col-sm-6 col-xs-6">
            <div>
              <img src={Logo} />
              <p className="site_name">2M Seamless</p>
            </div>
          </div>
          <div className=" nav-sublist col-5">
            <span>
              <ul>
                <li>Login</li>
                <li>
                  <img src={Search} />
                </li>
                <li>
                  <img src={Stroke} />
                </li>
                <li>
                  <img src={Path} />
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <nav className="navigation">
        <div>
          <img src={Logo} />
          <p className="site_name">2M Seamless</p>
        </div>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="menu">
            <ul>
              <li>Home - Classic</li>
              <li>Tailoring</li>
              <li>Laundry</li>
              <li>Login</li>
              <li>About Us</li>
              <li>Contact</li>
              <li className="social_list">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}