import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
  const axiosValue = useAxiosSecure()

        const {category, image, recipe, name, price,_id } = item;
         const location = useLocation();
         const [, refetch] = useCart()

        const {user} = useAuth()
        const navigate = useNavigate()

        const handleAddToCart = food =>{
          if(user && user.email){

            const menuItem = {
              menuId: _id,
              email:user.email,
              price,
              image,
              name
            }

            // axios.post("http://localhost:5000/carts", menuItem)
            axiosValue.post("/carts", menuItem).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added succesfull`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                console.log(res.data);
              }
              refetch()
            });

          

            
          }
          else{
            Swal.fire({
              title: "you are not login",
              text: "pleace login added to the cart!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Pleace login",
            }).then((result) => {
              if (result.isConfirmed) {
               navigate("/login", {state:{from: location} });
              }
            });

          }

         


          
        }
       return (
         <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
             <img src={image} alt="Shoes" className="rounded-xl" />
           </figure>
           <p className="bg-black text-white absolute right-0 mr-4 mt-4 rounded-lg">
             {price}
           </p>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{name}</h2>
             <p>{recipe}</p>
             <div className="card-actions">
               <button
                 onClick={() => handleAddToCart(item)}
                 className="btn btn-outline mx-auto justify-center  border-0 border-b-4 block text-orange-500"
               >
                 Add To Cart
               </button>
             </div>
           </div>
         </div>
       );
};

export default FoodCard;