import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"; // Replace with your actual data loading library

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();

  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: "",
    bdt: "",
    post: "",
    billingAddress: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    e.productId = id;

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 flex justify-between">
      {/* Left side: Details */}
      <div className="w-3/5">
        <h1 className="text-3xl font-bold mb-4">{details.name}</h1>
        <img
          src={details.imageURL}
          alt={details.name}
          className="rounded-lg mb-4"
        />
        <p className="text-gray-600">{details.location}</p>
      </div>

      {/* Right side: Checkout */}
      <div className="w-2/5 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="bdt"
              className="block text-sm font-medium text-gray-700"
            >
              BDT
            </label>
            <input
              type="text"
              id="bdt"
              name="bdt"
              value={formData.bdt}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="BDT"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="post"
              className="block text-sm font-medium text-gray-700"
            >
              Post
            </label>
            <input
              type="text"
              id="post"
              name="post"
              value={formData.post}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Post"
              required
            />
          </div>

          <div>
            <label
              htmlFor="billingAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Billing Address
            </label>
            <textarea
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter billing address"
              required
            ></textarea>
          </div>

          {/* Example button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
