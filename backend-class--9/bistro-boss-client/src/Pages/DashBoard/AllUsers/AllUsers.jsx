import { useQuery } from "@tanstack/react-query";
import { FaUsersLine } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";


const AllUsers = () => {
       const axiosSecure = useAxiosSecure()
       const {data : users = [], refetch} = useQuery({
              queryKey: ["users"],
              queryFn: async () =>{
                     const res = await axiosSecure.get("/users")
                     return res.data;

              }

       })

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

               axiosSecure.delete(`/users/${id}`).then((res) => {
                 if (res.data.deletedCount) {
                   Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                   });
                 }
                 console.log(res.data);
                 refetch();
               });
             }
           });
         };


       return (
         <div className=" mt-4">
              <SectionTitle subHeading={"How many"} heading={"Manage All Users"}></SectionTitle>
           <div className="font-semibold text-3xl flex justify-around">
             <h1>All Users : {users.length}</h1>
             <button className="btn btn-error">Pay</button>
           </div>
           <div>
             <div className="overflow-x-auto">
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>Serial No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 2 */}
                   {users.map((item, index) => (
                     <tr key={item._id}>
                       <th>{index + 1}</th>
                       <th className="font-semibold">{item.name}</th>

                       <th className="font-semibold">{item.email}</th>

                       <td className="font-semibold">
                         <FaUsersLine />
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

export default AllUsers;