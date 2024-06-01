import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
       const users = useLoaderData()
      const handleDelete = _id =>{
       console.log(_id)
       fetch(`http://localhost:5000/users/${_id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
         });
      }
       return (
         <div>
           <h1>this is users</h1>
           <div>
             {users.map((user) => (
               <div key={user._id}>
                 <h1>{user.name}</h1>
                 <h1>{user.email}</h1>
                 <button onClick={() => handleDelete(user._id)} className="btn btn-ghost">
                   Delete
                 </button>
               </div>
             ))}
           </div>
         </div>
       );
};

export default Users;