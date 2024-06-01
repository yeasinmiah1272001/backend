
import { Link } from "react-router-dom";
import logo from "../../assets/404.gif"

const Error = () => {
       return (
         <div>
           <Link to="/">
             <button className="btn-warning mx-auto">Go Back</button>
           </Link>
           <img className="mx-auto" src={logo} alt="" />
         </div>
       );
};

export default Error;