import React, { useState } from "react";
import Navbar from "./Navbar";
import Searchform from "./Searchform";
import CardList from "./CardList";

const Homepage = () => {
  const [offers, setOffers] = useState([]);

  return (
    <>
    <section className="grid grid-cols-3 items-center bg-gray-50 py-4">
      <Navbar />
      <Searchform
        onSearchComplete={setOffers}
        className="flex justify-center"
      />
      <div></div>
    </section>
    <hr className="mb-1"></hr>
    <CardList className="" offers
    = {offers}/>
    </>
  );
};

export default Homepage;
