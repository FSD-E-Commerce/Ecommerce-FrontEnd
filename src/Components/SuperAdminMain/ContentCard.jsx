import React from "react";
import { FaCalendar, FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

const ContentCard = () => {
  const selldata = [
    {
      icon: <RiAdminFill />,
      title: "Total Lawyers",
      value: 50,
      changeInValue: 37.8,
      changeDuration: "this week",
      backgroundColor: "#9AF4F9 ",
      iconColor: "#08B58C ",
    },
    {
      icon: <FaUsers />,
      title: "Total Users",
      value: 60,
      changeInValue: 5,
      changeDuration: "this week",
      backgroundColor: "#C8AFEF ",
      iconColor: "#7F069B",
    },
    {
      icon: <FaCalendar />,
      title: "Total Appointmrnts",
      value: 48,
      changeInValue: -2,
      changeDuration: "this week",
      backgroundColor: "#6BBBDB ",
      iconColor: "#30069B",
    },
    {
      icon: <FaIndianRupeeSign />,
      title: "Total Revenue ",
      value: 1000,
      changeInValue: -11,
      changeDuration: "this week",
      backgroundColor: "#F371E9 ",
      iconColor: "#A5056A",
    },
  ];
  return (
    <div className="flex gap-3 flex-wrap">
      {selldata.map((data, index) => {
        let arrowClass = "";
        let textColorClass = "";
        if (data.changeInValue < 0) {
          arrowClass = "downward-arrow text-red-500";
          textColorClass = "text-red-500";
        } else if (data.changeInValue > 0) {
          arrowClass = "upward-arrow text-green-500";
          textColorClass = "text-green-500";
        }
        return (
          <div className="grow  " key={index}>
            <div className="flex grow rounded-lg border px-3 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                className="w-24 h-24 rounded-full relative m-4"
                style={{ backgroundColor: data.backgroundColor }}
              >
                <div
                  className="absolute top-6 left-6 mx-auto flex justify-center items-center text-5xl"
                  style={{ color: data.iconColor }}
                >
                  {data.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-sm text-neutral-80 text-gray-400">
                  {data.title}
                </h5>
                <p className="text-xl font-bold dark:text-neutral-200">
                  {data.value}
                </p>
                <p
                  className={`text-xs text-neutral-500 dark:text-neutral-300 ${textColorClass}`}
                >
                  <div className={`flex ${arrowClass}`}>
                    <div className="mt-[1.5px]">
                      {data.changeInValue < 0 ? (
                        <HiOutlineArrowDown />
                      ) : (
                        <HiOutlineArrowUp />
                      )}
                    </div>
                    <div>{Math.abs(data.changeInValue)}%</div>
                    <div className="ml-1 text-gray-400">
                      {data.changeDuration}
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentCard;
