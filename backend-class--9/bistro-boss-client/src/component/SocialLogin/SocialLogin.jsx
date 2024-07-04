import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
       const { googleLogin } = useAuth();
       const handleGoogleLogin = () =>{
              googleLogin()
              .then((result) => {
                console.log("this is user", result.user);
              });
             

       }
       return (
         <div>
           <button onClick={handleGoogleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             <FaGoogle></FaGoogle>
           </button>
         </div>
       );
};

export default SocialLogin;