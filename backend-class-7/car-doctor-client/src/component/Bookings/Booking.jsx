import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authntication/Provider/AuthProvider";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // fetch(`http://localhost:5000/booking?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setBooking(data))
    //   .catch((error) => console.error("Error fetching data:", error));
    const url = `https://car-doctor-server-phi-two.vercel.app/booking?email=${user?.email}`;
    axios.get(url, {withCredentials:true})
    .then(res =>{
      setBooking(res.data);
    })
  }, [user.email]);

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
        fetch(`https://car-doctor-server-phi-two.vercel.app/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = booking.filter((item) => item._id !== id);
            setBooking(remaining);
            console.log(data);
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to delete the booking.",
              icon: "error",
            });
            console.error("Error deleting data:", error);
          });
      }
    });
  };




  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xl font-bold">Date</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Service Name</th>
            <th className="px-4 py-2">price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((data) => (
            <tr key={data._id} className="text-center">
              <td className="border px-4 py-2 font-bold">{data.date}</td>
              <td className="border px-4 py-2">
                <img src={data.img} alt="" className="w-24 h-24 object-cover" />
              </td>
              <td className="border px-4 py-2">{data.serviceName}</td>
              <td className="border px-4 py-2 font-bold">{data.price} $</td>
              <td className="border px-4 py-2">
                <button className="btn btn-warning mx-1">
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-secondary mx-1"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
