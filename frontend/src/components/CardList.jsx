import React from 'react'
import Card from './Card';

const CardList = ({offers}) => {
    const listOffers = offers.map(offer =>
        <Card offer ={offer}/>
    );
  return (
    <div className='flex justify-center flex-col items-center'>
        {listOffers}
    </div>
  )
}

export default CardList