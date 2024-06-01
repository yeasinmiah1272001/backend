import {  useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const CartDetails = () => {
       const detailsCart = useLoaderData()
       // console.log(detailsCart)
       const {price} = useParams()
       // const idInt = parseInt(id)
       console.log(price)
       const findData = detailsCart.find((data) => data.price == price)
       console.log(findData)

        const handleAddToCard = () => {
          fetch("https://assingment-10-server-khaki.vercel.app/added", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(findData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Product added",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }

              console.log(data);
            });
        }
  








       return (
         <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row justify-around mx-auto">
           <img
             className="w-48 rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
             src={findData.cover}
             alt=""
           />
           <div className="flex flex-col justify-start p-6">
             <h5 className="mb-2 text-xl font-medium">
               Brand: {findData.category}
             </h5>
             <h5 className="mb-2 text-sm font-medium">
               Price: {findData.price}
             </h5>
             <h5 className="mb-2 text-sm font-medium">
               Rating: {findData.rating}
             </h5>

             <p className="text-xs text-surface/75 mb-2 dark:text-neutral-300">
               Last updated 3 mins ago
             </p>

             <div className="flex mt-auto gap-3">
               <button
                 onClick={handleAddToCard}
                 type="button"
                 className="inline-block rounded bg-red-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong md:w-32 md:pt-3 md:pb-3 lg:w-40 lg:pt-4 lg:pb-4"
               >
                 Add To Cart
               </button>
             </div>
           </div>
         </div>
       );
};

export default CartDetails;