import React, { useState } from "react";
import Navbar from "./Navbar";
import Searchform from "./Searchform";
import CardList from "./CardList";
import Footer from "./footer";
const Homepage = () => {
  const [offers, setOffers] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
    <section className="grid grid-cols-3 items-center bg-gray-50 py-4">
      <Navbar />
      <Searchform
        onSearchComplete={setOffers}
        className="flex justify-center"
      />
      <div></div>
    </section>
    <hr className="mb-1"></hr>
    <CardList className="flex-1" offers
    = {offers}/>
    <Footer/>
    </div>
    
  );
};

export default Homepage;
