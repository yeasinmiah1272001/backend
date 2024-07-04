// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const Riview = () => {
        useEffect(() => {
          AOS.init({
            duration: 800, // Set your preferred animation duration
            easing: "ease-in-out", // Set your preferred easing function
          });
        }, []); 
       return (
         <div className="mt-5  grid lg:grid-cols-4 gap-5 " data-aos="fade-up">
           <div className="card  bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="card-title">Card title!</h2>
               <p>
                 I stumbled upon this travel blog and was instantly captivated
                 by the incredible adventures documented by the writer. The
                 vivid descriptions and stunning{" "}
               </p>
             </div>
           </div>
           <div className="card bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="card-title">Card title!</h2>
               <p>
                 This travel blog has been a delightful discovery for me. The
                 authors storytelling skills are exceptional, making each post
                 an immersive experience. The blog goes beyond the{" "}
               </p>
             </div>
           </div>
           <div className="card bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="card-title">Card title!</h2>
               <p>
                 touch and valuable tips shared by the author. It has become my
                 go-to source for travel inspiration and planning. Highly
                 recommended!
               </p>
             </div>
           </div>
           <div className="card bg-base-100 shadow-xl">
             <div className="card-body">
               <h2 className="card-title">Card title!</h2>
               <p>
                 touch and valuable tips shared by the author. It has become my
                 go-to source for travel inspiration and planning. Highly
                 recommended!
               </p>
             </div>
           </div>
         </div>
       );
};

export default Riview;