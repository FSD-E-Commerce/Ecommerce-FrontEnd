import React, { Fragment } from "react";






const AccessoriesSection = () => {

const data=[
{image:"https://wallpapercave.com/wp/wp3852708.jpg",name:"Exhaust"},
{image:"https://www.ctopreviews.com/wp-content/uploads/2020/09/Motorcycle-Fog-Light.jpg",name:"Fog Light"},
{image:"https://evotech-performance.com/cdn/shop/products/EVOTECH-2022-Ducati-Panigale-V4S-Tail-Tidy-L1190823_80300aed-e7c9-4540-8d45-cf79d88d1c5a_grande.jpg",name:"Tail Tidy"}

]



  return (
    <div className="w-full min-h-[400px] mt-20 mb-[20px] flex flex-col items-center flex-wrap justify-center">
      <h1 className="w-full h-[20%] px-4 py-5 text-left text-2xl">Accessories</h1>
      <div className="w-full h-full flex flex-row items-center flex-wrap justify-evenly">
        {
          data.map((value,index)=>(
        <Fragment key={index}>
        <div className="max-w-[460px] min-w-[450px] h-full flex flex-col justify-center items-center ">
        <div className="w-full min-h-[300px] relative ">
        <img
            src={value.image}
            alt="Exhaust"
            className="min-h-[300px] bg-black w-full rounded-lg absolute top-0 left-0 right-0 bottom-0"
          />
          <div className="min-w-[80px] top-4 left-4 py-4 flex flex-col items-center justify-evenly absolute bg-gradient-to-r from-[#0E4257] to-[#058CA6] outline-none rounded-xl text-white">
            <p>Upto</p>
            <p>10%</p>
            <p>Offer</p>
          </div> 
        </div>
        <h3 className="text-center text-xl font-medium py-5 w-full min-h-[20%]">{value.name}</h3>
        </div>
        </Fragment>
          ))


        }

      </div>
    </div>
  );
};

export default AccessoriesSection;
