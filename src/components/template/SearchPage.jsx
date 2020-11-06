// React core
import React from "react";

// Components
import Header from "../organism/Header";
import PackageCard from "../molecules/PackageCard";
import Footer from "../organism/Footer";


export default function SearchPage() {
  return (
    <div className="search-page">
      <Header />
      <h1>Search results will go here</h1>
      <PackageCard/>
      <Footer/>
    </div>
  );
}
