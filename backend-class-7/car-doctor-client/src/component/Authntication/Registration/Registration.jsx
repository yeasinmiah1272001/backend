import { Link } from "react-router-dom";
import login from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {

  const {  createUser } = useContext(AuthContext);



  const handleregister = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const obj = {
      name,
      email,
      password
    }
    console.log(obj)

    createUser(email, password)
    .then(result =>{
      console.log(result.user)

    })
    navigate("/")
    .catch(error => console.error(error))



  }



  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleregister} className="card-body">
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
                name="email"
                className="input input-bordered"
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
              <button className="btn btn-primary">Register</button>
            </div>
            <Link>
              <p>
                Already have an account pleace{" "}
                <Link className="text-red-500" to="/login">
                  Login
                </Link>{" "}
              </p>
            </Link>
          </form>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <img className="mt-4" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
