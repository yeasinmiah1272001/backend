import { useLoaderData } from "react-router-dom";


const Details = () => {
       const cartDetails = useLoaderData()
       console.log(cartDetails)
       return (
         <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
           <figure>
             <img src={cartDetails.img} alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">
               {cartDetails.name}
               <div className="badge badge-secondary">NEW</div>
             </h2>
             <p>{cartDetails.chief}</p>
             <p>{cartDetails.price}</p>
             <div className="card-actions justify-end">
               <div className="badge badge-outline">Fashion</div>
               <div className="badge badge-outline">Products</div>
             </div>
           </div>
         </div>
       );
};

export default Details;