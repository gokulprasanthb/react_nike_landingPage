//import React from 'react'
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="px-6 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        
          <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
            we provide you 
            <span className=" text-red-500"> Great </span> 
            <span className=" text-red-500">Quality</span> Products
          </h2>

          <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates deserunt eius laboriosam dolor harum?
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur.</p>

          <div className="mt-10">
          <Button label="View more" />
          </div>

        </div>
        {/*right side*/}
        <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
        </div>
    </section>
  )
}

export default SuperQuality