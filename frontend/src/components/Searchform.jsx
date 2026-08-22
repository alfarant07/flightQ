import React from 'react'
import { useState } from 'react'

const Searchform = () => {
    const [state, setState] = useState({
        origin: "",
        destination: "",
        departureDate: "",
        cabinClass: ""
      })
    
      const handleChange = (e) =>{
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
      }
  return (
    <>
    <form className=" flex gap-1.5">
          <input
            className="w-full border text-center rounded-sm"
            type="text"
            placeholder="Origin"
            name="origin"
            value ={state.origin}
            onChange={handleChange}

          />
          <input
            className="w-full border text-center rounded-sm"
            type="text"
            placeholder="Destination"
            name="destination"
            value = {state.destination}
            onChange={handleChange}

          />
          <input
            type="date"
            name="departureDate"
            className="w-full border text-center rounded-sm"
            value = {state.departureDate}
            onChange={handleChange}
          />
          <select
            className="w-full border text-center rounded-sm"
            name="cabinClass"
            value = {state.cabinClass}
            onChange={handleChange}
          >
            <option value="economy">Economy</option>
            <option value="premium_economy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
          <button className="border p-2 hover:bg-gray-300 " type="submit">
          {" "}
          Search
        </button>
        </form>
    
        </>
  )
}

export default Searchform