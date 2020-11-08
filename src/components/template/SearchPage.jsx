// React core
import React from "react";

// Components
import Header from "../organism/Header";
import Footer from "../organism/Footer";

//CSS
import css from "../../css/templates/searchPage.css";





export default function SearchPage() {
  return (
    <div className="search-page">
      <Header />
      <h1 className="title">Search</h1>
      <h3 className="search-title">Search for your package here:</h3>
    <div className="site-content">
    <div className="search-bar">
        <input placeholder="Search" />
        <a to="/Package/:parcel_id"><button>Search</button></a>
    </div>
    </div>
      <Footer/>
    </div>
  );
}
