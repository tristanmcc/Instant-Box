// React core
import React from "react";
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom';

//CSS
import card from "../../css/modules/packageCard.css";

//Media
import Parcel from '../../assets/parcel-Graphics (1).png';



// Note the curly braces around props, to allow to prepare to break down the object into individual variables
export default function PackageCard({ data }) {
  const {
    status,
    parcel_id,
    sender,
  } = data;
  

  return (
    <div className="back-image">
    <article className="card">
      <Link className="link" to ={`/Package/${parcel_id}`}>
        <img className="image"src={Parcel} alt="Package graphic" />
        <ul className="short-desc">
        <li><b>From:</b> {sender}</li>
        <li><b>Status:</b> {status}</li>
        </ul>
  </Link>
    </article>
    </div>
  );
}