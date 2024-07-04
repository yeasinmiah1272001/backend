
import Blogs from './Blogs';


const BearPlace = ({blogs}) => {
        
      //  console.log(blogs)
       return (
         <div>
           <div className=" text-3xl font-bold p-7">
             <h1 className="border-l-4 text-3xl text-amber-500 font-bold m-3">
               Best Places to visit
             </h1>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  data-aos="flip-left"'>
             {blogs.map((blogs) => (
               <Blogs key={blogs.id} blogs={blogs}></Blogs>
             ))}
           </div>
         </div>
       );
};

export default BearPlace;