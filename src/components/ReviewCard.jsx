//import React from 'react'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col ">
        <img src={imgURL} alt="customer" className="rounded-full w-[120px] h-[120px]"/>
        <h2 className="text-violet-950 text-2xl font-palanquin font-semibold mt-2">{customerName}</h2>
        <p className="text-slate-gray font-montserrat mt-4 text-center">{feedback}</p>
    </div>
  )
}

export default ReviewCard