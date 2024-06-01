import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import Swal from "sweetalert2";


const Servicess = () => {
       const services = useLoaderData()
     

     const handleDelete = (_id) =>{
       console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
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
                    })
                    
                    .then((result) => {
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
         <div>
           {services.map((service) => (
             <Service
               key={service._id}
               service={service}
               handleDelete={handleDelete}
             ></Service>
           ))}
         </div>
       );
};

export default Servicess;