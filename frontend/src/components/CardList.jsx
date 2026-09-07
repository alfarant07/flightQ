import React from 'react'
import Card from './Card';

const CardList = ({offers}) => {
    const listOffers = offers.map(offer =>
        <Card offer ={offer}/>
    );
  return (
    <div className='flex justify-center flex-col items-center gap-2 bg-gray-50 '>
        {listOffers}
    </div>
  )
}

export default CardList