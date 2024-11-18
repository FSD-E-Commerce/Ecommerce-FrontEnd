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
    <nav className="w-full h-[60px] shadow-xl px-7 shadow-slate-600 flex flex-row justify-between items-center">
      <Link to={"/"}>
        <div>
          <img
            src={HeaderLogo}
            alt="logo"
            className="w-52 h-10 cursor-pointer"
          />
        </div>
      </Link>

      <div className="flex flex-row justify-center gap-5">
        {navMenuList.map((value, index) => (
          <Link key={index} to={value.path}>
            <span
              className={`py-2 rounded font-bold px-2 ${
                value.path === location.pathname
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {value.page}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex flex-row justify-center gap-4">
        <CgProfile className="text-xl text-blue-950 cursor-pointer" />
        <GoHeart className="text-xl text-blue-950 cursor-pointer" />
        <IoCartOutline className="text-xl text-blue-950 cursor-pointer" />
        <BsSearch className="text-xl text-blue-950 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBarcomp;
