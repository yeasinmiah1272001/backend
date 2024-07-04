import cover from "../assets/cover-women.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

const CoverWimrn = () => {
        useEffect(() => {
          AOS.init({
            duration: 200, // Set your preferred animation duration
            easing: "ease-in-out", // Set your preferred easing function
          });
        }, []); 
       return (
         <div className="mt-5" data-aos="zoom-in">
           <img className="w-full h-96" src={cover} alt="" />
         </div>
       );
};

export default CoverWimrn;