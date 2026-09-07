import React from "react";
import { parseDuration } from "../../utils/parseDuration";
import { getFlightTime } from "../../utils/getFlightTime";
const Card = ({ offer }) => {
  return (
    <article className="outline-solid  min-w-4xl rounded-sm bg-gray-100 hover:@lg:">
      <header className="flex justify-between text-xl mt-2 bg-gray-100 p-2">
        <div className="flex">
          <section className="h-10 w-10">
            <img src={offer.owner.logo_symbol_url}></img>
          </section>
          <h1 className="p-2">
            {offer.slices[0].origin.city_name} to{" "}
            {offer.slices[0].destination.city_name}
          </h1>
        </div>
        <section className="flex text-gray-500 ml-4">
          <h2>{getFlightTime(offer.slices[0].segments[0].departing_at)}</h2>
          <h2>-</h2>
          <h2>{getFlightTime(offer.slices[0].segments[0].arriving_at)}</h2>
        </section>

        <h2 className="text-m p-2">
          {parseDuration(offer.slices[0].duration)}
        </h2>
      </header>

      <section className="font-asap text-xl text-right m-8 text-green-700">
        {offer.intended_total_amount}$
      </section>
    </article>
  );
};

export default Card;
