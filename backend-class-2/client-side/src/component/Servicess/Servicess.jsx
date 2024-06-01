import {  useLoaderData } from "react-router-dom";
import Service from "./Service";

const Servicess = () => {
       const data = useLoaderData()
       console.log(data)
 
       return (
         <div>
              <h1>Length: {data.length}</h1>
           <h1>This is service</h1>
           <div>
              {
                     data.map((service) => <Service key={service.id} service={service}></Service>)
              }
           </div>
           
         </div>
       );
};

export default Servicess;