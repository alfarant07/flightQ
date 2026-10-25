import React from "react";
import { useState, useEffect } from "react";
import { getTodaysDate } from "../../utils/getTodaysDate";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const PLACES_URL = "http://localhost:4000/api/places/suggestions";

const useSuggestions = (text) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(text.length<2){
      setOptions([]);
      return;

    }
    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(PLACES_URL, { params: { query: text } });
        setOptions(response.data);
      } catch (error) {
        console.log(error);
      }
      //console.log(text);
    }, 300);

    return () => clearTimeout(timer);
  }, [text]); //dependency arraya to tell react when to run 
  return options;
};

const Searchform = ({ onSearchComplete }) => {
  const [input, setInput] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    cabinClass: "economy",
  });
  const originOptions = useSuggestions(input.origin);
  const destinationOptions = useSuggestions(input.destination);
  //console.log(originOptions)
  //data list gives dropdown f suggestions list must = datalist id


  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/flights/search";
    try {
      const response = await axios.post(url, input);

      console.log(response);
      onSearchComplete(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form className=" flex gap-1.5" onSubmit={handleSubmit}>
        <input
          className=" min-w-[120px] border text-center rounded-sm px-3 py-2"
          type="text"
          placeholder="Origin"
          name="origin"
          value={input.origin}
          onChange={handleChange}
          list="origin-options"
        />
        <datalist id="origin-options"> 
        {originOptions.map((place)=>(
          <option key={place.iata_code + place.type} value={place.iata_code}>
            {place.name}
          </option>
        ))}
        </datalist>
        <input
          className=" min-w-[140px] border text-center rounded-sm px-3 py-2"
          type="text"
          placeholder="Destination"
          name="destination"
          value={input.destination}
          onChange={handleChange}
          list="dest-options"
        />
         <datalist id="dest-options">
        {destinationOptions.map((place)=>(
          <option key={place.iata_code + place.type} value={place.iata_code}>
            {place.name}
          </option>
        ))}
        </datalist>
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
        <button
          className="border bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 flex"
          type="submit"
        >
          {" "}
          <h2>Search</h2>
          <AiOutlineSearch className="mt-1" />
        </button>
      </form>
    </>
  );
};

export default Searchform;
