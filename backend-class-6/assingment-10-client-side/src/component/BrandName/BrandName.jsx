import { Link } from "react-router-dom";


const BrandName = ({brand}) => {

       return (
         <div className="mt-16">
           <h1 className="text-3xl font-bold text-center mb-4">OUR BRAND !!</h1>
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
             {brand.slice(0,6).map((item) => (
               <Link
                 to={`/category/${item.category}`}
                 key={item._id}
                 className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
               >
                 <div className="relative overflow-hidden bg-cover bg-no-repeat">
                   <img
                     className="rounded-t-lg w-60 mx-auto"
                     src={item.img}
                     alt=""
                   />
                 </div>
               </Link>
             ))}
           </div>
         </div>
       );
};

export default BrandName;