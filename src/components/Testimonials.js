import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="p-6">
      <div className="text-center lg:p-34 md:p-24 p-8 lg:w-[800px] mx-auto">
        <img src="/wise.svg" alt="" className="mx-auto" />
        <p className=" mt-4 md:text-xl">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </p>
        <div className=" w-32 flex flex-col items-center mx-auto mt-6">
          <img src="/image.jpg" alt="Nick Babich" className=" w-16" />
          <h5 className=" font-bold">Nick Babich</h5>
          <div>Lead Designer</div>
          <div className=" text-orange-400 flex justify-center gap-2 mt-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
