import React from 'react'


// Components
import PackageCard from "../molecules/PackageCard";
import Header from "../organism/Header";
import Footer from "../organism/Footer";

//CSS




export default function HomePage() {
    return (
        <div className="homePage">
           <Header/> 
           <PackageCard/>
           <PackageCard/>
           <PackageCard/>
           <PackageCard/>
           <Footer/>
        </div>
    )
}


