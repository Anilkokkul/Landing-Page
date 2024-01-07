import React from "react";
import Content from "./Content";

function Feature2() {
  return (
    <div className="md:mx-20 my-10 mx-5 mt-20 ">
      <Content />
      <div className="flex gap-6 mt-10 p-6 justify-center items-center lg:flex-row flex-col">
        <div className="lg:w-[500px]">
          <img src="/image1.jpg" className="w-full" alt="feature" />
        </div>
        <div className="lg:w-[500px]">
          <img src="/image2.jpg" className="w-full" alt="feature" />
        </div>
      </div>
    </div>
  );
}

export default Feature2;
