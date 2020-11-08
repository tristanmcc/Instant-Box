// React core
import React from "react";
import {useState, useEffect} from "react"

//CSS
import card from "../../css/modules/packageCard.css";


// Note the curly braces around props, to allow to prepare to break down the object into individual variables
export default function PackageCard({ data }) {
  const {
    id,
    status,
    eta,
    parcel_id,
    sender,
    verification_required,
    location_id,
    location_name,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_status_ok,
    user_phone,
    user_name,
    notes,
    last_updated,
  } = data;
  

  return (
    <article className="card">
        <p className="status">From: {sender}</p>
        <p>status: {status}</p>
  <p>location ID: {location_id}</p>
    </article>
  );
}