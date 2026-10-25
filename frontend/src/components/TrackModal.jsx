import React, { useState } from "react";
import axios from "axios";

const TrackModal = ({ offer, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const url = "http://localhost:4000/api/track";
    try {
      const resData = {
        origin: offer.slices[0].origin.iata_code,
        destination: offer.slices[0].destination.iata_code,
        travel_date: offer.slices[0].segments[0].departing_at.slice(0, 10),
        email: email,
        price: offer.intended_total_amount,
      };
      const response =await axios.post(url,resData);
      onClose();   // only reached on success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <form
        className="bg-white rounded-2xl p-6 flex flex-col gap-4 min-w-[320px]"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div>
          <h2 className="">
            {offer.slices[0].origin.city_name} to{" "}
            {offer.slices[0].destination.city_name}
          </h2>
          <h2 className="font-asap text-xl text-right m-2 text-green-700">
            {offer.intended_total_amount}$
          </h2>
        </div>
        <input
          className="min-w-[120px] border text-center rounded-sm px-3 py-2"
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting}

          className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-blue-500"
        >
          {isSubmitting ? "Tracking..." : "Track this flight"}
        </button>
      </form>
    </div>
  );
};

export default TrackModal;
