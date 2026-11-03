import { useState } from "react";
import Navbar from "./Navbar";
import Searchform from "./Searchform";
import CardList from "./CardList";
import Footer from "./footer";
import Welcome from "./Welcome";
import {Link} from "react-router-dom"
import { BsPersonFill } from "react-icons/bs";

const Homepage = () => {
  const [offers, setOffers] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex items-center justify-between gap-4 bg-gray-50 py-4 px-6 border-b">
        <Navbar />
          <Searchform 
            onSearchComplete={setOffers}
            className="min-w-0"
            />
        <Link className="flex items-center
        border gap-1 shrink-0 bg-blue-500 rounded-md
        px-2 py-2 text-base hover:bg-blue-400 shrink-0
        "
        to="/signup">
          <span className="text-sm pt-1 pr-0.5 text-white">Sign Up </span>
          <BsPersonFill />
        </Link>
      </section>
      <hr className="mb-1"></hr>
      {offers.length === 0 ? <Welcome /> : <CardList className="flex-1" offers={offers} />}
      <Footer />
    </div>
  );
};

export default Homepage;
