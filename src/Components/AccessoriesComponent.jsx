import React from "react";
// import Image1 from "../assests/exhaust.png";
// import Image2 from "../assests/foglight.png";
// import Image3 from "../assests/tail-tidy.png";

const AccessoriesSection = () => {

const images=["https://wallpapercave.com/wp/wp3852708.jpg","https://m.media-amazon.com/images/I/716eiKzBMxL._SL1500_.jpg",
 " https://evotech-performance.com/cdn/shop/products/EVOTECH-2022-Ducati-Panigale-V4S-Tail-Tidy-L1190823_80300aed-e7c9-4540-8d45-cf79d88d1c5a_grande.jpg"]

  return (
    <div className="px-5 md:px-0">
      <h1 className="px-4 py-5 text-center text-2xl">Accessories</h1>

      <div className="px-4 py-10 gap-5 flex flex-col md:flex-row bg-slate-300 text-xl font-bold justify-evenly">
        {/* Exhaust Item */}
        <div className="relative order-1">
          <div className="px-2 left-4 top-4 py-4 absolute bg-blue-700 outline-none rounded-xl text-cyan-50">
            <p>Upto</p>
            <p>10%</p>
            <p>Offer</p>
          </div>
          <img
            src={images[0]}
            alt="Exhaust"
            className="m-2 border-4 rounded-xl outline-none w-full md:w-49"
          />
          <h3 className="text-center">Exhaust</h3>
        </div>

        {/* Fog Light Item */}
        <div className="relative order-2">
          <div className="absolute px-2 py-4 top-4 left-4 bg-blue-700 outline-none rounded-xl text-cyan-50">
            <p>Upto</p>
            <p>10%</p>
            <p>Offer</p>
          </div>
          <img
            src={images[1]}
            alt="Fog Light"
            className="m-2 border-4 rounded-xl outline-none w-full md:w-49"
          />
          <h3 className="text-center">Fog Light</h3>
        </div>

        {/* Tail Tidy Item */}
        <div className="relative order-3">
          <div className="absolute px-2 py-4 top-4 left-4 bg-blue-700 outline-none rounded-xl text-cyan-50">
            <p>Upto</p>
            <p>10%</p>
            <p>Offer</p>
          </div>
          <img
            src={images[2]}
            alt="Tail Tidy"
            className="m-2 border-4 rounded-xl outline-none w-full md:w-49"
          />
          <h3 className="text-center">Tail Tidy</h3>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesSection;
