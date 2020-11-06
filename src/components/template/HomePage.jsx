// Reacr core
import React from 'react'


// Components
import PackageCard from "../molecules/PackageCard";
import Header from "../organism/Header";
import Footer from "../organism/Footer";


export default function HomePage({ items }) {
    // Sub components
    const Packages = items.map((item) => {
        return <PackageCard key={item.id} data={item}/>
    });
    
    return (
        
        <div className="homePage">
           <Header/> 
           <section>
           <div className="grid">{Packages}</div>
           </section>
           <Footer/>
        </div>
    )
}


