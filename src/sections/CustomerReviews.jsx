//import React from 'react'
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
   <section className="max-container">
    <h3 className="font-palanquin text-center text-4xl font-bold">
      what our <span className="text-violet-900">Customers</span> say?
    </h3>
    <p className="text-center m-auto mt-4 text-slate-gray font-montserrat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, dolore?</p>
    <div className="mt-4 flex flex-1 max-lg:flex-col gap-14 justify-evenly items-center">
      {reviews.map((review) => (
        <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </div>
   </section>
  )
}

export default CustomerReviews