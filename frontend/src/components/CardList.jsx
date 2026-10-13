import React from 'react'
import Card from './Card';
import TrackModal from './TrackModal';
import { useState } from 'react';
const CardList = ({offers,className}) => {
  const [trackingOffer, setTrackingOffer] = useState(null);
    const listOffers = offers.map(offer =>
        <Card offer ={offer} onBookmarkClick={()=>setTrackingOffer(offer)}/>
    );
  return (
    <div className={`flex justify-center flex-col items-center gap-2 bg-gray-50 ${className}`}>
        {listOffers}
        {trackingOffer && (
      <TrackModal offer={trackingOffer} onClose={() => setTrackingOffer(null)} />
    )}
    </div>
  )
}

export default CardList