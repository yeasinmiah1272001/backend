import { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";


const PopularProducts = () => {
       const [populars, setPopural] = useState([])
       useEffect(() => {
              fetch(`/pupolar.json`)
              .then(res => res.json())
              .then(data => setPopural(data))
       },[])
       return (
         <div className="mt-5">
           <div className="my-4">
             <h1 className="text-2xl text-red-500 text-center font-bold">
               Popular Service
             </h1>
             <div>
               <h1 className="text-4xl text-red-600 text-center font-bold">
                 Browse Our Products
               </h1>
               <p className="text-center my-3">
                 the majority have suffered alteration in some form, by injected
                 humour, or randomised <br /> words which don't look even
                 slightly believable.
               </p>
             </div>
           </div>
           <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
              {
                     populars.map(popular => <PopularProduct key={popular.id} popular={popular}></PopularProduct> )

              }
           </div>
         </div>
       );
};

export default PopularProducts;