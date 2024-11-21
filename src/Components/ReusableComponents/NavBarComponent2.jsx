// import { CardMedia } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../images/Header Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser, FaRegHeart } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GrCart } from "react-icons/gr";

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
    <div className="w-full fixed top-0 z-20 h-full flex flex-col ">
      <nav className="max-sm:py-5 max-sm:gap-1 bg-white w-full min-h-20 px-7 flex flex-row gap-5 flex-wrap justify-between items-center shadow-md shadow-gray-800">
      <div className="w-[200px] max-sm:w-[100px] h-full">
        <Link to={"/"}>
          <img
            src={HeaderLogo}
            alt="logo"
            className="w-[200px] h-fit max-sm:w-[100px]  cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-[900px] hidden  font-medium h-full 2xl:flex xl:flex flex-row flex-wrap justify-center items-center gap-5">
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

      <div className="w-[150px] max-sm:w-[120px] h-full flex flex-row justify-end items-center gap-4">
        <Link>
        <ImSearch className="text-2xl font-bold text-blue-950" />
        </Link>
        <Link>
        <FaRegHeart className="text-2xl text-blue-950" />
        </Link>
       <Link>
       <GrCart className="text-2xl text-blue-950" />
       </Link>
       <Link>
       <FaCircleUser className="text-2xl text-blue-950" />
       </Link>
       <button> 
        <GiHamburgerMenu className="xl:hidden font-bold text-2xl text-blue-950" />
       </button>
      </div>
      </nav>
      
      <div className="w-full h-full">
        <div className="w-[300px] h-[500px] flex flex-col items-center justify-start  absolute right-0 bg-white shadow-md shadow-gray-800">
        {navMenuList.map((value, index) => (
          <Link key={index} to={value.path}>
            <div
              className={`w-[300px] h-[50px]  ${
                value.path === location.pathname
                  ? " bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
                  : " text-[#0E4257]"
              }
              text-black font-medium hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-[#0E4257] `}
            >
              {value.page}
            </div>
          </Link>
        ))}

        </div>
      </div>
    </div>
  );
};

export default NavBarcomp;
