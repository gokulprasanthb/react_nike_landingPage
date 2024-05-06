//import React from 'react'

import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
        
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          Special
          <span className=" text-red-500"> offer </span> 
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates deserunt eius laboriosam dolor harum?
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur.</p>

        <div className="mt-10 flex flex-wrap gap-4">
        <Button label="Shop Now" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers