import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="container">
            <h6>Real Estate for Sale by Type</h6>
            <span>Farms For Sale</span>
            <span>LakeFront Property for Sale</span>
            <span>Ranches For Sale</span>
            <span>Riverfront For Sale</span>
          </div>
          <div className="container">
            <h6>Real Estate for Sale by State</h6>
            <span>Mumbai Land For Sale</span>
            <span>Delhi Land For Sale</span>
            <span>Kolkata Land For Sale</span>
            <span>Jaipur Land For Sale</span>
          </div>
          <div className="container">
            <h6>About Us</h6>
            <span>Contact Us</span>
            <span>Terms of Use</span>
            <span>Sitemap</span>
            <span>Privacy Policy</span>
          </div>
          <div className="container">
            <h6>For Partners</h6>
            <span>Advertise a Listing</span>
            <span>Advertise a Business</span>
            <span>Manage Listings</span>
          </div>
        </div>
        <div className="footerBottom">
          <div className="container">
            <p>© 2024 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
