import { FaFacebook, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";


const Upcamming = () => {
       return (
         <div className="flex flex-col lg:flex-row justify-between my-4 mx-4 lg:mx-10">
           <p className="mb-2 lg:mb-0">
             <small className="text-red-500">UPCOMING MATCH</small> : Real
             Soccer vs Valencia, California
           </p>
           <div className="flex flex-col sm:flex-row gap-2 mb-2 lg:mb-0">
             <div className="flex items-center gap-2">
               <GoLocation></GoLocation>
               <small>12980 Mignal Hill Road California, NA, 20110</small>
             </div>
             <div className="flex items-center gap-2">
               <FaPhone></FaPhone>
               <small>+1 23 4567890</small>
             </div>
           </div>
           <div className="flex justify-center gap-3">
             <FaFacebook></FaFacebook>
             <FaLinkedin></FaLinkedin>
             <FaTwitter></FaTwitter>
           </div>
         </div>
       );
};

export default Upcamming;