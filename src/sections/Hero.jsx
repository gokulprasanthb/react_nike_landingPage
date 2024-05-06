//import React from 'react'
import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard"
//import { arrowRight } from "../assets/icons";

const Hero = () => {
  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl font-montserrat text-red-500">Take a look at our Grand Collections!</p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The World Of Shoes</span>
          <br />
          <span className=" text-red-500 inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">can find amazing things here.. <span>Grab it!</span></p>

        <Button label="Get now" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16" >
          {statistics.map((stat,index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold text-violet-950">{stat.value}</p>
              <p className="leading-7 font-montserrat text-violet-950">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*right side */}
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-amber-300 bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="big shoe" width={610} height={502} className="object-contain relative z-10 px-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) =>(
              <div key={shoe}>
                  <ShoeCard 
                  imgURL = {shoe}
                  changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}
                  />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero