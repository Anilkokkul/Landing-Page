import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

function CallToAction() {
  return (
    <div className=" p-6 py-9 border-b ">
      <div className=" lg:w-2/4 mx-auto text-center">
        <h2 className=" lg:text-3xl my-4 font-bold px-12 ">
          Unlock Limitless Possibilities with Our New Card Solutions
        </h2>
        <div className="flex justify-center items-center gap-2 flex-col md:flex-row">
          <button className="flex justify-center items-center gap-2 text-white bg-fuchsia-950 rounded-lg m-1 md:p-2 p-1 w-full max-w-[400px] md:max-w-max">
            <span>Unlock your card</span>{" "}
            <CiCreditCard1 className="text-xl font-semibold" />
          </button>
          <button className="flex justify-center items-center gap-2 text-slate-800 bg-slate-300 rounded-lg md:p-2 m-1 p-1 w-full md:max-w-max max-w-[400px]">
            <span>Customer support</span>
            <SlEarphonesAlt className="text-xl font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
