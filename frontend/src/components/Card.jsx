import { parseDuration } from "../../utils/parseDuration";
import { getFlightTime } from "../../utils/getFlightTime";
import { LuBookmark, LuPlane } from "react-icons/lu";

const Card=({offer,onBookmarkClick})=>{
  const slice = offer.slices[0];
  const firstSegment = slice.segments[0];
  const lastSegment = slice.segments[slice.segments.length - 1];
  const stops = slice.segments.length - 1;

  return (
    <article className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Airline + route */}
        <div className="flex items-center gap-3 md:w-1/4">
          <img
            src={offer.owner.logo_symbol_url}
            alt={offer.owner.name}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <h1 className="truncate font-semibold text-gray-900">
              {slice.origin.city_name} to {slice.destination.city_name}
            </h1>
            <h2 className="truncate text-sm text-gray-500">{offer.owner.name}</h2>
          </div>
        </div>

        {/* Times + duration */}
        <div className="flex flex-1 items-center gap-4">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">
              {getFlightTime(firstSegment.departing_at)}
            </p>
            <p className="text-sm text-gray-500">{slice.origin.iata_code}</p>
          </div>

          <div className="flex flex-1 flex-col items-center text-xs text-gray-500">
            <span>{parseDuration(slice.duration)}</span>
            <div className="my-1 flex w-full items-center">
              <span className="h-px flex-1 bg-gray-300" />
              <LuPlane className="mx-1 text-gray-400" size={14} />
              <span className="h-px flex-1 bg-gray-300" />
            </div>
            <span className={stops === 0 ? "text-green-700" : "text-amber-600"}>
              {stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? "s" : ""}`}
            </span>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">
              {getFlightTime(lastSegment.arriving_at)}
            </p>
            <p className="text-sm text-gray-500">{slice.destination.iata_code}</p>
          </div>
        </div>

        {/* Price + bookmark */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4 md:justify-end md:border-t-0 md:border-l md:pt-0 md:pl-5">
          <p className="font-asap text-2xl font-bold text-green-700">
            ${offer.intended_total_amount}
          </p>
          <button
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
            onClick={onBookmarkClick}
            aria-label="Track this flight"
          >
            <LuBookmark size={20} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
