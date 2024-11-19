import { DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent"

const HeroSection = () =>{


return(

    <div className={`w-full mt-5 h-[100vh] bg-${WhiteVarient()} flex justify-center items-center`}>
          <div
            className={`
           w-[90%] h-[90%] rounded-3xl bg-gradient-to-r from-[${LightVarient()}] to-[${DarkVarient()}]`}
          ></div>
        </div>
)

}


export default HeroSection;