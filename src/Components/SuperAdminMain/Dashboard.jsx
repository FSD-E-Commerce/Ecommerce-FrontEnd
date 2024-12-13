import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiHandWavingLight } from "react-icons/pi";
import ContentCard from "./ContentCard";
import OverviewChart from "./OverviewChart";
import ProductTable from "./AdminTable";



const Dashboard = () => {
  return (
    <div className="bg-slate-100 h-full w-full px-10  overflow-y-scroll max-md:mt-[80px]">
      <div className="mx-2 pt-4">
        <div className="flex justify-between">
          <div className="flex font-bold text-lg">
            Hello Abdul
            <span className="mt-1 text-yellow-400">
              <PiHandWavingLight />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ContentCard />
        
      </div>
      <div className="mt-10 flex gap-8 flex-wrap w-[100%]">
        <div className="flex grow w-[60%]">
          <OverviewChart />
        </div>
        <div className="sm:flex-grow">
          {/* <CustomerChart /> */}
          
        </div>
      </div>
      <div className="mt-10 mb-10">
        <ProductTable />
      </div>
    </div>
  );
};

export default Dashboard;
