import React from "react";
import { TbWorld } from "react-icons/tb";
import { FiKey } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import Content from "./Content";
function Feature1() {
  return (
    <div className="md:mx-20 my-10 mx-5 mt-20 ">
      <Content />
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
