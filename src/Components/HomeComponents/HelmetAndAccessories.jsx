import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BlackVarient, DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent";

const HelmetsAndAccessories = () => {
    // const img='https://wallpapercave.com/wp/wp7610068.jpg';
  
    const data = [
      { name: "FULL FACE HELMET", path: "/helmet" },
      { name: "HALF FACE HELMET", path: "/helmet" },
      { name: "GOGGLES", path: "/helmet" },
      { name: "HELMET ACCESSORIES", path: "/helmet" },
      { name: "COMMUCATION", path: "/helmet" },
      { name: "ACTION", path: "/helmet" },
    ];
  
    return (
      <div>
        <div className="px-3 w-full h-full flex-wrap mt-24 mb-24 flex items-center gap-3 justify-evenly hover:duration-700 hover:ease-in-out hover:transition-transform">
          {data.map((values, index) => (
            <Fragment key={index}>
              <div className="relative min-h-[400px] rounded-xl min-w-[160px] bg-[url('https://wallpapercave.com/wp/wp7610068.jpg')] bg-cover bg-no-repeat flex items-end grow hover:grow-[100] ">
                <div className="w-full bottom-0 h-full absolute opacity-0 hover:opacity-100">
                  <div className={`w-full h-[20%] rounded-lg  bg-gradient-to-r to-[${LightVarient()}] from-[${DarkVarient()}] absolute bottom-0 flex items-center justify-evenly`}>
                    <span className={` w-[50%] h-full py-2 rounded flex items-center justify-start text-lg font-medium text-${WhiteVarient()}`}>
                      {values.name}
                    </span>
                    <Link to={values.path}>
                      <span className={`w-[50%] h-full bg-${WhiteVarient()} text-[${DarkVarient()}] px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-${BlackVarient()}`}>
                        Shop Now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  };
  

export default HelmetsAndAccessories;  