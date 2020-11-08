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
            location_coordinate_latitude,
            location_coordinate_longitude,
            location_status_ok,
            user_phone,
            user_name,
            notes,
            last_updated,
          } = shipment;


    console.log(packageId);
    console.log(shipment);
    

    return (
        <article className = "package-page">
            <Header/>

            <div>
                <a href = "#">
                    <img src={Parcel} alt="Package graphic" />
                </a>
                <p> show me the money{id,
            status}
                </p>
            </div>
            
            <Footer/>
        </article>
    )
}
