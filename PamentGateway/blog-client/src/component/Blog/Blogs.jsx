import { Link } from "react-router-dom";


const Blogs = ({blog}) => {
       const {imageURL, location, description, name,_id} = blog
       return (
         <div className="bg-white shadow-md rounded-lg overflow-hidden">
           <img
             src={imageURL}
             alt={name}
             className="w-full h-48 object-cover"
           />
           <div className="p-4">
             <h1 className="text-xl font-bold mb-2">{name}</h1>
             <p className="text-gray-600 mb-2">{location}</p>
             <p className="text-gray-700 mb-4">{description}</p>
             <Link to={`/blog/${_id}`}>
               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                 Buy Now
               </button>
             </Link>
           </div>
         </div>
       );
};

export default Blogs;