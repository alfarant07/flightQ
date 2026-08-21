import React, { use, useState } from "react";
import { SiTheplanetarysociety } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="py-4 flex bg-gray-200 items-center justify-between">
      <div className="flex items-center gap-2">
        {" "}
        <SiTheplanetarysociety className="text-2xl" />{" "}
        <h1 className="text-lg">FlightQ</h1>
      </div>

      <div className="flex gap-1.5 ">
        <form className=" flex gap-1.5">
          <input
            className="w-full border text-center rounded-sm"
            type="text"
            placeholder="Origin"
            name="Origin"
          />
          <input
            className="w-full border text-center rounded-sm"
            type="text"
            placeholder="Destination"
            name="destination"
          />
          <input
            type="date"
            name="departureDate"
            className="w-full border text-center rounded-sm"
          />
          <select
            className="w-full border text-center rounded-sm"
            name="cabinClass"
          >
            <option value="economy">Economy</option>
            <option value="premium_economy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </form>
        <button className="border p-2 hover:bg-gray-300 " type="submit">
          {" "}
          Search
        </button>
      </div>

      <div className="w-24" aria-hidden="true" />
    </nav>
  );
};

export default Navbar;
