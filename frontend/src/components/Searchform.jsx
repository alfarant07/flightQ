import React from "react";
import { useState } from "react";
import { getTodaysDate } from "../../utils/getTodaysDate";

const Searchform = ({onSearchComplete}) => {
  const [input, setInput] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    cabinClass: "",
  });



  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
    const handleSubmit = async (e) =>{
    e.preventDefault();
    const url = "http://localhost:4000/api/flights/search"
    try{
        const response = await fetch(url,{
            method: "POST",
            body:JSON.stringify(input),
            headers: { "Content-Type": "application/json" }
        });
        if(!response.ok){
            throw new error(`Response status: ${response.status}`);
        };
        
        const result = await response.json();
        onSearchComplete(result)
    }catch(error){
        console.error(error);
        
    }
  }
  return (
    <>
      <form className=" flex gap-1.5"
      onSubmit={handleSubmit}>
        <input
          className=" min-w-[120px] border text-center rounded-sm px-3 py-2"
          type="text"
          placeholder="Origin"
          name="origin"
          value={input.origin}
          onChange={handleChange}
        />
        <input
          className=" min-w-[140px] border text-center rounded-sm px-3 py-2"
          type="text"
          placeholder="Destination"
          name="destination"
          value={input.destination}
          onChange={handleChange}
        />
        <input
          type="date"
          name="departureDate"
          min={getTodaysDate()}
          className="w-full border text-center rounded-sm px-3 py-2"
          value={input.departureDate}
          onChange={handleChange}
        />
        <select
          className=" min-w-[140px] border text-center rounded-sm px-3 py-2"
          name="cabinClass"
          value={input.cabinClass}
          onChange={handleChange}
        >
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first">First</option>
        </select>
        <button className="border hover:bg-gray-300 px-4 py-2 " type="submit">
          {" "}
          Search
        </button>
      </form>
    </>
  );
};

export default Searchform;
