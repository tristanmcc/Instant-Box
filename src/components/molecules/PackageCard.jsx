// React core
import React from "react";
import { Link } from "react-router-dom";

//CSS
import card from "../../css/modules/packageCard.css";

//Media
import Parcel from "../../assets/parcel-Graphics (1).png";

//Function
export default function PackageCard({ data }) {
  
//DATA
const { status, parcel_id, sender } = data;

  return (
    <div className="back-image">
      <article className="card">
        <Link className="link" to={`/Package/${parcel_id}`}>
          <img className="image" src={Parcel} alt="Package graphic" />
         
         
         {/* list of variables included for all packages */}
          <ul className="short-desc">
            <li>
              <b>From:</b> {sender}
            </li>
            <li>
              <b>Status:</b> {status}
            </li>
            <li>
              <b>ID:</b> {parcel_id}
            </li>
          </ul>
        </Link>
      </article>
    </div>
  );
}
