import React, { useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
// import "../assets/img.css"
const Blogs = ({blogs}) => {
       const{imageURL, location, description, name, id} = blogs;

       useEffect(() => {
         AOS.init({
           duration: 800, // Set your preferred animation duration
           easing: "ease-in-out", // Set your preferred easing function
         });
       }, []); 
       return (
         <Link to={`/details/${id}`}>

           <div
             className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
             data-aos="flip-left"
           >
             <img className="p-8 rounded-t-lg" src={imageURL} />

             <div className="px-5 pb-5">
               <div href="#">
                 <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                   {name}
                 </h1>
                 <div className="flex gap-3 items-center">
                   <IoLocationOutline />
                   <p className="text-xl">{location}</p>
                 </div>
                 <p>{description}</p>
               </div>
             </div>
           </div>
         </Link>
       );
};

export default Blogs;