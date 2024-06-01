import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
       const {googleLogin} = useAuth()
       const handleGoogleLogin = () =>{
              googleLogin()
              .then(result =>{
                      console.log("this is user", result.user);

              })
             

       }
       return (
         <div>
           <input
             onClick={handleGoogleLogin}
             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             type="submit"
             value="Google"
           />
         </div>
       );
};

export default SocialLogin;