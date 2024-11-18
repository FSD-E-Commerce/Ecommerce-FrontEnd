import React from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";



const CardMaping = ({ carddata }) => {
    const {image , brand ,sparename ,discription , rating, price, path} = carddata;

    return (
      <div class=" flex justify-center items-center min-h-screen shadow-lg shadow-black  rounded-xl">
        <div class="max-w-[720px] mx-auto  shadow-gray-400  shadow-lg  rounded-xl">
          <div class="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl shadow-lg shadow-[#0E4257] text-gray-700 ">
            <div class="  overflow-hidden text-gray-700 bg-transparent rounded-xl ">
             
              <img
                src={image}
                alt="ui/ux review check"
                className="p-3 rounded-xl top-4"
              />
           
              <div className="heart relative left-[280px] flex items-center -space-x-1  h-8 w-9 bg-white   object-cover object-center rounded-full hover:scale-125  hover:text-[#0E4257]">
                  <FaRegHeart className="text-lg relative  ml-1 "/>
              </div>
           
               <div class="px-3">
                <p class="block mt-2 font-sans text-sm   text-gray-700">{brand}</p>
                <h4 class="block font-sans text-xl font-semibold  text-blue-gray-900">
                 {sparename}
                </h4>
              </div>
              <p class="block mt-2 px-3 font-sans text-sm  font-normal  text-gray-700">
               {discription}
              </p>
  
              <div className="w-[330px]  h-[18px] flex justify-start  items-center space-x-8 py-5 mb-6 px-3 ">
                <div>
                  <p className=" font-semibold">Ratings</p>
                </div>
                <div className=" flex">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarHalfOutline /> 
                  {rating}
                </div>
              </div>
             
            </div>
            
            <div class="flex items-center justify-around p-3 bg-gradient-to-r from-[#0E4257] to-[#058CA6]
             ">
            <div className=" w-[90px] h-[35px] px-3 relative bottom-[-40] text">
                <h2 className=" text-white text-lg"> <span className=" font-bold text-lg">RS:</span>{price}</h2>
              </div>
             
             
              <div class=" relative top-[-30px] flex items-center -space-x-2  h-10 w-10 bg-white border-4   border-[#0E4257]  object-cover object-center rounded-full hover:scale-125 hover:border-[#058CA6]  ">
                <FaCartPlus class="relative text-xl  ml-1 " />
              </div>
              <div >
                <Link to={path} >
                <button className="w-[90px] h-[35px] border  bg-white  rounded-lg text-[#0E4257] font-medium text-sm  ">BUY NOW </button>
                </Link>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };




 const ReusableCard = () => {
    const data = [
      {
        image:
          "https://www.pngkey.com/png/detail/253-2538497_hero-honda-cbz-xtreme-bike-spare-parts-safexbikes.png",
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
          "https://c0.klipartz.com/pngpicture/404/834/gratis-png-scooter-moto-accesorios-motor-estator-motor-thumbnail.png",
        brand: "HONDA",
        sparename: "ENGNEE",
        discription:
          "The GX160’s 1/2 reduction mechanism is specifically developed for long-tail boats operating",
        rating: 4,
        price: 8000,
        path: "/prod-2",
      },
      {
        image:
          "https://pikpart.s3.ap-south-1.amazonaws.com/productCategoryIcon/BRAKESHOE-SPLENDOR-REAR.png",
        brand: "susiki",
        sparename: "BRAKE SPARE",
        discription:
          "Conversely, a lower final drive ratio will lead to slower initial acceleration, but a higher top speed. In general,",
        rating: 2,
        price: 2000,
        path: "/prod-3",
      },
      {
        image:
          "https://p7.hiclipart.com/preview/470/228/921/spare-part-motorcycle-engine-machine-engine-thumbnail.jpg",
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
        <div className="w-[100%] flex gap-[30px] justify-center items-center">
          {data.map((value, index) => (
            <CardMaping key={index} carddata={value} />
          ))}
        </div>
      </>
    );
  }



export default ReusableCard;
