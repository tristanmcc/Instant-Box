// React core
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../organism/Header";
import Footer from "../organism/Footer";

//CSS
import css from "../../css/templates/searchPage.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  //console.log(query)

  return (
    <div className="search-page">
      <Header />

      <h1 className="title">Search</h1>
      <h3 className="search-title">
        Search for your package with the parcel ID here:
      </h3>
      <div className="site-content">
        <div className="search-bar">
          <input
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Link to={`/Package/${query}`}>
            <button>Search</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
