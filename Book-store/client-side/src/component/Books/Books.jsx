
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Book from "./Book";
import { Link } from "react-router-dom";

const Books = () => {
  const { data: cart = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await axios.get("https://server-side-one-mauve.vercel.app/books");
      return response.data;
    },
  });



  return (
    <div className=" py-8 sm:py-12 md:py-16 lg:py-26 shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        All Book Collection
      </h1>
      <div className="divider divider-secondary">
        Programming Book Collection
      </div>

   
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Render your books data here */}
          {cart.slice(0, 16).map((book) => (
            
            <Book key={book.id} book={book}></Book>
          ))}
        </div>

      {/* Centered "Show All" Button */}
      <div className="flex justify-center mt-4">
        <Link to={"/allbooks"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Show All
          </button>
        </Link>
      </div>
    </div>
    
  );
 
};

export default Books;
