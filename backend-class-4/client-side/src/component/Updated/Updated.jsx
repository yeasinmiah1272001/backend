
import { useLoaderData } from 'react-router-dom';

const Updated = () => {
       const loadedUsers = useLoaderData()
       // console.log(loadedUsers)

       const handleSubmit = e =>{
              e.preventDefault()
              const name = e.target.name.value;
              const email = e.target.email.value;
              const passWord = e.target.password.value;

              const obj = {
                name,
                email,
                passWord,
              };
              console.log(obj)

              fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, passWord, email }),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
       }


       return (
         <div className="block max-w-md rounded-lg bg-gray-300 p-6 shadow-md dark:bg-gray-700 mx-auto">
           <form onSubmit={handleSubmit}>
             <div className="mb-6">
               <label htmlFor="name" className="block text-neutral-500">
                 Product Name
               </label>
               <input
                 defaultValue={loadedUsers.name}
                 type="text"
                 name="name"
                 id="name"
                 className="block w-full rounded border-gray-400 px-3 py-2 focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-800"
                 placeholder="Enter product name"
               />
             </div>

             <div className="mb-6">
               <label htmlFor="email" className="block text-neutral-500">
                 Description
               </label>
               <input
                 name="email"
                 defaultValue={loadedUsers.email}
                 id="email"
                 className="block w-full rounded border-gray-400 px-3 py-2 focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-800"
                 placeholder="description"
               />
             </div>

             <div className="mb-6">
               <label htmlFor="password" className="block text-neutral-500">
                 Imgage Url
               </label>
               <input
                 name="password"
                 defaultValue={loadedUsers.passWord}
                 id="password"
                 className="block w-full rounded border-gray-400 px-3 py-2 focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-800"
                 placeholder="Url"
               />
             </div>

             <div className="mb-6">
               <input
                 type="checkbox"
                 id="subscribe"
                 name="subscribe"
                 className="mr-2"
               />
               <label htmlFor="subscribe" className="text-neutral-500">
                 Subscribe to our newsletter
               </label>
             </div>

             <button
               type="submit"
               className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:bg-primary-dark dark:bg-primary-dark"
             >
               Update Now
             </button>
           </form>
         </div>
       );
};

export default Updated;