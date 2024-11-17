import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./NavbarComponent";
import Home from "./HomeComponent";

const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="*" element={<h1>Not found page error 404</h1>} />
          <Route index element={<Home/>}/>
          
        </Routes>
    );
  };
  
  export default ParentRouter;