import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footerContent = [
  { title: "Company", list: ["About Us", "Pricing", "Contact Us", "Features"] },
  {
    title: "Product",
    list: ["Figma design system", "Los kit", "Android kit", "Wireframe"],
  },
  {
    title: "Resources",
    list: ["Templates", "Landing Pages", "Documentation", "Comp Library"],
  },
  {
    title: "Legal",
    list: [
      "Privacy policy",
      "Terms & Conditions",
      "Disclaimer",
      "Affiliate Programme",
    ],
  },
  {
    title: "Support",
    list: ["Help centre", "Raise ticket", "Report", "Refund"],
  },
];

const Component = ({ item }) => {
  return (
    <div className=" mt-5 md:w-52">
      <h4 className=" font-semibold tracking-wide">{item.title}</h4>
      <ul
        className="mt-2  text-
      xs sm:text-sm lg:text-base gap-x-3 gap-
      5 mb-6 md:mb-0 m:w-72"
      >
        {item.list.map((linkItem, i) => {
          return (
            <li
              key={i}
              className=" py-1
          text-xs font-medium leading-snug text-gray-700"
            >
              {linkItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function Footer() {
  return (
    <div className=" p-6">
      <div className=" pb-8 border-b  lg:px-60 mx-auto">
        <h2 className=" font-bold text-center lg:text-4xl md:text-3xl text-2xl">
          Mode UI
        </h2>
        <p className="mt-4 opacity-80 text-center md:px-20">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>
      <div className="md:flex flex-wrap gap-5 md:px-28 py-5 justify-between ">
        {footerContent.map((item, i) => {
          return <Component item={item} key={i} />;
        })}
      </div>
      <div className=" md:text-center mt-4">
        <div className=" text-slate-700 flex gap-6 md:justify-center  text-xl md:text-2xl ">
          <FaGithub />
          <FaLinkedin />
          <img src="/social.svg" alt="social" />
        </div>
        <div className="mt-4">© 2023 Mode UI Inc. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
