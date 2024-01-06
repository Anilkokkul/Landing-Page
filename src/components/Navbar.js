import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className=" py-5 px-5 md:px-20 lg:px-28">
      <div className="md:px-18 h-10 flex justify-between  items-center font-bold">
        <h1 className=" text-2xl font-bold">Mode UI</h1>
        <div>
          <ul className="lg:flex gap-4 opacity-70 hidden ">
            <li>
              Card Access <img src="/chevron-down.png" alt="down" className=" inline" />{" "}
            </li>
            <li>Banking</li>
            <li>Processing</li>
            <li>About</li>
            <li>Carrier</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button className=" bg-slate-200 px-2 rounded-md p-1 flex items-center gap-2">
            <span>Login</span> <img src="/icons.png" alt="login" />{" "}
          </button>
          <div
            className=" font-bold text-2xl lg:hidden transition duration-1000 ease-in-out"
            onClick={handleToggle}
          >
            {toggle ? (
              <span>
                <MdOutlineClose />
              </span>
            ) : (
              <span>
                <AiOutlineMenu />
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex justify-end toggle ${
          toggle ? "" : "hidden"
        } lg:hidden`}
      >
        <ul className="text-start max-w-96 bg-slate-300 w-full absolute rounded-md transition overflow-hidden">
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 leading-8 px-3 tracking-wide">
            Card Access ▼
          </li>
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide">
            Banking
          </li>
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide">
            Processing
          </li>
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide">
            About
          </li>
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide">
            Carrier
          </li>
          <li className=" hover:bg-slate-600 hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
