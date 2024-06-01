
import banner1 from "../../Image/cups/Rectangle 10.png";
import banner2 from "../../Image/cups/Rectangle 11.png";
import banner3 from "../../Image/cups/Rectangle 13.png";
import banner4 from "../../Image/cups/Rectangle 12.png";
import banner5 from "../../Image/cups/Rectangle 14.png";
import banner6 from "../../Image/cups/Rectangle 15.png";

const TeaGallary = () => {
       return (
         <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
           <div className="-m-1 flex flex-wrap md:-m-2">
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner1}
                 />
               </div>
             </div>
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner2}
                 />
               </div>
             </div>
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner3}
                 />
               </div>
             </div>
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner4}
                 />
               </div>
             </div>
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner5}
                 />
               </div>
             </div>
             <div className="flex w-1/3 flex-wrap">
               <div className="w-full p-1 md:p-2">
                 <img
                   alt="gallery"
                   className="block h-full w-full rounded-lg object-cover object-center"
                   src={banner5}
                 />
               </div>
             </div>
           </div>
         </div>
       );
};

export default TeaGallary;