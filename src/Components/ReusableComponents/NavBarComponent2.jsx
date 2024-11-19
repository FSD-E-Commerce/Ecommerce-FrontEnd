// import { CardMedia } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../images/Header Logo.png";

const NavBarcomp = () => {
  const navMenuList = [
    { page: "HOME", path: "/" },
    { page: "SPARES BY BIKE", path: "/spares" },
    { page: "LUGGAGE", path: "/luggage" },
    { page: "ACCESORIES", path: "/accesories" },
    { page: "BIKE SERVICE", path: "/bikeservice" },
    { page: "OFFERS", path: "/offers" },
    { page: "ABOUT", path: "/about" },
  ];

  const location = useLocation();

  return (
    <nav className="fixed top-0 z-20 bg-white w-full min-h-20 px-7 flex flex-row flex-wrap justify-between items-center shadow-md shadow-gray-800">
      <div className="w-[20%] h-full">
      <Link to={"/"}>
          <img
            src={HeaderLogo}
            alt="logo"
            className="w-[200px] h-fit  cursor-pointer"
          />
      </Link>
      </div>
      <div className="w-[60%] font-medium h-full flex flex-row justify-center items-center gap-5">
        {navMenuList.map((value, index) => (
          <Link key={index} to={value.path}>
            <span
              className={`px-2 py-1.5 ${
                value.path === location.pathname
                  ? "rounded-md bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
                  : " text-[#0E4257]"
              }
              text-black font-medium hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-[#0E4257] `}
            >
              {value.page}
            </span>
          </Link>
        ))}
      </div>

      <div className="w-[20%] h-full flex flex-row justify-end items-center gap-4">
      <BsSearch className="text-xl text-blue-950 cursor-pointer" />
        <GoHeart className="text-xl text-blue-950 cursor-pointer" />
        <IoCartOutline className="text-xl text-blue-950 cursor-pointer" />
        <CgProfile className="text-xl text-blue-950 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBarcomp;
