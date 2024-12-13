// import { AgCharts } from "ag-charts-react";
import { Chart as ArcElement, Legend,  plugins,  Tooltip } from "chart.js";
// import { plugin } from "postcss";
import React from "react";
import { Pie } from "react-chartjs-2";
// import { BiDoughnutChart, BiSolidDoughnutChart } from "react-icons/bi";

// const data = {
//   labels: ["New", "Old", "Rejoin"],
//   datasets: [
//     {
//       data: [15, 29, 43],
//       backgroundColor: ["#FF6384", "#36A2EB", "#dddddd"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//     },
//   ],
// };
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
// };

ChartJS.register(ArcElement, Tooltip, Legend);
const CustomerChart = () => {
  const data = {
    labels: ["Active Admin", "Active Users", "New Admin", "New Users"],
    datasets: [
      {
        label:"User Distribution",
        data:[45,25,20,10],
        backgroundColor:["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"],
        borderColor:["#fff","#fff","#fff","#fff"],
        borderWidth:1,
      },
    ],
  };

  const options ={
    reponsive : true,
    plugins:{
      legend:{
        position: "right",
      },
    },
  };
  // const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [12, 19, 3, 5],
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     tooltip: {
  //       enabled: true,
  //       callbacks: {
  //         label: function (tooltipItem) {
  //           const label = data.labels[tooltipItem.dataIndex];
  //           const value = data.datasets[0].data[tooltipItem.dataIndex];
  //           return `${label}: ${value}`;
  //         },
  //       },
  //     },
  //     legend: {
  //       display: true,
  //       position: "top",
  //       labels: {
  //         color: "black",
  //         font: {
  //           size: 16,
  //         },
  //       },
  //     },
  //   },
  //   maintainAspectRatio: false,
  // };
  return (
    <div className="w-[50%] ">
      <h2 className="text-center">User Statistics</h2>
      <Pie data={data} options={options}/>
    </div>
    // <div className="w-full max-w-lg mx-auto h-80 md:h-[400px]">
    //   <h2 className="text-center text-xl font-bold mb-4">Pie chart</h2>
    //   <Pie data={data} options={options} />
    // </div>
    //   <div className="bg-white rounded-md p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    //     <p className="font-bold text-lg">Customers</p>
    //     <p className="text-gray-400 text-sm">Customer that buy products</p>
    //     <div className="flex justify-center items-center">
    //         <div className="chart-container mt-2 relative" style={{ maxWidth:'225px'}}>
    //             <AgCharts data={data} options={options} />
    //             <div className="absolute top-20 left-20">
    //                 <p className="font-blod px-3">65%</p>
    //                 <p className="text-sm">Total New </p>
    //                 <p className="text-sm">Customers</p>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
  );
};

export default CustomerChart;
