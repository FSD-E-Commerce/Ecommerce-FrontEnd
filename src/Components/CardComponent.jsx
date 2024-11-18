import React from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardMaping = ({ carddata }) => {
  const { image, brand, sparename, discription,price, path } =
    carddata;

  return (
    <>
      <div class="w-[350px] max-h-[500px] flex flex-col overflow-hidden rounded-xl shadow-lg shadow-[#0E4257] text-gray-700 ">
       
        <div class="w-full h-[380px] relative overflow-hidden text-gray-700 bg-transparent rounded-xl ">
          <img
            src={image}
            alt="ui/ux review check"
            className="w-full h-[60%] px-4 py-4 rounded-xl"
          />
          <div className="flex justify-center items-center h-8 w-9 absolute top-5 right-5  bg-[#0E4257] rounded-[10px] hover:scale-125  hover:text-[#0E4257]">
            <FaRegHeart className="text-lg text-white" />
          </div>

          <div class="w-full h-[30%] px-3 flex flex-col items-start justify-center gap-0">
            <div className="w-full h-[50%] flex flex-col items-start justify-center ">
              <p class="text-sm text-[#0E4257]">{brand}</p>
              <h4 class="text-xl font-semibold">
                {sparename}
              </h4>
            </div >
            <p class="w-full h-[50%] font-normal text-sm text-justify text-black">{discription}</p>
          </div>

            <div className="w-full h-[10%] flex items-start justify-start px-3 gap-1">
              <IoStarSharp className="text-xl" />
              <IoStarSharp className="text-xl"/>
              <IoStarSharp className="text-xl"/>
              <IoStarSharp className="text-xl" />
              <IoStarHalfOutline className="text-xl" />

            </div>
        </div>

        <div
          class="relative w-full h-[80px] px-7 flex items-center justify-between  bg-gradient-to-r from-[#0E4257] to-[#058CA6]
             "
        >
             <div className="w-[30%] h-full text-white flex justify-center items-center gap-1">
             <span className=" font-bold text-lg">RS :</span>
             <span className="text-xl">{price}</span>
             </div>
             
          <div class="absolute -top-5 left-40 flex items-center h-10 w-10 bg-white border-4 border-[#0E4257]  rounded-full hover:scale-125 hover:border-[#058CA6]  ">
            <FaCartPlus class="text-xl  ml-1" />
          </div>

          <div className="w-[30%] h-full flex items-center justify-center">
            <Link to={path}>
              <button className="px-2 py-2 border bg-white rounded-lg text-[#0E4257] font-semibold text-sm  ">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ReusableCard = () => {
  const data = [
    {
      image:
        "https://imgd.aeplcdn.com/476x268/n/cw/ec/103795/yzf-r15-front-suspension-preload-adjuster.jpeg",
      brand: "HERO",
      sparename: "DOME",
      discription:
        "Hero Honda Cbz Xtreme Bike Spare Parts - Safexbikes Motorcycle Superstore",
      rating: 3,
      price: 3000,
      path: "/prod-1",
    },
    {
      image:
        "https://www.carparts.com/blog/wp-content/uploads/2020/03/timing-chain-system-1024x683.jpeg",
      brand: "HONDA",
      sparename: "ENGNEE",
      discription:
        "The GX160’s 1/2 reduction mechanism is specifically developed for long-tail",
      rating: 4,
      price: 8000,
      path: "/prod-2",
    },
    {
      image:
        "https://imgd.aeplcdn.com/476x268/n/cw/ec/103795/yzf-r15-rear-disc-brake.jpeg",
      brand: "YAMAHA",
      sparename: "BRAKE SPARE",
      discription:
        "Conversely, a lower final drive ratio will lead to slower initial acceleration.....",
      rating: 2,
      price: 2000,
      path: "/prod-3",
    },
    {
      image:
        "https://i.pinimg.com/originals/77/6e/38/776e389b1783f0af7cb1dd3f6dff1c78.jpg",
      brand: "DUKE",
      sparename: "CHAINSPRAKET",
      discription:
        "Hero Honda Cbz Xtreme Bike Spare Parts - Safexbikes Motorcycle Superstore",
      rating: 3,
      price: 5000,
      path: "/prod-4",
    },
  ];

  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-wrap gap-6">
        {data.map((value, index) => (
          <CardMaping key={index} carddata={value} />
        ))}
      </div>
    </>
  );
};

export default ReusableCard;
