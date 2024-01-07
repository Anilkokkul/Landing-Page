import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Content() {
  return (
    <div className="text-center md:max-w-[600px] w-11/12  mx-auto md:px-6">
      <h1 className=" md:text-4xl text-3xl font-bold">
        Elevating Card Programs with Cutting-Edge Technology
      </h1>
      <p className="mt-4 w-5/6 mx-auto">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>
      <button className="text-fuchsia-700 font-bold cursor-pointer mt-3">
        <span>Compare all Pro features</span>
        <FaArrowRight className="mx-1 inline" />
      </button>
    </div>
  );
}

export default Content;
