import { Link, useLocation, useNavigate } from "react-router-dom";
import logins from "../../../assets/images/login/login.svg"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const Login = () => {

       const { login} = useContext(AuthContext)
       const navigate = useNavigate()
       const location = useLocation()

       const handleLogin = (e) => {
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;

         const obj = {
           name,
           email,
           password,
         };
         console.log(obj);

         login(email, password)
           .then((result) => {
             const logInUser = result.user;
             console.log(logInUser)
            //  acces jwt token
             const user = {email};
             console.log("rhis is user email", user),
               axios
                 .post(
                   "https://car-doctor-server-phi-two.vercel.app/jwt",
                   user,
                   { withCredentials: true }
                 )
                 .then((res) => {
                   console.log(res.data);
                   if (res.data.success) {
                     navigate(location?.state ? location.state : "/");
                   }
                 });

           })
           .catch((error) => {
             console.error(error);
           });
       };



       return (
         <div className="hero min-h-screen ">
           <div className="hero-content flex-col lg:flex-row-reverse gap-6">
             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleLogin} className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Name</span>
                   </label>
                   <input
                     
                     placeholder="Name"
                     className="input input-bordered"
                     name="name"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     name="email"
                     required
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="password"
                     placeholder="password"
                     name="password"
                     className="input input-bordered"
                     required
                   />
                   <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
                 </div>
                 <Link>
                   <p>
                      pleace{" "}
                     <Link className="text-red-500" to="/registration">
                       Registration
                     </Link>{" "}
                   </p>
                 </Link>
               </form>
             </div>
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
               <img className="mt-4" src={logins} alt="" />
             </div>
           </div>
         </div>
       );
};

export default Login;