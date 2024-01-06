import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiKey } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
function Feature1() {
  return (
    <div className="md:mx-20 my-10 mx-5 mt-20 ">
      <div className="text-center md:max-w-[600px] w-11/12  mx-auto md:px-6">
        <h1 className=" md:text-4xl text-3xl">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="mt-4 w-5/6 mx-auto">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <button className="text-fuchsia-700 font-bold cursor-pointer mt-3">
          <span>Compare all Pro features</span>
          <FaArrowRight className="mx-1 inline" />
        </button>
      </div>
      <div className="flex lg:flex-row flex-col items-center mt-10 w-full justify-center gap-14">
        <div className="flex flex-col items-center lg:w-1/3 text-center max-w-[310px] ">
          <TbWorld className=" text-5xl rounded-full m-4 text-fuchsia-800 p-2 bg-fuchsia-100" />
          <h2 className=" mb-2 font-extrabold ">Globally Accepted</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/3 text-center max-w-[310px] ">
          <FiKey className=" text-5xl rounded-full m-4 text-fuchsia-800 p-2 bg-fuchsia-100" />
          <h2 className=" mb-2 font-extrabold">Biometric Integrated</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/3 text-center max-w-[310px]">
          <CiLock className=" text-5xl rounded-full m-4 text-fuchsia-800 p-2 bg-fuchsia-100" />
          <h2 className=" mb-2 font-extrabold">Fully Secured</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature1;
