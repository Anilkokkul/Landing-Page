import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { url } from "../url";
import { Link } from "react-router-dom";

function Navbar({ navLogo }) {
  const [toggle, setToggle] = useState(false);

  const logoUrl = `${url}/uploads/${navLogo}`;

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative ">
      <button className=" absolute z-40 left-3 top-[100px] animate-bounce	  bg-fuchsia-950 p-2 font-bold rounded-md text-center  text-white my-4 w-48 ">
        <Link to={"/admin"}>Go to Admin panel</Link>
      </button>
      <div className=" py-4 px-6 md:px-20 lg:px-28 border-b relative z-30 bg-white">
        <div className="md:px-18 h-10 flex justify-between  items-center font-bold">
          <div>
            <img
              src={logoUrl}
              alt="logo"
              className="max-w-20 max-h-16 object-contain"
            />{" "}
          </div>
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
            <img src="/chevron-down.svg" alt="down" className=" inline" />
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
