import { Link } from "react-router-dom";


const Service = ({service}) => {
       const {title, id} = service
       return (
              <Link to={`/details/${id}`}>
                     <h1>{title}</h1>
                     
              </Link>
       );
};

export default Service;