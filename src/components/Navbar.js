import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative ">
      <div className=" py-4 px-6 md:px-20 lg:px-28 border-b relative z-30 bg-white">
        <div className="md:px-18 h-10 flex justify-between  items-center font-bold">
          <h1 className=" text-2xl font-extrabold tracking-wide">Mode UI</h1>
          <div>
            <ul className="lg:flex gap-4 opacity-70 hidden ">
              <li>
                Card Access{" "}
                <img src="/chevron-down.png" alt="down" className=" inline" />{" "}
              </li>
              <li className=" cursor-pointer">Banking</li>
              <li className=" cursor-pointer">Processing</li>
              <li className=" cursor-pointer">About</li>
              <li className=" cursor-pointer">Carrier</li>
              <li className=" cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <button className=" bg-slate-200 px-2 rounded-md p-1 flex items-center gap-2">
              <span>Login</span> <img src="/icons.png" alt="login" />{" "}
            </button>
            <div
              className="font-bold text-2xl lg:hidden"
              onClick={handleToggle}
            >
              {toggle ? (
                <div>
                  <MdOutlineClose />
                </div>
              ) : (
                <div>
                  <AiOutlineMenu />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden w-[98%] mx-[1%] absolute z-20 transition-all duration-700 ease-in-out ${
          toggle ? "top-20 opacity-100 " : "top-[-400px] opacity-0"
        }  `}
      >
        <ul
          className={`text-start w-full bg-fuchsia-400 text-white  rounded-md transition-all overflow-hidden p-4 duration-900  `}
        >
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 leading-8 px-3 tracking-wide cursor-pointer">
            Card Access{" "}
            <img
              src="/chevron-down.svg"
              alt="down"
              className=" inline"
            />
          </li>
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide cursor-pointer">
            Banking
          </li>
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide cursor-pointer">
            Processing
          </li>
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide cursor-pointer">
            About
          </li>
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide cursor-pointer">
            Carrier
          </li>
          <li className=" hover:bg-fuchsia-600 rounded hover:text-white transition duration-700 h-8 px-3 leading-8 tracking-wide cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
