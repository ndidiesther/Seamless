import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="col-12 footer">
      <div className="col-12 main_footer">
        <div className="col-3 col-xs-12">
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Contact</p>
          <p>Store Locations</p>
          <p>Careers</p>
        </div>
        <div className="col-3 col-xs-12">
          <h3>HELP</h3>
          <p>Order Tracking</p>
          <p>FAQ's</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="col-3 col-xs-12 ">
          <h3>STORE</h3>
          <p>Women</p>
          <p>Men</p>
          <p>Kiddies</p>
        </div>
        <div className="col-3 col-xs-12">
          <h3>FOLLOW US</h3>
          <p className="follow_us">And get Free Shipping on all your orders!</p>
          <p>
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
            </span>
          </p>
        </div>
      </div>
      <div className="col-12 sub_footer">
        <p>Sign up now & get 10% off</p>
        <p>Be the first to know about our new arrivals and exclusive offers.</p>
        <input className="footer_input" placeholder="Your email address" />{" "}
        <button className="footer_btn">Sign Up</button>
      </div>
      <div className="col-12 end_footer">
        <span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </span>
        <span>2021 ® 2M Seamless</span>
      </div>
    </div>
  );
};

export default Footer;
