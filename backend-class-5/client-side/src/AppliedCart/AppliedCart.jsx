

import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const AppliedCart = () => {
       const appliedCart = useLoaderData();
       // console.log(appliedCart);

       const handleDelete = _id =>{
             fetch(`http://localhost:5000/coffee/${_id}`, {
               method: "DELETE",
             })
               .then((res) => res.json())
               .then((data) => {

                      if (data.deletedCount > 0){
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
                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your file has been deleted.",
                                  icon: "success",
                                });
                              }
                            });

                      } 
                      console.log(data);
               });
       }

   
  return (
    <div className="grid grid-cols-3 gap-8 mx-10 mt-8">
      {appliedCart.map((cart) => (
        <div
          key={cart._id}
          className="max-w-md mx-auto bg-gray-200 shadow-md rounded-md overflow-hidden"
        >
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Left side with image, name, and price */}
            <div className="flex flex-col lg:flex-row items-center">
              <img
                className="w-44 h-28 rounded-full object-cover"
                src={cart.img}
                alt="Product Image"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{cart.name}</h2>
                <h2 className="text-lg font-semibold">{cart.chief}</h2>
                <h3 className="text-sm text-gray-600">{cart.price}</h3>
              </div>
            </div>
            {/* Right side with buttons */}
            <div className=" space-x-2 space-y-4 w-auto">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
                <MdDelete onClick={() => handleDelete(cart._id)} />
              </button>
              <br />
              <Link to={`/update/${cart._id}`}>
                <button className="px-4 py-2 mt-2 bg-red-500 text-white rounded-md">
                  <FaPencilAlt />
                </button>
              </Link>
              <br />
              <Link to={`/details/${cart._id}`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md mt-2">
                  <FaEye />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedCart;
