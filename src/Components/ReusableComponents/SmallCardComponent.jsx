import React from "react";
import Brand from "../images/bajaj 1.png";
import Bike from "../images/135 dti 1.png";

const CardDesign = ({ value }) => {
  const { name, brand, bike } = value || {};

  return (
    <div className="w-[300px] min-h-auto bg-white flex flex-col justify-center items-center gap-4 p-4 border-2 border-slate-800 shadow-md shadow-slate-500 rounded-[30px]">
      <div className="w-full h-auto flex justify-between items-start font-bold text-2xl">
        <p>{name}</p>
        {brand}
      </div>
      <div>
        {bike}
      </div>
    </div>
  );
};

const BikeCardMain = () => {
  const bikeData = [
    {
      name: "135 DTSI",
      brand: <img src={Brand} alt="Brand" className="w-16 h-16"/>,
      bike: <img src={Bike} alt="Bike" />,
    },
    {
      name: "135 DTSI",
      brand: <img src={Brand} alt="Brand" className="w-16 h-16" />,
      bike: <img src={Bike} alt="Bike" />,
    },
    {
      name: "135 DTSI",
      brand: <img src={Brand} alt="Brand" className="w-16 h-16" />,
      bike: <img src={Bike} alt="Bike" />,
    },
  ];

  return (
    <div className="w-full min-h-auto flex flex-wrap gap-5 justify-center items-start p-5">
      {bikeData.map((value, index) => (
        <CardDesign key={index} value={value} />
      ))}
    </div>
  );
};

export default BikeCardMain;
