// import { Carousel } from "@material-tailwind/react";
import { DarkVarient, LightVarient, WhiteVarient } from "../ColorComponent/ColorComponent";
 



// export function CarouselDefault() {
//   return (
//     <Carousel className="rounded-xl">
//       <img src="https://c4.wallpaperflare.com/wallpaper/597/132/967/monochrome-black-background-chains-bicycle-wallpaper-preview.jpg" alt="" />
//       {/* <img
//         src="https://wallpaperaccess.com/full/1329859.jpg"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       /> */}
//       {/* <img
//         src="https://wallpapercave.com/wp/wp7667724.jpg"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://c4.wallpaperflare.com/wallpaper/597/132/967/monochrome-black-background-chains-bicycle-wallpaper-preview.jpg"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       /> */}
//     </Carousel>
    
//   );
// }

// export {CarouselDefault};



const HeroSection = () =>{

return(

    <div className={`w-full mt-5 h-[90vh] bg-${WhiteVarient()} flex justify-center items-center`}>
          <div
            className={`
           w-[90%] h-[95%] rounded-3xl bg-gradient-to-r from-[${LightVarient()}] to-[${DarkVarient()}]`}
          ></div>
          
        </div>
)

}





export default HeroSection;