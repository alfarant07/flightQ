import React from "react";
import { SiTheplanetarysociety } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="py-4 flex bg-gray-200 items-center justify-between">
      <div className="flex items-center gap-2">
        {" "}
        <SiTheplanetarysociety className="text-2xl"/>{" "}
      <h1 className="text-lg">FlightQ</h1>
</div>

      <div className = "flex gap-1.5 ">
        <form className=" flex gap-1.5">
          <input className="w-full border text-center rounded-sm" type="text" placeholder="Origin" />
          <input className="w-full border text-center rounded-sm" type="text" placeholder="Destination" />
        </form>
        <button className="border p-2 hover:bg-gray-300 " type="submit"> Search</button>
      </div>

      <div className="w-24" aria-hidden="true" />

    </nav>
  );
};

export default Navbar;
