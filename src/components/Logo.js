import React from "react";

function Logo() {
  return (
    <div className=" md:px-22 px-6 py-10">
      <div className="flex gap-6 flex-wrap justify-between md:justify-center items-center">
        <img src="/nust.svg" alt="nust" className=" h-3 md:h-5 lg:h-7 " />
        <img src="/mira.svg" alt="mira" className=" h-3 md:h-5 lg:h-7" />
        <img src="/lottie.svg" alt="lottie" className=" h-3 md:h-5 lg:h-7" />
        <img src="/wise.svg" alt="wise" className=" h-3 md:h-5 lg:h-7" />
        <img src="/dribble.svg" alt="dribble" className=" h-3 md:h-5 lg:h-7" />
        <img src="/kinsta.svg" alt="kinsta" className=" h-3 md:h-5 lg:h-7" />
        <img
          src="/agellist.svg"
          alt="angellist"
          className=" h-3 md:h-5 lg:h-6"
        />
        <img src="/behance.svg" alt="behance" className=" h-3 md:h-5 lg:h-6" />
      </div>
    </div>
  );
}

export default Logo;
