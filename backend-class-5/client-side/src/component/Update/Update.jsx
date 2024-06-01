import { useLoaderData } from "react-router-dom";


const Update = () => {
       const updateData = useLoaderData()
       console.log(updateData)

       const handleSubmit = (e) => {
         e.preventDefault();
         const productName = e.target.coffeName.value;
         const cheif = e.target.cheif.value;
         const suplier = e.target.suplier.value;
         const price = e.target.price.value;
         const des = e.target.des.value;
         const img = e.target.img.value;

         const allInfo = {
           productName,
           cheif,
           suplier,
           price,
           des,
           img,
         };
         console.log(allInfo);

         fetch(`http://localhost:5000/coffee/${updateData._id}`, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             productName,
             cheif,
             suplier,
             price,
             des,
             img,
           }),
         })
           .then((res) => res.json())
           .then((data) => console.log(data));
       };



       return (
         <form
           onSubmit={handleSubmit}
           className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
         >
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="firstName"
               >
                 Name
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="firstName"
                 type="text"
                 placeholder="Enter coffee name"
                 name="coffeName"
                 defaultValue={updateData.name}
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="lastName"
               >
                 Chief
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="lastName"
                 type="text"
                 placeholder="Enter coffee chef"
                 name="cheif"
                 defaultValue={updateData.chief}
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="productName"
               >
                 Suplier
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="productName"
                 type="text"
                 placeholder="Enter coffee supplier"
                 name="suplier"
                 defaultValue={updateData.suplier}
               />
             </div>
             <div>
               <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="price"
               >
                 Price
               </label>
               <input
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="price"
                 type="text"
                 placeholder="Price"
                 name="price"
                 defaultValue={updateData.price}
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
                 placeholder="Description"
                 name="des"
                 defaultValue={updateData.des}
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
                 name="img"
                 defaultValue={updateData.img}
               />
             </div>
           </div>
           <div className="flex items-center justify-between">
             <button
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
             >
               Update
             </button>
           </div>
         </form>
       );
};

export default Update;