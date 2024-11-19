import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCurrency } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";

const Data = [
  {
    id: "01",
    img: <TbTruckDelivery className="w-[80px] h-[80px] ml-28 " />,
    title: "FREE SHIPPING",
    description: "FREE SHIPPING ON ORDER ABOVE 2000",
  },
  {
    id: "02",
    img: <GrCurrency className="w-[80px] h-[80px] ml-28" />,
    title: "100% MONEY BACK",
    description: "YOU HAVE 30 DAYS TO RETURN",
  },
  {
    id: "03",
    img: <BiSupport className="w-[80px] h-[80px] ml-28" />,
    title: "24/7 CUSTOMER SUPPORT",
    description: "SUPPORT ONLINE 24 HRS A DAY",
  },
  {
    id: "04",
    img: <FaMapLocationDot className="w-[80px] h-[80px] ml-28 " />,
    title: "LIVE TRACKING",
    description: "TRACK YOUR ORDER FROM START TO FINISH",
  },
];

const Content = [
  {
    title: "OUR ORDER SUPPORT",
    description:
      "We are here to help you with any questions or concerns you may have about your order .",
  },
];

export const CardDesign = ({ value }) => {
  const { id, img, title, description } = value || {};
  return (
    <div className="w-80 h-60 bg-gradient-to-br from-[#0E4257] to-[#058CA6] rounded-3xl flex flex-col gap-3 p-4 ">
      <h3 className="text-white  ">{id}</h3>
      <hr className="w-full h-[0.15rem] bg-gray-200 border-0 rounded" />
      {img}
      <p className="text-white font-semibold ">{title}</p>
      <p className="text-black font-medium ">{description}</p>
    </div>
  );
};

export const CardDesign2 = ({ value }) => {
  const { title, description } = value || {};
  return (
    <div className="flex flex-col justify-start items-start p-5">
      <h2
        className="font-bold text-2xl text-[#0E4257] tracking-wide "
        style={{ textShadow: "1px 1px 3px #ffffff" }}
      >
        {title}
      </h2>
      <p className="text-gray-200 font-semibold text-justify mt-4">
        {description}
      </p>
    </div>
  );
};

export const SupportCard = () => {
  return (
    <div className="w-[50%] grid grid-cols-2 gap-4 mt-7 ">
      {Data.map((value) => (
        <CardDesign key={value.id} value={value} />
      ))}
    </div>
  );
};

export const SupportContent = () => {
  return (
    <div>
      {Content.map((value) => (
        <CardDesign2 key={value.title} value={value} />
      ))}
    </div>
  );
};

const SupportMain = () => {
  return (
    <div className="w-full h-[100vh] bg-[url('https://t4.ftcdn.net/jpg/03/65/60/33/360_F_365603381_jl2eSsk2nsz7hFbGpfZSWwfXLxO1Unp4.jpg')] bg-cover bg-no-repeat  ">
      <div className="w-full h-full bg-black bg-opacity-75">
        <div>
          <div>
            <SupportContent />
            <div>
              <div className="w-full flex flex-wrap justify-around">
                <img
                  className=" w-[30%] h-[70vh] rounded-xl mt-4  "
                  src="https://shutterstock.com/image-photo/portrait-beautiful-charming-asian-female-600nw-2352304361.jpg"
                  alt=""
                />
                <SupportCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMain;
