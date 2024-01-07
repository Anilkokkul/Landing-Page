import React from "react";

const details = [
  {
    title: "2 Million",
    type: "Customers",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "1K",
    type: "Downloads",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "$73 Million",
    type: "Transaction",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "2.0",
    type: "Latest Version",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

const Content = ({ details }) => {
  return (
    <div className="text-center p-4 lg:w-72 max-w-80">
      <h1 className=" text-3xl font-bold text-fuchsia-900">{details.title}</h1>
      <div className=" font-bold mt-4">{details.type}</div>
      <p>{details.description}</p>
    </div>
  );
};

function Description() {
  return (
    <div className="p-6 flex flex-col lg:flex-row gap-4 justify-center items-center mt-3">
      {details.map((item, i) => {
        return <Content details={item} key={i} />;
      })}
    </div>
  );
}

export default Description;
