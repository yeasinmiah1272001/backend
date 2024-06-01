import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authntication/Provider/AuthProvider";

const Bookings = () => {
  const chackOut = useLoaderData();
  console.log(chackOut);
  const {user} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const serviceName = e.target.service.value;
    const rating = e.target.rating.value;
    const price = e.target.price.value;
    const date = e.target.date.value;
    const des = e.target.des.value;
    const img = e.target.img.value;
    const ObjInfo = {
       name,
       email,
      serviceName,
      rating,
      price,
      date,
      des,
      img,
    };
    console.log(ObjInfo);

    fetch(`https://car-doctor-server-phi-two.vercel.app/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ObjInfo),
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mt-10"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
           
            placeholder="user name"
            name="name"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            User Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            defaultValue={user?.email}
            placeholder="user email"
            name="email"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            Service Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            defaultValue={chackOut.title}
            placeholder="your servvice"
            name="service"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Enter raating"
            name="rating"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="productName"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            type="text"
            defaultValue={chackOut.price}
            placeholder="Enter your price"
            name="price"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="date"
            name="date"
          />
        </div>
        <div className="col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            defaultValue={chackOut.description}
            placeholder="Description"
            name="des"
          ></textarea>
        </div>
        <div className="col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imgSrc"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imgSrc"
            type="text"
            placeholder="Image URL"
            defaultValue={chackOut.img}
            name="img"
          />
        </div>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-orange-600">Order Confram</button>
      </div>
    </form>
  );
};

export default Bookings;
