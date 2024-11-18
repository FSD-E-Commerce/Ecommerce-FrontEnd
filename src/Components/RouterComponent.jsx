import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./NavbarComponent";
// import Home from "./HomeComponent";
// import NavBarcomp from "./NavBarComponent2";
import NotFoundPage from "./PageNotFound";
import Home from "./HomeComponent";

const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          {/* <Route index element={<Home/>}/> */}
          <Route index element={<Home/>}/>
          
        </Routes>
    );
  };
  
  export default ParentRouter;