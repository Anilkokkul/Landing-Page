import React from "react";
import { FaArrowRight } from "react-icons/fa";

function HeroSection({ content }) {
  return (
    <div className="flex justify-center pt-10 relative">
      <div className=" md:w-[700px]  text-center p-7">
        <div>
          <span className=" text-sm">Seamless experience</span>
          <h1 className=" md:text-6xl font-bold text-4xl mt-5">
            Unleashing the Next Generation of Card Solutions
          </h1>
          <p className="mt-4 md:px-14">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>
        <div className="text-center">
          <button className=" bg-fuchsia-950 p-2 font-bold rounded-md text-white my-4 w-full sm:w-48">
            {content}
            <FaArrowRight className="mx-1 inline h-4 0-1" />
          </button>
          <div>*No credit card required</div>
        </div>
      </div>
      <img
        src="/Mesh.png"
        alt="bg"
        className=" absolute -z-10 p-7 md:w-[550px]  lg:w-[600px] lg:top-2"
      />
    </div>
  );
}

export default HeroSection;
