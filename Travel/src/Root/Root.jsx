import { Outlet } from "react-router-dom";
import Navbar from "../component/Home/Navbar";
import Footer from "../component/Footer/Footer";


const Root = () => {



 

  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
