import React from "react";
import "./navBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container1">
          <span className="btn">Buy</span>
          <span className="btn">Sell</span>
          <span className="btn">More</span>
        </div>
        <div className="container2">Perfectplot.com</div>
        <div className="container3">
          <span>
            <button type="button" className="btn btn-outline-light">
              Login
            </button>
          </span>
          <span>
            <button type="button" className="btn btn-outline-light">
              Signup
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
