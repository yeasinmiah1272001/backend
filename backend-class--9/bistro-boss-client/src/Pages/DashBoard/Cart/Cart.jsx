import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";


const Cart = () => {
       const [cart,refetch] = useCart()
       const axiosValue = useAxiosSecure();
       console.log(cart)
       const totalPrice = cart.reduce((Previousprice, currentPrice) => Previousprice + currentPrice.price, 0)
      const handleDelete = (id) => {

       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
       //     Swal.fire({
       //       title: "Deleted!",
       //       text: "Your file has been deleted.",
       //       icon: "success",
       //     });

       axiosValue.delete(`/carts/${id}`)
       .then(res =>{
              if(res.data.deletedCount){
                      Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success",
           });

              }
              console.log(res.data)
              refetch()
       })




         }
       });
       
      };


       return (
         <div className=" mt-4">
           <div className="font-semibold text-3xl flex justify-around">
             <h1>Total order : {cart.length}</h1>
             <h1>Total Price : {totalPrice}</h1>
             <button className="btn btn-error">Pay</button>
           </div>
           <div>
             <div className="overflow-x-auto">
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>Serial No</th>
                     <th>Image</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Action</th>
                     
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 2 */}
                   {cart.map((item,index) => (
                     <tr key={item._id}>
                       <th>{index + 1}</th>
                       <div className="flex items-center gap-3">
                         <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                             <img
                               src={item.image}
                               alt="Avatar Tailwind CSS Component"
                             />
                           </div>
                         </div>
                       </div>
                       <th className="font-semibold">{item.name}</th>
                       
                       <td className="font-semibold">
                         {item.price}
                         <br />
                       </td>

                       <th>
                         <button
                           onClick={() => handleDelete(item._id)}
                           className="text-red-500 btn-lg"
                         >
                           <MdDelete />
                         </button>
                       </th>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       );
};

export default Cart;