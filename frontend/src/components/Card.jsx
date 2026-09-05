import React from 'react'
import { parseDuration } from '../../utils/parseDuration'
const Card = ({offer}) => {
  return (
    <article className='outline-solid max-w-3xl min-w-xl rounded-sm'>
        <header className='flex justify-center text-xl mt-2'>{offer.slices[0].origin.city_name} to  {offer.slices[0].destination.city_name}</header>
        <h2>{parseDuration(offer.slices[0].duration)}</h2>
    <div className='font-asap text-2xl text-right m-8'>{offer.intended_total_amount}$</div>
    </article>
  )
}

export default Card