// React core
import React from "react";

//components
import Header from '../organism/Header';
import Footer from '../organism/Footer';

//media 
import Parcel from '../../assets/parcel-Graphics.png';
import { useParams } from "react-router-dom";

//CSS
import css from '../../css/templates/packageDetails.css'


export default function PackageDetails({ items }) {
   //data
    const {packageId} = useParams();
    

    const shipment = items.filter((item) => item.parcel_id.match(packageId))[0];
    
    const {
            id,
            status,
            eta,
            parcel_id,
            sender,
            verification_required,
            location_id,
            location_name,
            user_phone,
            user_name,
            last_updated,
          } = shipment;
    
          
    return (
        <article className = "package-page">
            <Header/>
            <h1 className = "title">Package: {parcel_id}</h1>
            <div className="site-content">
                <a href = "#">
                    <img className="image"src={Parcel} alt="Package graphic" />
                </a>
                <ul className="details">
                <li> <b>Status:</b> {status}</li>
                <li> <b>ETA:</b> {eta}</li>
                <li><b>Sender:</b> {sender}</li>
                <li> <b>Verification required:</b> {verification_required}</li>
                <li> <b>Location ID:</b> {location_id}</li>
                <li><b> Location Name:</b> {location_name}</li>
                <li><b> Recipient phone number:</b> {user_phone}</li>
                <li><b> Notes:</b> {location_id}</li>
                <li><b> Recipient Name:</b> {user_name}</li>
                <li><b> Last Updated:</b> {last_updated}</li>
                </ul>
            </div>
            <Footer/>
        </article>
    )
}
