import React, { Fragment } from "react";
import {
  BlackVarient,
  DarkVarient,
  LightVarient,
  WhiteVarient,
} from "../ColorComponent/ColorComponent";

const AccessoriesSection = () => {
  const data = [
    { image: "https://wallpapercave.com/wp/wp3852708.jpg", name: "Exhaust" },
    {
      image:
        "https://www.ctopreviews.com/wp-content/uploads/2020/09/Motorcycle-Fog-Light.jpg",
      name: "Fog Light",
    },
    {
      image:
        "https://evotech-performance.com/cdn/shop/products/EVOTECH-2022-Ducati-Panigale-V4S-Tail-Tidy-L1190823_80300aed-e7c9-4540-8d45-cf79d88d1c5a_grande.jpg",
      name: "Tail Tidy",
    },
  ];

  return (

    <div className="w-full h-full xl:h-[650px] lg:h-[1000px] md:h-[1000px] sm:h-[1350px] mt-20 py-10 flex flex-col items-center flex-wrap justify-center">
    
      <h1 className="w-full h-fit px-4 py-5 text-left text-2xl font-medium">
        Accessories
      </h1>
      <div className="w-full h-fit flex flex-row items-center flex-wrap justify-evenly gap-10">
      {/* <div className="min-w-[450px] h-fit grid grid-cols-3 gap-5 "> */}
      
      
        {data.map((value, index) => (
          <Fragment key={index}>
            <div className="relative min-w-[450px] min-h-[300px] flex flex-col justify-center items-center">
                <img
                  src={value.image}
                  alt="Exhaust"
                  className={`min-h-[300px] bg-${BlackVarient()} w-full rounded-lg absolute top-0 left-0 right-0 bottom-0`}
                />
                <div
                  className={`min-w-[80px] top-4 left-4 py-4 flex flex-col items-center justify-evenly absolute bg-gradient-to-r from-[${DarkVarient()}] to-[${LightVarient()}] outline-none rounded-xl text-${WhiteVarient()}`}
                >
                  <p>Upto</p>
                  <p>10%</p>
                  <p>Offer</p>
                </div>
                <h3 className={`absolute bottom-0 text-${WhiteVarient()} text-center text-xl font-semibold py-5 w-full min-h-[20%]`}>
                {value.name}
              </h3>
              </div>
          
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesSection;
