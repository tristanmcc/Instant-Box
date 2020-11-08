// React core
import React from "react";

//components
import Header from '../organism/Header';
import Footer from '../organism/Footer';

//media 
import Parcel from '../../assets/parcel-Graphics.png';


export default function PackagePage({  items }) {

    const {
        status,
        sender,
        verification_required
      } = items;
    console.log(items);

    return (
        <div className = "package-page">
            <Header/>

            <div>
            <img src={Parcel} alt="Package graphic" />
            </div>

            <div className="body-container">
           <h1 className="title">{sender}</h1>
            <p className="description">{status}{verification_required}
    </p>
            </div>
            <Footer/>
        </div>
    )
}
