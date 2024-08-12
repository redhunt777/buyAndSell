import React from "react";
import "./home.scss";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="backgroungImageContainer">
        <img
          src="/lake-192990_1920.jpg"
          alt="backgroundImage"
          className="backgroundImage"
        />
      </div>
      <div className="main">
        <NavBar></NavBar>
        <div className="hero">
          <div className="containerHero1">
            <h1>Comprehensive Platform for Buying and Selling Land</h1>
            <p>
              Perfect Land offer a comprehensive platform for buying and selling
              land. The website includes detailed listings, location maps, and
              price comparisons to guide potential buyers and landowners in
              making informed decisions.
            </p>
            <div style={{ width: "100%" }}>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="containerHero2">
            <h2>Find Your Perfect Property Now</h2>
            <p>Search from a wide range of properties for sale in your area</p>
            <form className="d-flex searchBar" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter a city or a state"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
