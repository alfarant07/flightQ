import React, { useState } from "react";
import Navbar from "./Navbar";
import Searchform from "./Searchform";

const Homepage = () => {
  const [offers, setOffers] = useState([]);
  console.log("offers updated ", offers)

  return (
    <section className="grid grid-cols-3 items-center bg-gray-200 py-4">
      <Navbar />
      <Searchform
        onSearchComplete={setOffers}
        className="flex justify-center"
      />
      <div></div>
    </section>
  );
};

export default Homepage;
